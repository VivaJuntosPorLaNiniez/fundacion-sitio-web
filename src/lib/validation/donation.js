const MIN_DONATION_AMOUNT = 5;

const VALIDATION_FIELDS_BY_STEP = {
  0: ['nombres', 'apellidos', 'tipoDocumento', 'numeroDocumento'],
  1: ['email', 'telefono'],
  2: ['monto', 'frecuencia']
};

export function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function isValidEmail(email) {
  if (!isNonEmptyString(email)) return false;
  const cleanEmail = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail) && cleanEmail.length <= 254;
}

export function isValidDocumentNumber(numeroDocumento, tipoDocumento) {
  if (!isNonEmptyString(numeroDocumento)) return false;
  const doc = numeroDocumento.trim();
  const genericPattern = /^[A-Za-z0-9\-\s]{4,25}$/;
  if (!genericPattern.test(doc)) return false;

  if (typeof tipoDocumento === 'string' && tipoDocumento.trim().toUpperCase() === 'DUI') {
    return /^\d{8}-?\d$/.test(doc);
  }

  return true;
}

export function normalizeDonationBody(body) {
  return {
    monto: body.monto,
    nombres: typeof body.nombres === 'string' ? body.nombres.trim() : body.nombres,
    apellidos: typeof body.apellidos === 'string' ? body.apellidos.trim() : body.apellidos,
    tipoDocumento: typeof (body.tipoDocumento ?? body.tipoidentidad) === 'string'
      ? (body.tipoDocumento ?? body.tipoidentidad).trim()
      : (body.tipoDocumento ?? body.tipoidentidad),
    numeroDocumento: typeof (body.numeroDocumento ?? body.numidentidad) === 'string'
      ? (body.numeroDocumento ?? body.numidentidad).trim()
      : (body.numeroDocumento ?? body.numidentidad),
    email: typeof (body.email ?? body.correo) === 'string'
      ? (body.email ?? body.correo).trim()
      : (body.email ?? body.correo),
    telefono: typeof body.telefono === 'string' ? body.telefono.trim() : body.telefono,
    frecuencia: typeof body.frecuencia === 'string' ? body.frecuencia.trim() : body.frecuencia
  };
}

export function validateDonationPayload(payload, options = {}) {
  const step = options.step ?? 'all';
  const errors = [];
  const fieldsToValidate = step === 'all'
    ? ['nombres', 'apellidos', 'tipoDocumento', 'numeroDocumento', 'email', 'telefono', 'monto', 'frecuencia']
    : VALIDATION_FIELDS_BY_STEP[step] || [];

  const shouldValidate = (field) => fieldsToValidate.includes(field);

  if (shouldValidate('nombres') && !isNonEmptyString(payload.nombres)) errors.push('El campo nombres es obligatorio.');
  if (shouldValidate('apellidos') && !isNonEmptyString(payload.apellidos)) errors.push('El campo apellidos es obligatorio.');
  if (shouldValidate('tipoDocumento') && !isNonEmptyString(payload.tipoDocumento)) errors.push('El tipo de documento es obligatorio.');
  if (shouldValidate('numeroDocumento') && !isValidDocumentNumber(payload.numeroDocumento, payload.tipoDocumento)) {
    errors.push('El numero de documento no es valido para el tipo seleccionado.');
  }
  if (shouldValidate('email') && !isValidEmail(payload.email)) errors.push('El correo electronico no tiene un formato valido.');
  if (shouldValidate('telefono') && !isNonEmptyString(payload.telefono)) errors.push('El campo telefono es obligatorio.');
  if (shouldValidate('frecuencia') && !isNonEmptyString(payload.frecuencia)) errors.push('El campo frecuencia es obligatorio.');

  const montoNumero = Number(payload.monto);
  if (shouldValidate('monto') && (!Number.isFinite(montoNumero) || montoNumero < MIN_DONATION_AMOUNT)) {
    errors.push('El monto mínimo es de $5. Por favor ingresa un monto válido.');
  }

  return {
    isValid: errors.length === 0,
    errors,
    montoNumero
  };
}
