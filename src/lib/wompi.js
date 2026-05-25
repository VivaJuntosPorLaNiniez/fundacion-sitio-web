const WOMPI_API_BASE = "https://api.wompi.sv"; 
const WOMPI_AUTH_URL = "https://id.wompi.sv/connect/token";

const parseJsonSafely = (text) => {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

// OBTENER EL ACCESS TOKEN (Se usa para todas las operaciones de la API)
export async function obtenerAccessToken() {
    const clientId = process.env.WOMPI_CLIENT_ID;
  const clientSecret = process.env.WOMPI_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("ERROR CRÍTICO: Las variables de entorno WOMPI_CLIENT_ID o WOMPI_CLIENT_SECRET no están cargadas.");
    return { ok: false, error: "Faltan credenciales de entorno." };
  }

  // Formateamos el cuerpo manualmente para evitar cualquier fallo de codificación de librerías
  const bodyString = `grant_type=client_credentials&audience=wompi_api&client_id=${encodeURIComponent(clientId.trim())}&client_secret=${encodeURIComponent(clientSecret.trim())}`;

  try {
    const response = await fetch(WOMPI_AUTH_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: bodyString
    });

    const raw = await response.text();

    if (!response.ok) {
      return { ok: false, error: `Error HTTP ${response.status}`, raw };
    }

    const data = parseJsonSafely(raw);

    if (!data?.access_token) {
      return { ok: false, error: "JSON sin access_token", raw };
    }

    return { ok: true, data, raw };

  } catch (error) {
    console.error("CRASH EN FETCH DE AUTENTICACIÓN:", error);
    return { ok: false, error: "Fallo de conexión de red.", cause: error };
  }
}

// CREAR ENLACE DE PAGO
export async function crearEnlacePago({
  accessToken,
  identificadorEnlaceComercio,
  monto,
  nombreProducto,
  urlRedirect,
  emailsNotificacion
}) {
  let response;
  try {
    response = await fetch(`${WOMPI_API_BASE}/EnlacePago`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        identificadorEnlaceComercio,
        monto: parseFloat(monto),
        nombreProducto,
        configuracion: {
          urlRedirect,
          emailsNotificacion
        }
      })
    });
  } catch (error) {
    return { ok: false, error: "No se pudo conectar con Wompi (enlace de pago).", cause: error };
  }

  const raw = await response.text();
  const data = parseJsonSafely(raw);

  if (!response.ok) {
    console.error("Respuesta cruda enlace de pago:", raw);
    console.error("Estado HTTP enlace de pago:", response.status, response.statusText);
  }

  return { ok: response.ok, data, raw };
}

// OBTENER TRANSACCIÓN DE COMPRA POR ID (para verificar estado de pago)
export async function obtenerTransaccionCompra({ accessToken, idTransaccion }) {
  let response;
  try {
    response = await fetch(`${WOMPI_API_BASE}/ObtenerTransaccionCompra?idTransaccion=${encodeURIComponent(idTransaccion)}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
      }
    });
  } catch (error) {
    return { ok: false, error: "No se pudo conectar con Wompi (obtener transaccion).", cause: error };
  }

  const raw = await response.text();
  const data = parseJsonSafely(raw);

  if (!response.ok) {
    console.error("Respuesta cruda obtenerTransaccionCompra:", raw);
    console.error("Estado HTTP obtenerTransaccionCompra:", response.status, response.statusText);
  }

  return { ok: response.ok, data, raw };
}