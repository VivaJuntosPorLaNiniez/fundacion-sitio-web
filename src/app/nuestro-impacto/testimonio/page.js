'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Menu } from 'lucide-react';
import { testimonios } from '@/data/testimonios';

function DetailCard({ title, children }) {
	return (
		<section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
			<h2 className="mb-4 text-xl font-bold text-slate-900">{title}</h2>
			{children}
		</section>
	);
}

export default function TestimonioPage() {
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const testimonio = testimonios.find((testimonio) => testimonio.id === id);
	const otrostestimonios = testimonios.filter(
		(testimonio) => !testimonio.terminado && testimonio.id !== testimonio?.id,
	);

	return (
		<div className="bg-slate-50">
			<section className="relative overflow-hidden bg-[#1f2f73]">
				{testimonio ? (
					<Image
						src={testimonio.img_portada}
						alt=""
						aria-hidden="true"
						fill
						sizes="100vw"
						className="absolute inset-0 h-full w-full object-cover opacity-25"
					/>
				) : null}
				<div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/85 via-[#1f2f73]/80 to-[#1f2f73]/40" />
				<div className="relative mx-auto max-w-6xl px-6 py-16 text-white sm:py-20 lg:px-8">
					<div className="flex items-center justify-between gap-4">
						<Link
							href="/nuestro-impacto"
							className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
						>
							<ArrowLeft size={16} />
							Volver a testimonios
						</Link>
						{otrostestimonios.length > 0 ? (
							<div className="dropdown dropdown-end">
								<div
									tabIndex={0}
									role="button"
									aria-label="Ver otros testimonios"
									className="flex h-9 min-w-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/80 px-3 text-sm font-medium text-black/90 backdrop-blur transition hover:bg-[#2c439c] hover:text-white sm:px-4"
								>
									<Menu size={18} />
									<span className="hidden sm:inline-flex">Ver otros testimonios</span>
								</div>
								<ul
									tabIndex="-1"
									className="dropdown-content menu z-50 w-56 rounded-box border-white/20 bg-white/95 p-2 text-slate-900 shadow-sm backdrop-blur"
								>
									{otrostestimonios.map((testimonio) => (
										<li key={testimonio.id}>
											<Link href={`/testimonios/testimonio?id=${testimonio.id}`}>
												{testimonio.nombre}
											</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>

					<div className="mt-8 max-w-3xl">
						<p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
							Detalle del testimonio
						</p>
						<h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
							{testimonio?.nombre ?? 'Testimonio no encontrado'}
						</h1>
						{testimonio ? (
							<p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
								{testimonio.descripcion}
							</p>
						) : null}
					</div>
				</div>
			</section>

			<main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
				{testimonio ? (
					<div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
						<div className="space-y-8">
							<DetailCard title="Objetivo general">
								<p className="leading-7 text-slate-700">{testimonio.objetivo}</p>
							</DetailCard>
							<DetailCard title="Objetivos específicos">
								<ul className="space-y-3">
									{testimonio.objetivosespecificos.map(({ descripcion }) => (
										<li
											key={descripcion}
											className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-slate-700"
										>
											<CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2c439c]" />
											<span className="leading-7">{descripcion}</span>
										</li>
									))}
								</ul>
							</DetailCard>
						</div>
						<aside className="self-start rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950 shadow-sm">
							<h2 className="font-bold">Información de ejemplo</h2>
							<p className="mt-2 text-sm leading-6">
								Este contenido es ilustrativo y debe validarse con la fundación antes de publicarse como información oficial.
							</p>
						</aside>
					</div>
				) : (
					<div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 shadow-sm">
						<p>
							{id
								? 'No encontramos ese testimonio.'
								: 'Selecciona un programa para consultar su información.'}
						</p>
						<Link
							href="/testimonios-y-testimonios"
							className="btn mt-5 rounded-2xl border-0 bg-[#2c439c] text-white hover:bg-[#1a2f7a]"
						>
							Ver testimonios
						</Link>
					</div>
				)}
			</main>
		</div>
	);
}
