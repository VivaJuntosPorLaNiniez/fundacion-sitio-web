import { NextResponse } from 'next/server';
import { normalizeDonationBody, validateDonationPayload } from '@/lib/validation/donation';

export async function POST(request) {
  try {
    const body = await request.json();
    const step = body.step ?? 'all';
    const payload = normalizeDonationBody(body);
    const validation = validateDonationPayload(payload, { step });

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error validando donacion:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
