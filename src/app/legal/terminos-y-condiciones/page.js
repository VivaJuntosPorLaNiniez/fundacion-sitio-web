import MarcoAbajo from "@/components/ui/MarcoAbajo";
import MarcoArriba from "@/components/ui/MarcoArriba";
import MiniPortada from "@/components/ui/MiniPortada";

export default function TerminosYCondicionesPage() {
	return (
		<>
		<MiniPortada
			imageSrc="/portadas/terms-and-conditions.jpg"
			imageAlt="Términos y condiciones"
			title="Términos y condiciones"
			description="Lea nuestros términos y condiciones para entender cómo utilizamos sus datos y qué derechos tiene como usuario."
		/>
		<MarcoArriba/>
		<section className="px-6 py-8">
			<div className="mx-auto w-full max-w-5xl">
				<div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm md:px-12">
					<h2 className="text-2xl font-bold text-slate-900">Términos y condiciones</h2>
					<p className="mt-4 text-sm text-slate-600">
						Lea detenidamente estos términos y condiciones antes de utilizar nuestro sitio web. Al acceder o utilizar nuestro sitio, usted acepta estar sujeto a estos términos. Si no está de acuerdo con alguna parte de los términos, no debe utilizar nuestro sitio.
					</p>
					<div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
						{/* Aquí se agregarán los términos y condiciones oficiales de la fundación. */}
					</div>
				</div>
			</div>
		</section>
		<MarcoAbajo/>
		</>
	);
}