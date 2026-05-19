import MarcoArriba from '@/components/ui/MarcoArriba';
import MarcoAbajo from '@/components/ui/MarcoAbajo';

export default function DesarrolloEconomicoPage() {
	return (
		<>
		<MarcoArriba />
		<div className="min-h-screen flex flex-col">
			<section className="px-6 py-12">
				<h1 className="text-3xl font-bold">Programas de Desarrollo Economico</h1>
				<p className="mt-4">El objetivo de estos programas es promover el
					desarrollo económico y social de los habitantes de los municipios
					donde tiene intervención directa, a través de gestionar proyectos
					encaminados a impulsar las familias, la pequeña y micro empresa,
					así también formar a los emprendedores y emprendedoras y sus ideas 
					de negocio, entrega de donaciones de capital semilla y generar 
					mecanismos de comercialización de sus productos.</p>
			</section>
		</div>
		<MarcoAbajo />
		</>
	);
}
