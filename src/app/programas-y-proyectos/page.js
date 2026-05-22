'use client';

import { useProgramas } from '../../hooks/useProgramas';
import MarcoArriba from '@/components/ui/MarcoArriba';
import MarcoAbajo from '@/components/ui/MarcoAbajo';
import EstrategiasOpciones from '@/components/programas/EstrategiasOpciones';
import Lista from '@/components/programas/Lista';
import MiniPortada from '@/components/ui/MiniPortada';

export default function ProgramasPage() {
	const { programas } = useProgramas();

	return (
		<>
		<MiniPortada
			imageSrc="/portadas/ninas.jpg"
			imageAlt="Dos niñas sonriendo"
			title="Programas y Proyectos"
			description="Contribuimos al desarrollo territorial a través de programas y proyectos que promueven derechos, participación y sostenibilidad."
		/>
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