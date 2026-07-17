import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#layanan", label: "Layanan" },
  { href: "#produk", label: "Produk" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-md bg-brand text-brand-foreground shadow-elegant">
            <Flame className="w-6 h-6" strokeWidth={2.4} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-black text-lg md:text-xl text-white tracking-wide">
              BitFire<span className="text-brand">Systems</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              International
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/85 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="inline-flex items-center rounded-md bg-brand hover:bg-brand-dark text-brand-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider transition"
          >
            Get Quote
          </a>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/90 font-semibold border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-md bg-brand text-brand-foreground px-4 py-3 font-bold uppercase tracking-wider"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
