import Link from 'next/link';

export default function ListaDeslizante({ programas = [] }) {
    const programasActivos = programas.filter((programa) => programa.terminado === false);

    return (
        <div className="overflow-y-auto py-4">
            <div className="flex flex-col gap-6 px-2">
                {programasActivos.length > 0 ? (
                    programasActivos.map((programa, index) => (
                        <div
                            key={programa.id ?? `${programa.nombre}-${index}`}
                            className="card card-side mx-0 bg-white shadow-xl border border-slate-100 overflow-hidden"
                        >
                            <figure className="w-80 shrink-0 bg-slate-100">
                                <img
                                    src={programa.img_portada}
                                    alt={programa.nombre ?? 'Imagen de proyecto'}
                                    className="h-full w-full object-cover"
                                />
                            </figure>

                            <div className="card-body p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                                            <span className="h-2 w-2 rounded-full bg-green-600 inline-block" aria-hidden="true"></span>
                                            Activo
                                        </span>
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        {formatearFecha(programa.fechainicio)} - {formatearFecha(programa.fechafin)}
                                    </div>
                                </div>
                                <h2 className="card-title text-slate-900 mt-1">{programa.nombre}</h2>
                                <p className="text-sm text-slate-600 leading-6 line-clamp-4">
                                    {programa.objetivo}
                                </p>

                                <div className="card-actions justify-end mt-3">
                                    <Link
                                        className="btn bg-[#2c439c] hover:bg-[#1a2f7a] text-white border-0 rounded-2xl"
                                        href={`/programas-y-proyectos/proyecto?id=${programa.id}`}
                                    >
                                        Ver más
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-500">
                        No hay programas para mostrar todavía.
                    </div>
                )}
            </div>
        </div>
    );
}

// Función para formatear fechas en formato "MMM YYYY"
function formatearFecha(fecha) {
    if (!fecha) {
        return 'Sin fecha';
    }
    try {
        const s = String(fecha).trim();

        // YYYY-MM-DD
        const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (!m) return s;

        const y = Number(m[1]);
        const mm = Number(m[2]) - 1; // Los meses en JavaScript van de 0 a 11
        const dd = Number(m[3]);
        const dateObj = new Date(y, mm, dd);
        if (Number.isNaN(dateObj.getTime())) return s;

        return dateObj.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
    } catch (e) {
        return String(fecha);
    }
}