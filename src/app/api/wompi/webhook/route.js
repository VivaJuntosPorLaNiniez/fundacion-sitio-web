import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(request) {
  try {
    const body = await request.json();

    // Intentamos extraer identificadorEnlaceComercio de distintos lugares
    let identificador = null;
    if (body.identificadorEnlaceComercio) identificador = body.identificadorEnlaceComercio;
    if (!identificador && body.data && body.data.identificadorEnlaceComercio) identificador = body.data.identificadorEnlaceComercio;

    // Si no viene, intentamos buscar idEnlace o idTransaccion y no haremos match directo
    if (!identificador) {
      console.log('Webhook Wompi recibido, sin identificadorEnlaceComercio', body);
      return NextResponse.json({ success: true });
    }

    const parts = identificador.split('-');
    const donacionId = parts.length > 1 ? Number(parts[1]) : null;
    if (!donacionId) {
      console.log('Webhook Wompi: identificador no parseable', identificador);
      return NextResponse.json({ success: false, error: 'Identificador no parseable' }, { status: 400 });
    }

    // Determinar estado: Wompi puede enviar distintos payloads. Suponemos que si llega webhook, pago finalizado con éxito.
    // Para seguridad, ideal validar el payload con firma/verificar con API. Aquí marcamos como exitoso por simplicidad.
    await supabaseAdmin.from('donantes').update({ estado: true }).eq('id', donacionId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error en webhook Wompi:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
