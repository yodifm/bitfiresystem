import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage, type Lang } from "./language";
import logo from "@/assets/Logo/logo.png";
import flagId from "flag-icons/flags/4x3/id.svg";
import flagGb from "flag-icons/flags/4x3/gb.svg";
import flagCn from "flag-icons/flags/4x3/cn.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const flagByCode: Record<string, string> = { id: flagId, gb: flagGb, cn: flagCn };

const langOptions: { value: Lang; label: string; flagCode: string }[] = [
  { value: "id", label: "Indonesia", flagCode: "id" },
  { value: "en", label: "English", flagCode: "gb" },
  { value: "zh", label: "中文", flagCode: "cn" },
];

function FlagIcon({ code, className = "" }: { code: string; className?: string }) {
  return (
    <img
      src={flagByCode[code]}
      alt=""
      className={`inline-block w-5 h-auto rounded-sm ${className}`}
    />
  );
}

function langFlagCode(lang: Lang) {
  return langOptions.find((o) => o.value === lang)?.flagCode ?? "id";
}

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
        <a href="#home" className="flex items-center group">
          <span className="inline-flex items-center bg-white rounded-md px-3 py-1.5 shadow-elegant">
            <img src={logo} alt="BitFire System International" className="h-8 md:h-10 w-auto" />
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
                <FlagIcon code={langFlagCode(lang)} />
                {langCode(lang)}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {langOptions.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => setLang(opt.value)}
                  className={`gap-2 ${lang === opt.value ? "font-bold text-brand" : ""}`}
                >
                  <FlagIcon code={opt.flagCode} />
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
                <FlagIcon code={langFlagCode(lang)} />
                {langCode(lang)}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {langOptions.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => setLang(opt.value)}
                  className={`gap-2 ${lang === opt.value ? "font-bold text-brand" : ""}`}
                >
                  <FlagIcon code={opt.flagCode} />
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
