'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Proyecto Comunidad Viva',
    description:
      'Programa1 ',
    img: '/proyecto1.jpg',
    link: '/programas-y-proyectos/desarrollo-social',
  },
  {
    title: 'Proyecto Comunidad Viva',
    description:
      'Programa2',
    img: '/proyecto2.jpg',
    link: '/programas-y-proyectos/desarrollo-economico',
  },
  {
    title: 'Proyecto Comunidad Viva',
    description:
      'Programa3',
    img: '/proyecto3.jpg',
    link: '/programas-y-proyectos/otros-proyectos',
  },
];

export default function CarouselProyectos() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-4 sm:px-10 md:px-10 lg:px-20 my-10">
      <h1 className="tema">Proyectos destacados</h1>
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-300 bg-white/90 p-3 text-gray-700 shadow-lg transition hover:bg-white"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-300 bg-white/90 p-3 text-gray-700 shadow-lg transition hover:bg-white"
        >
          ›
        </button>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src={current.img}
              alt={current.title}
              className="w-full h-80 md:h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10">
           
            <h3 className="text-3xl font-bold mb-4">{current.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{current.description}</p>
            <button
              type="button"
              onClick={() => router.push(current.link)}
              className="mb-6 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Leer más
            </button>
            <div className="mt-6 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
