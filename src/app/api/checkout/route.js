import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin'; 
import { obtenerAccessToken, crearEnlacePago } from '@/lib/wompi';
import crypto from 'crypto';
import { normalizeDonationBody, validateDonationPayload } from '@/lib/validation/donation';

export async function POST(request) {
  let donacionId = null;

  try {
    const body = await request.json();
    const payload = normalizeDonationBody(body);
    const validation = validateDonationPayload(payload);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: validation.errors[0] || 'Datos invalidos.',
          details: validation.errors
        },
        { status: 400 }
      );
    }

    const {
      nombres,
      apellidos,
      tipoDocumento,
      numeroDocumento,
      email,
      telefono,
      frecuencia
    } = payload;

    const monto = validation.montoNumero;

    const { data: donacion, error: dbError } = await supabaseAdmin.from('donantes').insert([{
      nombres,
      apellidos,
      correo: email,
      tipoidentidad: tipoDocumento,
      numidentidad: numeroDocumento,
      tel: telefono,
      monto,
      frecuencia
    }]).select().single();

    if (dbError) {
      return NextResponse.json({ success: false, error: dbError.message }, { status: 500 });
    }

    donacionId = donacion.id;

    console.log('--- SOLICITANDO ACCESS TOKEN ---');
    const auth = await obtenerAccessToken();
    if (!auth.ok) {
      return NextResponse.json({ success: false, error: `Fallo de API: ${auth.raw}` }, { status: 400 });
    }

    const accessToken = auth.data.access_token;

    console.log('--- CREANDO ENLACE DE PAGO ---');
    const urlRedirect = process.env.WOMPI_LINK_REDIRECT_URL || 'http://localhost:3000/donar/resultado';
    const identificadorEnlaceComercio = `don-${crypto.randomUUID()}`;

    try {
      const { error: updIdentErr } = await supabaseAdmin
        .from('donantes')
        .update({ identificador_enlace_wompi: identificadorEnlaceComercio })
        .eq('id', donacionId);
      if (updIdentErr) console.warn('No se pudo guardar identificador_enlace_wompi:', updIdentErr.message || updIdentErr);
    } catch (err) {
      console.warn('Error guardando identificador_enlace_wompi:', err);
    }

    const pago = await crearEnlacePago({
      accessToken,
      identificadorEnlaceComercio,
      monto,
      nombreProducto: 'Donación',
      urlRedirect,
      emailsNotificacion: email
    });

    try {
      const fechaNow = new Date().toISOString();
      const { error: updFechaErr } = await supabaseAdmin
        .from('donantes')
        .update({ fecha_transaccion: fechaNow })
        .eq('id', donacionId);
      if (updFechaErr) console.warn('No se pudo guardar fecha_transaccion:', updFechaErr.message || updFechaErr);
    } catch (err) {
      console.warn('Error guardando fecha_transaccion:', err);
    }

    if (pago.ok && pago.data?.urlEnlace) {
      return NextResponse.json({ success: true, data: pago.data, url: pago.data.urlEnlace });
    }

    const mensajeError = pago.data?.mensaje || pago.error || 'No se pudo crear el enlace de pago.';
    return NextResponse.json({ success: false, error: mensajeError }, { status: 400 });
  } catch (error) {
    console.error('CRASH INTERNO EN EL SERVIDOR:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}