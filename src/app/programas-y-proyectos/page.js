'use client';

import { useProgramas } from '../../hooks/useProgramas';
import MarcoArriba from '@/components/ui/MarcoArriba';
import MarcoAbajo from '@/components/ui/MarcoAbajo';
import EstrategiasOpciones from '@/components/programas/EstrategiasOpciones';
import Lista from '@/components/programas/Lista';

export default function ProgramasPage() {
	const { programas } = useProgramas();

	return (
		<>
		{/* Hero */}
		<div className="relative w-full h-50 md:h-70 overflow-hidden rounded-b-lg">
			<img src="/portadas/ninas.jpg" alt="Dos niñas sonriendo" className="absolute inset-0 w-full h-full object-cover object-top" />
			<div className="absolute inset-0 bg-linear-to-r from-[#111827]/60 via-transparent to-[#111827]/20"></div>
			<div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6 md:px-12">
				<div className="text-white">
					<h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Programas y Proyectos</h1>
					<p className="mt-3 max-w-2xl text-sm md:text-base text-white/90">Contribuimos al desarrollo territorial a través de programas y proyectos que promueven derechos, participación y sostenibilidad.</p>
				</div>
			</div>
		</div>
		<MarcoArriba/>
		<section className="max-w-6xl mx-auto px-6 md:px-0 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div className="lg:col-span-1 space-y-6">
				<div className="bg-white rounded-xl shadow p-6">
					<h2 className="text-2xl font-bold text-[#2c439c]">Nuestro Enfoque</h2>
					<p className="mt-3 text-sm text-justify text-gray-700">Implementamos programas que buscan el bienestar integral de niñas, niños, adolescentes y sus familias mediante acciones participativas y sostenibles en el territorio.</p>
					<p className="text-sm text-gray-500 mt-3">Toca un cuadro para leer más</p>
					<div className="mt-2">
						<EstrategiasOpciones />
					</div>
				</div>
			</div>

			<div id="programas" className="lg:col-span-2">
				<div className="bg-white rounded-xl shadow p-6">
					<div className="flex items-center justify-between">
						<h2 className="text-xl md:text-2xl font-bold text-[#2c439c]">Nuestros Programas</h2>
					</div>
					<div className="mt-4">
						<Lista programas={programas} />
					</div>
				</div>
			</div>
		</section>
		<MarcoAbajo/>
		</>
	);
}