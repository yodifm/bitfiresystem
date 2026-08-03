import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck, Phone } from "lucide-react";
import { useLanguage } from "./language";
import banner1 from "@/assets/Image/banner/banner 3.jpg";
import banner2 from "@/assets/Image/banner/banner 1.jpg";
import banner3 from "@/assets/Image/banner/banner 4.jpg";
import banner4 from "@/assets/Image/banner/banner 2.jpg";

const slideImages = [banner1, banner2, banner3, banner4];

export function HeroCarousel() {
  const { t } = useLanguage();
  const slides = t.hero.slides.map((s, idx) => ({ ...s, image: slideImages[idx] }));
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setI((v) => (v + 1) % slides.length), []);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms] ease-out"
            style={{
              backgroundImage: `url(${s.image})`,
              transform: idx === i ? "scale(1.08)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/40" />
        </div>
      ))}

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />

      {/* Diagonal red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/10 -skew-x-12 translate-x-24 hidden lg:block" />

      {/* Technical corner marks */}
      <div className="absolute top-24 right-8 hidden lg:block text-white/50 text-[10px] font-mono tracking-widest z-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-px bg-brand" /> BFS · 01
        </div>
        <div className="mt-1 pl-5">N 06°14' · E 106°58'</div>
      </div>
      <div className="absolute bottom-32 right-8 hidden lg:block z-10">
        <div className="border-l-2 border-brand pl-4">
          <div className="font-display font-black text-white text-4xl leading-none">10+</div>
          <div className="text-[10px] uppercase tracking-widest text-white/60 mt-1">
            Years of Trust
          </div>
        </div>
      </div>

      <div className="relative z-10 container-page flex flex-col justify-center min-h-screen pt-24 pb-24">
        <div className="max-w-3xl">
          <div
            key={`eb-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 mb-6 animate-[fade-up_0.6s_ease-out]"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-brand">
              {slides[i].eyebrow}
            </span>
          </div>

          <h1
            key={`t-${i}`}
            className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] uppercase animate-[fade-up_0.7s_ease-out]"
          >
            {slides[i].title}
            <br />
            <span className="text-brand">{slides[i].highlight}</span>
          </h1>

          <p
            key={`d-${i}`}
            className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed animate-[fade-up_0.8s_ease-out]"
          >
            {slides[i].desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-md bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3.5 font-bold uppercase tracking-wider text-sm shadow-elegant transition"
            >
              <Phone className="w-4 h-4" /> {t.hero.contactUs}
            </a>
            <a
              href="#produk"
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 font-bold uppercase tracking-wider text-sm transition"
            >
              <ShieldCheck className="w-4 h-4" /> {t.hero.viewProducts}
            </a>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-10 left-0 right-0 container-page flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-brand" : "w-6 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid place-items-center w-11 h-11 rounded-full border border-white/30 text-white hover:bg-white hover:text-navy transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="grid place-items-center w-11 h-11 rounded-full border border-white/30 text-white hover:bg-white hover:text-navy transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
