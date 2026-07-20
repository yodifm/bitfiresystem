import { useEffect, useState } from "react";
import { Flame, Menu, X, Languages } from "lucide-react";
import { useLanguage, type Lang } from "./language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const langOptions: { value: Lang; label: string }[] = [
  { value: "id", label: "Indonesia" },
  { value: "en", label: "English" },
  { value: "zh", label: "中文" },
];

function langCode(lang: Lang) {
  return lang === "id" ? "ID" : lang === "en" ? "EN" : "中文";
}

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#tentang", label: t.nav.about },
    { href: "#layanan", label: t.nav.services },
    { href: "#produk", label: t.nav.products },
    { href: "#galeri", label: t.nav.gallery },
    { href: "#kontak", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur border-b border-white/10 shadow-lg" : "bg-transparent"
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Change language"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/25 text-white/85 hover:text-white hover:border-white/50 px-3 py-2 text-xs font-bold uppercase tracking-wider transition"
              >
                <Languages className="w-4 h-4" />
                {langCode(lang)}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {langOptions.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => setLang(opt.value)}
                  className={lang === opt.value ? "font-bold text-brand" : ""}
                >
                  {opt.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <a
            href="#kontak"
            className="inline-flex items-center rounded-md bg-brand hover:bg-brand-dark text-brand-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider transition"
          >
            {t.nav.getQuote}
          </a>
        </nav>

        <div className="lg:hidden flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Change language"
                className="inline-flex items-center gap-1 text-white/85 px-2 py-2 text-xs font-bold uppercase tracking-wider"
              >
                <Languages className="w-4 h-4" />
                {langCode(lang)}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {langOptions.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => setLang(opt.value)}
                  className={lang === opt.value ? "font-bold text-brand" : ""}
                >
                  {opt.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            className="text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
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
              {t.nav.getQuote}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
