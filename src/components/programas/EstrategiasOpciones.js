'use client';

import { useState } from 'react';
import { PersonStanding, MessageCircleCheck, Handshake, HandCoins } from 'lucide-react';

const opciones = [
  {
    title: 'Fortalecimiento institucional, innovación y sostenibilidad',
    subtitle: 'Fortalecer la capacidad institucional de Fundación VIVA, a través del talento humano, capacitado y calificado, bajo un enfoque de sostenibilidad, transparencia optimizando el uso de los recursos humanos, económicos, materiales.',
    icon: PersonStanding,
  },
  {
    title: 'Gestión Comunicacional',
    subtitle: 'Implementar un programa comunicacional enfocado a difundir y divulgar las acciones y acontecimientos de Fundación VIVA, que realizan en los diferentes territorios donde tienen presencia, a través de las diferentes plataformas digitales y escritas.',
    icon: MessageCircleCheck,
    
  },
  {
    title: 'Desarrollo Social',
    subtitle: 'Implementar un programa con dirección de desarrollo social, y elaboración de proyectos enfocados en contribuir en la promoción e incidencia de los derechos humanos, pobreza, salud, educación de calidad, cultura, deporte, arte, principios y valores.',
    icon: Handshake,
    
  },
  {
    title: 'Desarrollo Económico',
    subtitle: 'Promover el desarrollo económico y social de los habitantes de los municipios donde tiene intervención directa, a través de gestionar proyectos encaminados impulsar las familias, la pequeña y micro empresa, y entrega de donaciones de capital.',
    icon: HandCoins,
    
  },
];

const colores = ['#e13d96', '#ee2e2b', '#FFCE54', '#82c341'];

export default function EstrategiasOpciones() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex justify-center">

      <div className="flex flex-col gap-3 overflow-hidden rounded-4xl bg-[#f2f1ec] p-2 shadow-[0_24px_80px_rgba(19,24,58,0.16)] max-w-6xl w-full mx-auto">
        {opciones.map((opcion, index) => {
          const activo = index === activeIndex;
          const Icon = opcion.icon;
          const isFirst = index === 0;
          const subtitleClosedMaxW = isFirst ? 'max-w-[18rem]' : 'max-w-[14rem]';

          return (
            <button
              key={opcion.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={activo}
              className={`group relative overflow-hidden text-left outline-none transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] focus-visible:ring-2 focus-visible:ring-[#2c439c]/60 focus-visible:ring-offset-2 w-full ${
                activo
                  ? 'py-15 rounded-2xl'
                  : 'py-5 rounded-xl'
              }`}
              style={{ background: colores[index % colores.length] }}
            >
              <span className="absolute inset-0 bg-black/15" />
              <span
                className={`absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
                  activo ? 'opacity-100' : 'opacity-90'
                }`}
              />
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)]" />

              <div className="relative z-10 flex h-full items-center justify-center p-2 sm:p-3 text-center">
                <div
                  className={`flex w-full min-w-0 flex-col items-center justify-center gap-2 text-white transition-all duration-500 ${
                    activo ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80 lg:translate-y-0 lg:opacity-60'
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#2c439c] shadow-lg shadow-black/20">
                    <Icon size={16} strokeWidth={1.4} />
                  </span>

                  <span className="min-w-0 w-full">
                    <span
                      aria-hidden={!activo}
                      className={`${activo ? 'block text-base lg:text-lg opacity-100 translate-y-0 max-h-32 mx-6' : 'block text-sm lg:text-base wrap-break-word opacity-0 -translate-y-2 max-h-0 overflow-hidden'} font-bold leading-tight text-center transition-all duration-300`}
                    >
                      {opcion.title}
                    </span>
                      <span
                        aria-hidden={!activo}
                        className={`mt-1 block text-justify transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] text-white/95 mx-6 ${activo ? 'text-xs lg:text-sm max-w-lg leading-relaxed opacity-100 max-h-40 mb-10' : `text-sm ${subtitleClosedMaxW} max-h-0 opacity-0 overflow-hidden leading-snug wrap-break-word whitespace-normal pointer-events-none`}`}
                      >
                        {opcion.subtitle}
                      </span>
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}