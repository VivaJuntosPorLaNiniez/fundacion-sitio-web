export default function TransparenciaPage() {
	return (
		<section className="px-4 sm:px-6 py-8 sm:py-12">

        <div className="hero relative w-full min-h-[420px] sm:min-h-[520px] md:min-h-[620px] overflow-hidden"

style={{

backgroundImage:

"url(/recursos/banerninos.jpg)",

backgroundSize: "cover",

backgroundPosition: "center", 

}}
>

 <div className="hero-overlay"></div>
 <div className="hero-content text-neutral-content text-center">
 <div className="w-full max-w-5xl mx-auto px-4">
	<h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Transparencia</h1>
	<p className="mb-10 text-base sm:text-lg md:text-xl lg:text-2xl">Cada donación cambia una vida.</p>
 <div className="indicator">
 {/*<span className="indicator-item status status-success"></span>*/} {/* Indicador de estado puntito verde */}

 <br/>
 <br/>

 
 </div>
 {/*<button className="btn btn-primary">Donar </button>*/} {/* Botón de donación */}
 </div>
 </div>
 </div>

 <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center gap-4 -mt-20 sm:-mt-24 text-center text-sm sm:text-base md:text-lg font-bold px-4">
 <div className="bg-[#fcffcc] grid h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 place-items-center rounded-full shadow-xl">Niñas <br/> 96 </div>
 <div className="bg-[#d5ffbb] grid h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 place-items-center rounded-full shadow-xl">Niños <br/> 89 </div>
 <div className="bg-[#badaff] grid h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 place-items-center rounded-full shadow-xl">Madres <br/> 80 </div>
 <div className="bg-[#ffb0da] grid h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 place-items-center rounded-full shadow-xl">Padres <br/> 11 </div>
 <div className="bg-[#ffb0fe] grid h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 place-items-center rounded-full shadow-xl">Cuidadores <br/> 6 </div>
 <div className="bg-[#ffd7b0] grid h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 place-items-center rounded-full shadow-xl">Lideres locales <br/> 45 </div>
 </div>

<div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center px-4 text-center">
	<div className="bg-[#2c439c] w-full  px-6 py-6 rounded-lg">
<p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">Modelos actuales de intervención</p>
    </div>
 <div className="mt-6 w-full max-w-7xl mx-auto leading-relaxed px-4 text-center">
    <div className="flex justify-center w-full">
      <span className="text-rotate inline-block mx-auto text-center w-full sm:w-auto max-w-full text-xs sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl leading-loose">
        <span className="inline-grid justify-items-center w-full">
          <span className="whitespace-nowrap">​​​🧑‍⚖️​​ DERECHOS DE LOS NNA</span>
          <span className="whitespace-nowrap">👩‍🦽​ INCLUSIÓN DE LA NIÑEZ CON DISCAPACIDAD</span>
          <span className="whitespace-nowrap">🙋​ PROMOCIÓN DE LA PARTICIPACIÓN</span>
          <span className="whitespace-nowrap">🛡️​ SALVAGUARDIA</span>
          <span className="whitespace-nowrap">🧑‍🧒 ENFOQUE DE GÉNERO</span>
        </span>
      </span>
    </div>
 </div>
</div>

<br/>

<div className="bg-[#2c439c] w-full mx-auto px-6 py-6 rounded-lg flex items-center justify-center text-center">
<p className="text-2xl sm:text-3xl font-semibold text-white">Modelo de salvaguardia y protección</p>
    </div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-4 max-w-screen-xl mx-auto">
	
  <div className="card w-full card-md shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Ingreso</h2>
      <p>​✔️​ Proceso de admisión: Entrevista, solvencia de la policía y antecedentes penales. 
        <br/>
		<br/>
         ​✔️​ Curso básico de salvaguardia. 
         <br/>
		 <br/>
         ​✔️​ apacitación inicial de salvaguardia.</p>
    </div>
  </div>

  <div className="card w-full card-md shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Seguimiento</h2>
      <p> ​✔️​ Capacitación constante sobre salvaguardia.
         <br/>
		 <br/>
         ​✔️​ Reuniones de seguimiento.
		 <br/>
		 <br/>
         ​✔️​ Ejercicios de identificación de riegos de salvaguardia. 
         <br/>
		 <br/>
         ​✔️​ Definido mecanismo de atención a los eventos de salvaguardia.</p>
    </div>
  </div>

  <div className="card w-full card-md shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Visitas, socios y proveedores</h2>
      <p> ​✔️​ Socialización y firma de política de protección.
         <br/>
		 <br/>
		 ​✔️​ Visitas: acompañamiento de personal de la fundación.
		 <br/>
		 <br/>
          ​✔️​ Fotografías bajo consentimiento de los participantes.
         <br/>
		 <br/>
          ​✔️​ Proveedores: evitar el contacto directo con los NNA.</p>
    </div>
  </div>
</div>

	</section>
	);
}
