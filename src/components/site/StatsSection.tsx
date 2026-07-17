import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { stats } from "./data";

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTs = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - startTs) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* diagonal top accent */}
      <div className="absolute inset-x-0 -top-px h-16 bg-background [clip-path:polygon(0_0,100%_0,100%_0,0_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand/20 blur-3xl" />

      <div className="container-page relative py-20 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="group relative p-6 md:p-8 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-brand/60 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand" />
                <div className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-none">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* diagonal bottom accent to next section */}
      <div className="absolute inset-x-0 -bottom-px h-16 bg-background [clip-path:polygon(0_100%,100%_100%,100%_0,0_100%)]" />
    </section>
  );
}
