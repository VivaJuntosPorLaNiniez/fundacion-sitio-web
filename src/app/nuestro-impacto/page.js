import MarcoArriba from '@/components/ui/MarcoArriba';
import MarcoAbajo from '@/components/ui/MarcoAbajo';
import Lista from '@/components/testimonios/Lista';
import MiniPortada from '@/components/ui/MiniPortada';
import MapaSalvador from '@/components/home/MapaSalvador';
import { testimonios } from '@/data/testimonios';

export default function NuestroImpactoPage() {
	return (
		<>
		<MiniPortada
			imageSrc="/portadas/ninas.jpg"
			imageAlt="Dos niñas sonriendo"
			title="Nuestro Impacto"
			description="Contribuimos al desarrollo territorial a través de programas y proyectos que promueven derechos, participación y sostenibilidad."
		/>
		<MarcoArriba/>
		<section className="max-w-6xl mx-auto px-6 md:px-0 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

			<div id="testimonios" className="lg:col-span-2">
				<div className="bg-white rounded-xl shadow p-6">
					<div className="flex items-center justify-between">
						<h2 className="text-xl md:text-2xl font-bold text-[#2c439c]">Nuestros Testimonios</h2>
					</div>
					<p className="mt-2 text-sm text-slate-500">
						Contenido informativo de ejemplo, pendiente de validación institucional.
					</p>
					<div className="mt-4">
						<Lista testimonios={testimonios} />
					</div>
				</div>
			</div>
		</section>

		{/* Sección del Mapa de El Salvador */}
      <div className="px-4 sm:px-10 md:px-10 lg:px-20 mb-20 mt-20">
        <MapaSalvador/>
      </div>
		<MarcoAbajo/>
		</>
	);
}