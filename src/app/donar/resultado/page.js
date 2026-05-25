"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MiniPortada from "@/components/ui/MiniPortada";

export default function ResultadoPage() {
  const searchParams = useSearchParams();
  const identificador = searchParams.get("identificadorEnlaceComercio") || "";
  const idTransaccion = searchParams.get("idTransaccion") || "";
  const idEnlace = searchParams.get("idEnlace") || "";
  const monto = searchParams.get("monto") || "";

  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Llamar al endpoint de confirmación para validar la transacción y actualizar la DB
    const confirmar = async () => {
      try {
        const params = new URLSearchParams();
        if (identificador) params.set("identificadorEnlaceComercio", identificador);
        if (idTransaccion) params.set("idTransaccion", idTransaccion);
        if (idEnlace) params.set("idEnlace", idEnlace);

        const res = await fetch(`/api/checkout/confirm?${params.toString()}`);
        const json = await res.json();
        if (res.ok && json.success) {
          setStatus("success");
          setMessage(json.message || "Donación confirmada correctamente.");
        } else {
          setStatus("failed");
          setMessage(json.error || json.message || "No se pudo verificar la transacción.");
        }
      } catch (err) {
        setStatus("failed");
        setMessage("Error al contactar al servidor.");
      }
    };

    confirmar();
  }, [identificador, idTransaccion, idEnlace]);

  return (
    <>
      <MiniPortada
        imageSrc="/portadas/donar.jpg"
        imageAlt="Portada de resultado de donación"
        title="¡Gracias por tu donación!"
        description="
        Tu donación marcará una gran diferencia en la vida de quienes más lo necesitan.
        Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos."
        />

      <section className="px-6 py-8">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm md:px-12">
            <h2 className="text-2xl font-bold text-slate-900">Comprobante de donación</h2>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 space-y-2">
              <p>
                <strong>Identificador:</strong> {identificador || idEnlace || "No disponible"}
              </p>
              <p>
                <strong>Monto:</strong> {monto ? `$${monto}` : "No disponible"}
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
              {status === "pending" && (
                <div className="flex items-start gap-3 text-slate-700">
                  <span className="loading loading-spinner loading-sm mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Verificando transaccion...</p>
                    <p className="text-sm text-slate-600">Espera un momento mientras confirmamos el pago.</p>
                  </div>
                </div>
              )}

              {status === "success" && (
                <div className="text-emerald-700">
                  <p className="text-base font-semibold">Pago confirmado</p>
                  <p className="mt-1 text-sm">{message}</p>
                </div>
              )}

              {status === "failed" && (
                <div className="text-rose-700">
                  <p className="text-base font-semibold">Pago no confirmado</p>
                  <p className="mt-1 text-sm">{message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
