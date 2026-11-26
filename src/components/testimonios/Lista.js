import Link from 'next/link';

export default function ListaDeslizante({ testimonios = [] }) {
    const testimoniosActivos = testimonios.filter((testimonio) => testimonio.terminado === false);

    return (
        <div className="overflow-y-auto py-4">
            <div className="flex flex-col gap-6 px-2">
                {testimoniosActivos.length > 0 ? (
                    testimoniosActivos.map((testimonio, index) => (
                        <div
                            key={testimonio.id ?? `${testimonio.nombre}-${index}`}
                            className="card mx-0 bg-white shadow-xl border border-slate-100 overflow-hidden md:card-side"
                        >
                            <figure className="w-full h-48 md:w-80 md:h-auto shrink-0 bg-slate-100">
                                <img
                                    src={testimonio.img_portada}
                                    alt={testimonio.nombre ?? 'Imagen de proyecto'}
                                    className="h-full w-full object-cover"
                                />
                            </figure>

                            <div className="card-body p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
                                            Información de ejemplo
                                        </span>
                                    </div>
                                </div>
                                <h2 className="card-title text-slate-900 mt-1">{testimonio.nombre}</h2>
                                <p className="text-sm text-slate-600 leading-6 line-clamp-4">
                                    {testimonio.objetivo}
                                </p>

                                <div className="card-actions justify-end mt-3">
                                    <Link
                                        className="btn bg-[#2c439c] hover:bg-[#1a2f7a] text-white border-0 rounded-2xl"
                                        href={`/nuestro-impacto/testimonio?id=${testimonio.id}`}
                                    >
                                        Ver más
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-500">
                        No hay testimonios para mostrar todavía.
                    </div>
                )}
            </div>
        </div>
    );
}