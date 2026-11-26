import Slider from "@/components/home/Slider";
import Link from "next/link";
import MapaSalvador from "@/components/home/MapaSalvador";
import CarouselProyectos from "@/components/home/CarouselTestimonios";
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
        {/*seccion de nuestra historia*/}
        <p>aki la historia</p>
      <br></br>
      {/*Fin de la sección de tarjetas quienes somos*/}
      </div>

      {/*Importar Carrusel para proyectos destacados */}
      <CarouselProyectos />

      <MarcoAbajo />
    </main>
  );
}
