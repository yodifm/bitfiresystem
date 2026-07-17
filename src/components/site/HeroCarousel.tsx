import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck, Phone } from "lucide-react";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  desc: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Total Fire Safety Provider",
    title: "Ensuring Fire Safety,",
    highlight: "Save Life. Save Property.",
    desc: "Solusi fire protection terintegrasi — dari engineering, produk bersertifikat, hingga training personel di seluruh Indonesia.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Oil & Gas · Power Plant · High-Risk Building",
    title: "Trusted Fire Protection for",
    highlight: "Indonesia's Critical Industries",
    desc: "Dipercaya melindungi fasilitas migas, pembangkit listrik, hotel, rumah sakit, dan bangunan tinggi berisiko tinggi.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Certified Equipment · SNI · UL · FM",
    title: "Fire Hydrant, Fire Alarm &",
    highlight: "Fire Fighting Equipment",
    desc: "Produk lengkap bersertifikat standar nasional dan internasional untuk keandalan proteksi kebakaran.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Engineering · Installation · Maintenance",
    title: "Full-Service Fire Protection",
    highlight: "From Design to After-Sales",
    desc: "Tim engineer berpengalaman siap mendampingi proyek Anda dari perencanaan hingga pemeliharaan berkala.",
  },
];

export function HeroCarousel() {
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
      className="relative min-h-[92vh] w-full overflow-hidden bg-navy"
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

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/10 -skew-x-12 translate-x-24 hidden lg:block" />

      <div className="relative z-10 container-page flex flex-col justify-center min-h-[92vh] pt-24 pb-24">
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
              <Phone className="w-4 h-4" /> Hubungi Kami
            </a>
            <a
              href="#produk"
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 font-bold uppercase tracking-wider text-sm transition"
            >
              <ShieldCheck className="w-4 h-4" /> Lihat Produk
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
