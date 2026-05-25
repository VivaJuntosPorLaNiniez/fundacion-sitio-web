import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { obtenerAccessToken, obtenerTransaccionCompra } from '@/lib/wompi';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const identificador = url.searchParams.get('identificadorEnlaceComercio');
    const idTransaccion = url.searchParams.get('idTransaccion');
    const idEnlace = url.searchParams.get('idEnlace');

    if (!identificador && !idTransaccion && !idEnlace) {
      return NextResponse.json({ success: false, error: 'Faltan parámetros de verificación.' }, { status: 400 });
    }

    // Preferimos verificar con Wompi usando idTransaccion si está disponible
    const auth = await obtenerAccessToken();
    if (!auth.ok) {
      return NextResponse.json({ success: false, error: 'No se pudo autenticar con Wompi.' }, { status: 500 });
    }
    const accessToken = auth.data.access_token;

    let transaccionOk = false;
    let mensaje = '';

    if (idTransaccion) {
      const resp = await obtenerTransaccionCompra({ accessToken, idTransaccion });
      if (resp.ok && (resp.data?.esAprobada === true || resp.data?.esReal === true || resp.data?.transaccionCompra?.resultadoTransaccion === 0)) {
        transaccionOk = true;
        mensaje = 'Transacción aprobada por Wompi.';
      } else {
        mensaje = resp.data?.mensaje || resp.raw || 'Transacción no aprobada.';
      }
    }

    // Si no tenemos idTransaccion o chequeo falló, aceptamos la confirmación mínima vía identificador
    if (!idTransaccion && identificador) {
      // asumimos que si Wompi redirigió con identificador e idEnlace, el pago fue iniciado; no lo marcamos como pagado hasta webhook
      mensaje = 'Confirmación recibida del enlace de pago. Usa webhook para validar definitivamente.';
    }

    // Si la transacción está aprobada, actualizamos la fila de donante usando el identificador
    if (transaccionOk && identificador) {
      // identificador tiene formato donacion-<id>
      const parts = identificador.split('-');
      const donacionId = parts.length > 1 ? Number(parts[1]) : null;
      if (donacionId) {
        await supabaseAdmin.from('donantes').update({ estado: true }).eq('id', donacionId);
      }
    }

    return NextResponse.json({ success: transaccionOk || !!identificador, message: mensaje });

  } catch (error) {
    console.error('Error confirmando transaccion:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
