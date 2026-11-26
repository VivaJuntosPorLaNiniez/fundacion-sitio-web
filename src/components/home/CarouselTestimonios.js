'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { testimonios } from '@/data/testimonios';

export default function CarouselTestimonios() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = testimonios
    .filter((testimonio) => !testimonio.terminado)
    .map((testimonio, index) => ({
      code: `Testimonio ${String(index + 1).padStart(2, '0')}`,
      title: testimonio.nombre,
      description: testimonio.descripcion || testimonio.objetivo,
      img: testimonio.img_portada,
      link: `/nuestro-impacto/testimonio?id=${testimonio.id}`,
      button: 'Ver testimonio',
    }));

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    if (slides.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (slides.length === 0) return;
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[activeIndex];

  return (
    <section className="carousel-section px-4 sm:px-6 lg:px-20 py-10 bg-[#2c439c]">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="carousel-kicker">Testimonios destacados</p>
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
          aria-label="Testimonio anterior"
          className="blog-slider__nav blog-slider__nav--left"
          disabled={slides.length <= 1}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente testimonio"
          className="blog-slider__nav blog-slider__nav--right"
          disabled={slides.length <= 1}
        >
          <ChevronRight size={20} />
        </button>

        {current ? (
          <div className="blog-slider__item">
            <div className="blog-slider__img">
              <img src={current.img} alt={current.title} />
            </div>

            <div className="blog-slider__content">
              <span className="blog-slider__code">{current.code}</span>
              <div className="blog-slider__title">{current.title}</div>
              <div className="blog-slider__text">{current.description}</div>
              <p className="mt-2 text-xs text-white/70">Contenido informativo de ejemplo</p>
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
        ) : (
          <div className="rounded-2xl border border-dashed border-white/40 bg-white/10 p-6 text-sm text-white/80">
            No hay proyectos activos para mostrar.
          </div>
        )}
      </div>
    </section>
  );
}
