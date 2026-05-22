import MarcoAbajo from "@/components/ui/MarcoAbajo";
import MarcoArriba from "@/components/ui/MarcoArriba";
import MiniPortada from "@/components/ui/MiniPortada";

export default function PoliticaDePrivacidadPage() {
	return (
		<>
		<MiniPortada
			imageSrc="/portadas/security.jpg"
			imageAlt="Política de Privacidad"
			title="Política de Privacidad"
			description="Lea nuestra política de privacidad para entender cómo recopilamos, usamos y protegemos su información personal."
		/>
		<MarcoArriba/>
		<section className="px-6 py-8">
			<div className="mx-auto w-full max-w-5xl">
				<div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm md:px-12">
					<h2 className="text-2xl font-bold text-slate-900">Política de Privacidad</h2>
					<p className="mt-4 text-sm text-slate-600">
						Lea detenidamente esta política de privacidad antes de utilizar nuestro sitio web. Al acceder o utilizar nuestro sitio, usted acepta estar sujeto a esta política. Si no está de acuerdo con alguna parte de la política, no debe utilizar nuestro sitio.
					</p>
					<div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
						{/* Aquí se agregará la política de privacidad oficiales de la fundación. */}
					</div>
				</div>
			</div>
		</section>
		<MarcoAbajo/>
		</>
	);
}