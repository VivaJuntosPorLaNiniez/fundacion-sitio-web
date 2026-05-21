'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const slides = [
  {
    code: 'Proyecto 01',
    title: 'dsffssdf',
    description:
      'Programas orientados a fortalecer comunidad, acompañamiento y oportunidades reales para las familias.',
    img: '/proyecto1.jpg',
    link: '/programas-y-proyectos/',
    button: 'Ver proyecto',
  },
  {
    code: 'Proyecto 02',
    title: 'gjhgjhgjhgj',
    description:
      'Acciones para impulsar capacidades productivas, empleo y crecimiento local sostenible.',
    img: '/proyecto2.jpg',
    link: '/programas-y-proyectos/',
    button: 'Ver proyecto',
  },
  {
    code: 'Proyecto 03',
    title: 'hgjhgjhgjhghj',
    description:
      'Iniciativas complementarias que amplían el impacto de la fundación en distintos frentes.',
    img: '/proyecto3.jpg',
    link: '/programas-y-proyectos/',
    button: 'Ver proyecto',
  },
];

export default function CarouselProyectos() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

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

  const current = slides[activeIndex];

  return (
    <section className="carousel-section px-4 sm:px-6 lg:px-20 py-10 bg-[#2c439c]">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="carousel-kicker">Proyectos destacados</p>
          <h2 className="carousel-title">Conoce algunas de nuestras iniciativas</h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="blog-slider">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Proyecto anterior"
          className="blog-slider__nav blog-slider__nav--left"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente proyecto"
          className="blog-slider__nav blog-slider__nav--right"
        >
          <ChevronRight size={20} />
        </button>

        <div className="blog-slider__item swiper-slide-active">
          <div className="blog-slider__img">
            <img src={current.img} alt={current.title} />
          </div>

          <div className="blog-slider__content">
            <span className="blog-slider__code">{current.code}</span>
            <div className="blog-slider__title">{current.title}</div>
            <div className="blog-slider__text">{current.description}</div>
            <button
              type="button"
              onClick={() => router.push(current.link)}
              className="blog-slider__button"
            >
              {current.button}
            </button>

            <div className="blog-slider__pagination" aria-label="Paginación del carrusel">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.link}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir a ${slide.title}`}
                  aria-pressed={index === activeIndex}
                  className={`blog-slider__bullet ${index === activeIndex ? 'is-active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
