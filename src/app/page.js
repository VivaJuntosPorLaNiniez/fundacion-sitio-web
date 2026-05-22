import Slider from "@/components/home/Slider";
import Link from "next/link";
import MapaSalvador from "@/components/home/MapaSalvador";
import CarouselProyectos from "@/components/home/CarouselProyectos";
import MarcoArriba from "@/components/ui/MarcoArriba";
import MarcoAbajo from "@/components/ui/MarcoAbajo";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <a href="https://www.flaticon.es/iconos-gratis/dia-de-los-ninos" title="día de los niños iconos" className="hidden">Día de los niños iconos creados por Iconfromus - Flaticon</a>
      {/* Slider automático con 4 imágenes */}
      <Slider />
      <MarcoArriba />
      <div className="px-4 sm:px-10 md:px-10 lg:px-20 ">
        <br></br>
        {/*inicio de sección de tarjetas*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4 mx-auto max-w-full">
          {/* ===== CARTA 1: Historia (INICIO) ===== */}
          <div className="card bg-white shadow-md overflow-hidden flex flex-col sm:flex-row items-center">
            <figure className="w-48 h-48 md:w-56 md:h-56 shrink-0 flex items-center justify-center px-5 py-8 bg-transparent">
              <img
                src="/home/histo.png"
                alt="historia"
                className="max-w-full max-h-full object-contain"
              />
            </figure>
            <div className="card-body p-4 md:p-5">
              <h2 className="card-title text-2xl">Nuestra Historia</h2>
              <p className="text-lg">
                Viva por la niñez El Salvador forma parte de una red internacional llamada Red Viva; dicha red fue 
fundada en 1996 por Patrick McDonald.
              </p>
              <div className="card-actions justify-end mt-8">
                <Link className="btn rounded-full border-0 bg-[#2c439c] pl-5 pr-6 text-white shadow-[0_10px_24px_rgba(44,67,156,0.22)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#243984] btn-lg"
                href="/quienes-somos/historia">
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  Leer más
                </Link>
              </div>
            </div>
          </div>
          {/* ===== CARTA 1: Historia (FIN) ===== */}

          {/* ===== CARTA 2: ¿Quiénes somos? (INICIO) ===== */}
          <div className="card bg-white shadow-md overflow-hidden flex flex-col sm:flex-row items-center">
            <figure className="w-48 h-48 md:w-56 md:h-56 shrink-0 flex items-center justify-center px-5 py-8 bg-transparent">
              <img
                src="/home/ninoos.png"
                alt="¿Quiénes somos?"
                className="max-w-full max-h-full object-contain"
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
                <Link className="btn rounded-full border-0 bg-[#2c439c] pl-5 pr-6 text-white shadow-[0_10px_24px_rgba(44,67,156,0.22)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#243984] btn-lg"
                href='/quienes-somos/sobre-nosotros'>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  Leer más
                </Link>
              </div>
            </div>
          </div>
          {/* ===== CARTA 2: ¿Quiénes somos? (FIN) ===== */}
        </div>
      </div>
      <br></br> {/*Fin de la sección de tarjetas quienes somos*/}

      {/*inicio de sección de cartas de contadores de impacto...." */}
      <div className="w-full mb-10 py-8 px-4 sm:px-10 md:px-10 lg:px-20">
        <div className="stats stats-vertical lg:stats-horizontal w-full shadow-md overflow-hidden rounded-none">
          <div className="stat min-h-55 w-full bg-[#f5ec3f] text-black">
            <div className="stat-figure text-black">
              <img src="/home/ninos.png" alt="Niñas y Niños" className="h-20 w-20 object-contain" />
            </div>
            <div className="stat-title text-xl font-semibold text-black">Niñas y Niños</div>
            <div className="stat-value text-5xl font-bold text-black">185</div>
            <div className="stat-desc text-base text-black">Total de beneficiados</div>
          </div>

          <div className="stat min-h-55 w-full bg-[#82c341] text-black">
            <div className="stat-figure text-black">
              <img src="/home/familia.png" alt="Madres y Padres" className="h-20 w-20 object-contain" />
            </div>
            <div className="stat-title text-xl font-semibold text-black">Madres y Padres</div>
            <div className="stat-value text-5xl font-bold text-black">91</div>
            <div className="stat-desc text-base text-black">Total de beneficiados</div>
          </div>

          <div className="stat min-h-55 w-full bg-[#e13d96] text-black">
            <div className="stat-figure text-black">
              <img src="/home/lideres.png" alt="Cuidadores y Lideres" className="h-20 w-20 object-contain" />
            </div>
            <div className="stat-title text-xl font-semibold text-black">Cuidadores y Lideres</div>
            <div className="stat-value text-5xl font-bold text-black">51</div>
            <div className="stat-desc text-base text-black">Total de beneficiados</div>
          </div>
        </div>
      </div>
      {/*Fin de la sección de cartas de contadores de impacto...." */}

      {/*Importar Carrusel para proyectos destacados */}
      <CarouselProyectos />
      
      {/*Importar cartas carrusel para proyectos destacados */}

      {/* Sección del Mapa de El Salvador */}
      <div className="px-4 sm:px-10 md:px-10 lg:px-20 mb-20 mt-20">
        <MapaSalvador/>
      </div>

      <MarcoAbajo />

      {/* Inicio de Sección de aliados */}
      <section className="mt-10 mb-1 w-full py-4 sm:py-6">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-6 text-center">
            <h1 className="tema card-title justify-center text-[#2c439c]">Nuestros Aliados</h1>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-10">
            <div className="flex items-center justify-center">
              <img src="/aliados/logo1.png" alt="Logo aliado 1" className="h-16 w-auto object-contain sm:h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/aliados/logo2.png" alt="Logo aliado 2" className="h-20 w-auto object-contain sm:h-35" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/aliados/logo3.png" alt="Logo aliado 3" className="h-20 w-auto object-contain sm:h-48" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/aliados/logo4.png" alt="Logo aliado 4" className="h-16 w-auto object-contain sm:h-20" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/aliados/logo5.png" alt="Logo aliado 5" className="h-16 w-auto object-contain sm:h-42" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/aliados/logo6.png" alt="Logo aliado 6" className="h-16 w-auto object-contain sm:h-37" />
            </div>
          </div>
        </div>
      </section>

      {/* Fin de Sección de aliados */}
    </main>
  );
}
