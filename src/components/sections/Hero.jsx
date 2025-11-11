// src/components/sections/Hero.jsx
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [i, setI] = useState(0);
  const pause = useRef(false);

  const SLIDES = [
    { image: "/images/hero/slide1.jpg", title: "Equipos especializados para", subtitle: "laboratorios metalúrgicos", cta: "Ver productos", link: "#products" },
    { image: "/images/hero/slide2.jpg", title: "Soluciones innovadoras", subtitle: "para la minería moderna", cta: "Conocer más", link: "#services" },
    { image: "/images/hero/slide3.jpg", title: "La sostenibilidad es nuestra", subtitle: "prioridad estratégica", cta: "Leer más", link: "#about" },
    { image: "/images/hero/slide4.jpg", title: "Tecnología de punta", subtitle: "al servicio de tu proyecto", cta: "Contactar", link: "#contact" },
    { image: "/images/hero/slide5.jpg", title: "Experiencia y calidad", subtitle: "garantizadas", cta: "Descubrir", link: "#brands" },
  ];

  // autoplay con pausa al pasar el mouse
  useEffect(() => {
    if (pause.current) return;
    const id = setTimeout(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearTimeout(id);
  }, [i]);

  // precarga de imágenes
  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  const go = (idx) => setI((idx + SLIDES.length) % SLIDES.length);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      onMouseEnter={() => (pause.current = true)}
      onMouseLeave={() => (pause.current = false)}
      aria-label="Presentación principal"
    >
      <div className="relative mx-auto w-full">
        <div className="relative h-[70vh] md:h-[80vh] lg:h-[85vh]">
          {SLIDES.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === i ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={idx !== i}
            >
              {/* Fondo con overlays para legibilidad */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 md:px-8">
                {/* Título (no tocamos tamaño) */}
                <h1 className="font-extrabold leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-5xl mb-16 md:mb-24">
                  {s.title}
                  <br />
                  <span className="block mt-1 md:mt-2">{s.subtitle}</span>
                </h1>

                {/* CTA MÁS ABAJO y MÁS GRANDE */}
                {/* Ajusta SOLO separación vertical del botón aquí: mt-16/md:mt-20 */}
                <a
                  href={s.link}
                  className="mt-16 md:mt-20 inline-flex items-center justify-center gap-3
                             /* Ancho/alto del botón: incrementa px/py para hacerlo más grande */
                             px-16 md:px-20 lg:px-24 py-5 md:py-6
                             rounded-full uppercase font-extrabold text-base md:text-lg tracking-widest
                             bg-gradient-to-r from-[#c40000] to-[#e61e1e]
                             text-white
                             shadow-[0_20px_60px_rgba(196,0,0,0.35)]
                             transition-all duration-300
                             hover:shadow-[0_28px_80px_rgba(196,0,0,0.45)]
                             hover:scale-105 hover:-translate-y-0.5
                             relative overflow-hidden group
                             border border-white/10"
                  aria-label={`${s.cta} - ${s.subtitle}`}
                >
                  <span className="relative z-10">{s.cta}</span>
                  {/* Flecha un poco más grande */}
                  <svg
                    className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>

                  {/* Brillo sutil al hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r
                               from-transparent via-white/20 to-transparent
                               -translate-x-full group-hover:translate-x-full
                               transition-transform duration-900 ease-in-out"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bullets (píldora activa) */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === i
                ? "w-10 h-2.5 bg-red-600 shadow-lg shadow-red-600/50"
                : "w-2.5 h-2.5 bg-white/70 hover:bg-white hover:w-6"
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
            aria-current={idx === i ? "true" : "false"}
          />
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={() => go(i - 1)}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20
                   bg-white/20 hover:bg-white/30 backdrop-blur-md
                   text-white p-3 md:p-4 rounded-full
                   transition-all duration-300 hover:scale-110
                   border border-white/20 shadow-lg"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => go(i + 1)}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20
                   bg-white/20 hover:bg-white/30 backdrop-blur-md
                   text-white p-3 md:p-4 rounded-full
                   transition-all duration-300 hover:scale-110
                   border border-white/20 shadow-lg"
        aria-label="Slide siguiente"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
