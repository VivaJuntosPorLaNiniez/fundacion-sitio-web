'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CalendarDays, CheckCircle2, MapPin, Users, Menu } from 'lucide-react';
import { usePrograma } from '@/hooks/usePrograma';
import { useProgramas } from '@/hooks/useProgramas';

function formatFecha(fecha) {
	if (!fecha) return 'Sin fecha';

	try {
		const value = String(fecha).trim();
		const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

		if (!match) return value;

		const year = Number(match[1]);
		const month = Number(match[2]) - 1;
		const day = Number(match[3]);
		const date = new Date(year, month, day);

		if (Number.isNaN(date.getTime())) return value;

		return date.toLocaleDateString('es-ES', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		});
	} catch {
		return String(fecha);
	}
}

function extractLugares(programa) {
	const lugares = programa?.programaslugares ?? [];

	return lugares
		.map((item) => item?.lugares)
		.filter(Boolean)
		.map((lugar) => ({
			departamento: lugar.departamento,
			municipio: lugar.municipio,
			distrito: lugar.distrito,
			lugarEspecifico: lugar.lugaresp,
		}));
}

function extractTextList(items, keyPath) {
	return (items ?? [])
		.map((item) => {
			if (keyPath === 'objetivos') return item?.descripcion;
			if (keyPath === 'perfiles') return item?.perfiles?.tipo;
			if (keyPath === 'participantes') {
				const tipo = item?.tipoparticipante?.tipo;
				const cantidad = item?.cantidad;
				return [tipo, cantidad != null ? `${cantidad}` : null].filter(Boolean).join(' • ');
			}
			return null;
		})
		.filter(Boolean);
}

function extractParticipantes(items) {
	return (items ?? [])
		.map((item) => ({
			tipo: item?.tipoparticipante?.tipo,
			cantidad: item?.cantidad,
		}))
		.filter((item) => hasValue(item.tipo) || hasValue(item.cantidad));
}

function hasValue(value) {
	return value !== null && value !== undefined && String(value).trim() !== '';
}

function DetailCard({ title, children, icon: Icon }) {
	return (
		<section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
			<div className="mb-4 flex items-center gap-3">
				{Icon ? (
					<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2c439c]/10 text-[#2c439c]">
						<Icon size={20} />
					</span>
				) : null}
				<h2 className="text-xl font-bold text-slate-900">{title}</h2>
			</div>
			{children}
		</section>
	);
}

export default function ProyectoPage() {
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const { proyecto, error } = usePrograma(id);
	const { programas = [] } = useProgramas();

	const objetivos = extractTextList(proyecto?.objetivosespecificos, 'objetivos');
	const perfiles = extractTextList(proyecto?.programasperfiles, 'perfiles');
	const participantes = extractParticipantes(proyecto?.programasparticipantes);
	const lugares = extractLugares(proyecto);

	const terminado = Boolean(proyecto?.terminado);
	const fechaInicio = formatFecha(proyecto?.fechainicio);
	const fechaFin = formatFecha(proyecto?.fechafin);
	const hasDescripcion = hasValue(proyecto?.descripcion);
	const hasObjetivo = hasValue(proyecto?.objetivo);
	const hasObjetivos = objetivos.length > 0;
	const hasLugares = lugares.length > 0;
	const hasFechas = hasValue(proyecto?.fechainicio) || hasValue(proyecto?.fechafin);
	const hasParticipantes = participantes.length > 0;
	const hasPerfiles = perfiles.length > 0;

	return (
		<div className="bg-slate-50">
			<section className="relative overflow-hidden bg-[#1f2f73]">
				<div className="absolute inset-0 opacity-25">
					<img
						src={proyecto?.img_portada}
						alt={proyecto?.nombre ? `Portada de ${proyecto.nombre}` : 'Fondo de proyecto'}
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/85 via-[#1f2f73]/80 to-[#1f2f73]/40" />
				<div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
					<div className="mt-6 flex items-center justify-between">
						<Link
							href="/programas-y-proyectos"
							className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
						>
							<ArrowLeft size={16} />
							Volver a programas y proyectos
						</Link>
						<div className="dropdown dropdown-end">
							<div tabIndex={0} role="button" aria-label="Ver otros proyectos" className="rounded-full border border-white/20 bg-white/80 px-3 sm:px-4 py-2 h-9 text-sm font-medium text-black/90 backdrop-blur transition hover:bg-[#2c439c] hover:text-white flex items-center justify-center gap-2 min-w-11">
								<Menu className="inline-flex" size={18} />
								<span className="hidden sm:inline-flex">Ver otros proyectos</span>
							</div>
								<ul tabIndex="-1" className="dropdown-content menu rounded-box z-50 w-52 p-2 shadow-sm border-white/20 bg-white/80 text-black/90 backdrop-blur">
									{(programas ?? [])
										.filter((p) => !p.terminado && String(p.id) !== String(proyecto?.id))
										.map((p) => (
											<li key={p.id}>
												<Link href={`/programas-y-proyectos/proyecto?id=${p.id}`} className="block px-2 py-1 rounded hover:bg-[#2c439c] hover:text-white">
												{p.nombre}
												</Link>
											</li>
										))}
									{(programas ?? []).filter((p) => !p.terminado && String(p.id) !== String(proyecto?.id)).length === 0 ? (
										<li className="px-2 py-1 text-sm text-white/70">No hay proyectos activos</li>
									) : null}
								</ul>
						</div>
					</div>

					<div className="mt-8 max-w-3xl text-white">
						<p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
							Detalle del proyecto
						</p>
						<h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
							{proyecto?.nombre}
						</h1>
						<p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
							Proyecto de la fundación para el desarrollo territorial.
						</p>
					</div>
				</div>
			</section>

			<main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
				{!id ? (
					<div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 shadow-sm">
					</div>
				) : proyecto ? (
					<div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
						<div className="space-y-8">
							{hasDescripcion ? (
								<DetailCard title="Resumen" icon={CheckCircle2}>
									<p className="text-slate-700 text-justify leading-7">{proyecto.descripcion}</p>
								</DetailCard>
							) : null}

							{hasObjetivo ? (
								<DetailCard title="Objetivo general" icon={CheckCircle2}>
									<p className="text-slate-700 text-justify leading-7">{proyecto.objetivo}</p>
								</DetailCard>
							) : null}

							{hasObjetivos ? (
								<DetailCard title="Objetivos específicos" icon={CheckCircle2}>
									<ul className="space-y-3">
										{objetivos.map((item, index) => (
											<li key={`${item}-${index}`} className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
												<div className="mt-1">▶</div>
												<span className="leading-7 text-justify">{item}</span>
											</li>
										))}
									</ul>
								</DetailCard>
							) : null}

							{hasLugares ? (
								<DetailCard title="Cobertura territorial" icon={MapPin}>
									<div className="grid gap-4">
										{lugares.map((item, index) => (
											<div key={`${item.departamento ?? 'lugar'}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
												<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
													{hasValue(item.departamento) ? (
														<div>
															<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Departamento</p>
															<p className="mt-1 text-base font-medium text-slate-900">{item.departamento}</p>
														</div>
													) : null}
													{hasValue(item.municipio) ? (
														<div>
															<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Municipio</p>
															<p className="mt-1 text-base font-medium text-slate-900">{item.municipio}</p>
														</div>
													) : null}
													{hasValue(item.distrito) ? (
														<div>
															<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Distrito</p>
															<p className="mt-1 text-base font-medium text-slate-900">{item.distrito}</p>
														</div>
													) : null}
													{hasValue(item.lugarEspecifico) ? (
														<div>
															<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Lugar específico</p>
															<p className="mt-1 text-base font-medium text-slate-900">{item.lugarEspecifico}</p>
														</div>
													) : null}
												</div>
											</div>
										))}
									</div>
								</DetailCard>
							) : null}
						</div>

						<aside className="space-y-8 lg:sticky lg:top-24 self-start">
							<section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
								<div className="flex items-center justify-between gap-3">
									<span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${terminado ? 'bg-slate-100 text-slate-700' : 'bg-emerald-100 text-emerald-700'}`}>
										{terminado ? 'Finalizado' : 'Activo'}
									</span>
								</div>

								<div className="mt-6 space-y-4 text-sm text-slate-700">
									{hasFechas ? (
										<div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
											<CalendarDays size={18} className="mt-0.5 text-[#2c439c]" />
											<div>
												<p className="font-semibold text-slate-900">Fechas</p>
												{hasValue(proyecto?.fechainicio) ? <p className="mt-1 leading-6">Inicio: {fechaInicio}</p> : null}
												{hasValue(proyecto?.fechafin) ? <p className="leading-6">Fin: {fechaFin}</p> : null}
											</div>
										</div>
									) : null}

									{hasParticipantes || hasPerfiles ? (
										<div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
											<Users size={18} className="mt-0.5 text-[#2c439c]" />
											<div className="min-w-0">
												<p className="font-semibold text-slate-900">Población y perfiles</p>
												{hasParticipantes ? (
													<div className="mt-3 space-y-3">
														{participantes.map((item, index) => (
															<div key={`${item.tipo ?? 'participante'}-${index}`} className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
																<div className="flex flex-col gap-1 sm:flex-row sm:items-center">
																	<div className="text-sm font-medium text-slate-500 ">Tipo de población:</div>
																	<div className="text-sm font-semibold text-slate-900">{item.tipo ?? 'Sin tipo'}</div>
																</div>
																{hasValue(item.cantidad) ? (
																	<div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
																		<span>Cantidad:</span>
																		<span className="font-semibold text-slate-900">{item.cantidad} personas</span>
																	</div>
																) : null}
															</div>
														))}
													</div>
												) : null}
												{hasPerfiles ? (
													<div className="mt-4 flex flex-wrap gap-2">
														{perfiles.map((item, index) => (
															<span key={`${item}-${index}`} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 hover:bg-[#2c439c] hover:text-white">
																{item}
															</span>
														))}
													</div>
												) : null}
											</div>
										</div>
									) : null}
								</div>
							</section>

							{error ? (
								<div className="rounded-3xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
									{error}
								</div>
							) : null}
						</aside>
					</div>
				) : (
					<div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 shadow-sm">
						Cargando proyecto...
					</div>
				)}
			</main>
		</div>
	);
}
