import Slider from "@/components/Slider";
import MapaSalvador from "@/components/MapaSalvador";
import CarouselProyectos from "@/components/CarouselProyectos";

export default function Home() {
  return (
    <main>
      <a href="https://www.flaticon.es/iconos-gratis/dia-de-los-ninos" title="día de los niños iconos" className="hidden">Día de los niños iconos creados por Iconfromus - Flaticon</a>
      {/* Slider automático con 4 imágenes */}
      <Slider />
      <div className="px-4 sm:px-10 md:px-10 lg:px-20 ">
        <br></br>
        {/*inicio de sección de tarjetas "¿Quiénes somos?" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4 mx-auto max-w-full">
          {/* ===== CARTA 1: ¿Quiénes somos? (INICIO) ===== */}
          <div className="card bg-white shadow-md overflow-hidden flex flex-row items-center">
            <figure className="w-48 h-48 md:w-56 md:h-56 shrink-0 flex items-center justify-center px-5 py-8 bg-gray-50">
              <img
                src="/quien.jpg"
                alt="¿Quiénes somos?"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
              />
            </figure>
            <div className="card-body p-4 md:p-5">
              <h2 className="card-title text-2xl">¿Quiénes somos?</h2>
              <p className="text-lg">
                Somos una ONG, orientada hacia un enfoque de derechos de la
                niñez, para contribuir al bienestar y desarrollo integral de
                niñas, niños, adolescentes y sus familias.
              </p>
              <div className="card-actions justify-end mt-8">
                <button className="btn btn-primary btn-lg">Leer más</button>
              </div>
            </div>
          </div>
          {/* ===== CARTA 1: ¿Quiénes somos? (FIN) ===== */}

          {/* ===== CARTA 2: ¿Quiénes somos? (INICIO) ===== */}
          <div className="card bg-white shadow-md overflow-hidden flex flex-row items-center">
            <figure className="w-48 h-48 md:w-56 md:h-56 shrink-0 flex items-center justify-center px-5 py-8 bg-gray-50">
              <img
                src="/quien.jpg"
                alt="¿Quiénes somos?"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
              />
            </figure>
            <div className="card-body p-4 md:p-8">
              <h2 className="card-title text-2xl">¿Quiénes somos?</h2>
              <p className="text-lg">
                Somos una ONG, orientada hacia un enfoque de derechos de la
                niñez, para contribuir al bienestar y desarrollo integral de
                niñas, niños, adolescentes y sus familias.
              </p>
              <div className="card-actions justify-end mt-8">
                <button className="btn btn-primary btn-lg">Leer más</button>
              </div>
            </div>
          </div>
          {/* ===== CARTA 2: ¿Quiénes somos? (FIN) ===== */}
        </div>
      </div>
      <br></br> {/*Fin de la sección de tarjetas quienes somos*/}

      {/*inicio de sección de cartas de contadores de impacto...." */}
      <h1 className="tema">Total de beneficiados</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-full">
        <div className="card bg-base-100 shadow-sm w-full">
          <figure className="px-4 pt-4">
            <img
              src="/ninos.png"
              alt="Contador de impacto 1"
              className="rounded-xl w-20 h-20 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ml-29" >Niñas y Niños</h2>
            <p className="carta-contador">185</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm w-full">
          <figure className="px-4 pt-4">
            <img
              src="/familia.png"
              alt="Contador de impacto 1"
              className="rounded-xl w-20 h-20 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ml-25">Madres y Padres</h2>
            <p  className="carta-contador">91</p>
            <div className="card-actions justify-end">
             </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm w-full">
          <figure className="px-4 pt-4">
            <img
              src="/lideres.png"
              alt="Contador de impacto 1"
              className="rounded-xl w-20 h-20 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ml-20">Cuidadores y Lideres</h2>
            <p className="carta-contador">
              51
            </p>
            <div className="card-actions justify-end">
           </div>
          </div>
        </div>
      </div>
      {/*Fin de la sección de cartas de contadores de impacto...." */}

      {/*Importar Carrusel para proyectos destacados */}
      <CarouselProyectos />
      {/*Importar cartas carrusel para proyectos destacados */}

      {/* Sección del Mapa de El Salvador */}
      <div className="px-4 sm:px-10 md:px-10 lg:px-20 my-10">
        <h1 className="tema">Cobertura en El Salvador</h1>
        <MapaSalvador />
      </div>

      {/* Inicio de Sección de aliados */}
      <div className="px-4 sm:px-5 md:px-5 lg:px-10 my-10">
        <h1 className="tema">Nuestros Aliados</h1>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img src="/logo1.png" alt="Logo aliado 1" className="h-16 w-auto object-contain" />
          <img src="/logo2.jpg" alt="Logo aliado 2" className="h-16 w-auto object-contain" />
          <img src="/logo3.png" alt="Logo aliado 3" className="h-16 w-auto object-contain" />
        </div>
      </div>

      {/* Fin de Sección de aliados */}

    </main>
  );
}
