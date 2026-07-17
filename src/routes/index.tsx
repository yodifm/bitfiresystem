import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Eye,
  CheckCircle2,
  Award,
  ShieldCheck,
  BadgeCheck,
  Flame,
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { StatsSection } from "@/components/site/StatsSection";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Reveal } from "@/components/site/Reveal";
import { services, productTabs, values } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  }),
  component: LandingPage,
});

function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-14`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-4 ${
          invert
            ? "border-brand/40 bg-brand/10 text-brand"
            : "border-brand/30 bg-brand/5 text-brand"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
        <span className="text-xs font-bold uppercase tracking-[0.2em]">{eyebrow}</span>
      </div>
      <h2
        className={`font-display font-black uppercase text-3xl md:text-5xl leading-tight ${
          invert ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            invert ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-background">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-brand hidden md:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-navy hidden md:block" />
            <img
              src="https://images.unsplash.com/photo-1523419409543-8c1a1e5a4b7c?auto=format&fit=crop&w=1000&q=80"
              alt="Fire safety team"
              className="relative w-full h-[440px] object-cover rounded-md shadow-elegant"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-navy/95 backdrop-blur text-white p-5 rounded-md shadow-card">
              <div className="flex items-center gap-3">
                <Flame className="w-10 h-10 text-brand" />
                <div>
                  <p className="font-display font-black text-2xl">10+ Tahun</p>
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Pengalaman Industri
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionTitle
            eyebrow="Tentang Kami"
            title="Total Fire Safety Provider Terpercaya"
            desc="PT. BitFire System International adalah penyedia solusi fire safety terintegrasi. Kami berpengalaman di bidang engineering, product testing, personnel development, dan training untuk memastikan setiap sistem proteksi kebakaran bekerja optimal."
          />
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-lg border border-border bg-card shadow-card">
              <div className="shrink-0 grid place-items-center w-12 h-12 rounded-md bg-brand/10 text-brand">
                <Eye className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-lg text-navy uppercase">Visi</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  To be a Leading Fire Fighting Industries in Indonesia.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-lg border border-border bg-card shadow-card">
              <div className="shrink-0 grid place-items-center w-12 h-12 rounded-md bg-brand/10 text-brand">
                <Target className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-lg text-navy uppercase">Misi</h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Menyediakan produk berkualitas dengan harga bersaing.",
                    "Inovasi produk & layanan berkelanjutan.",
                    "Membangun performa tinggi & kepuasan pelanggan.",
                  ].map((m) => (
                    <li key={m} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="layanan" className="relative py-20 md:py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="container-page relative">
        <Reveal>
          <SectionTitle
            invert
            center
            eyebrow="Scope of Services"
            title="Industri yang Kami Lindungi"
            desc="Solusi fire protection kami disesuaikan untuk beragam sektor bisnis di seluruh Indonesia."
          />
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 60}>
              <div className="group relative h-full p-6 rounded-lg bg-white/5 border border-white/10 hover:border-brand hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-brand group-hover:w-full transition-all duration-500" />
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-brand/0 group-hover:bg-brand/10 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="grid place-items-center w-14 h-14 rounded-md bg-brand text-brand-foreground mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg uppercase leading-tight">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const [active, setActive] = useState(productTabs[0].key);
  const current = productTabs.find((t) => t.key === active)!;

  return (
    <section id="produk" className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            center
            eyebrow="Produk Kami"
            title="Fire Safety Equipment Lengkap"
            desc="Rangkaian produk fire protection bersertifikat untuk kebutuhan proyek Anda."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {productTabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-4 md:px-6 py-2.5 rounded-md font-bold uppercase text-xs md:text-sm tracking-wider transition ${
                  active === t.key
                    ? "bg-brand text-brand-foreground shadow-elegant"
                    : "bg-secondary text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="lg:sticky lg:top-24 rounded-lg overflow-hidden shadow-elegant relative group h-72 lg:h-[520px]">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">
                  Kategori
                </p>
                <h3 className="font-display font-black text-white text-3xl md:text-4xl uppercase leading-tight">
                  {current.label}
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {current.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.name} delay={i * 50}>
                  <div className="h-full p-5 rounded-lg border border-border bg-card hover:border-brand hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand/5 rounded-bl-full group-hover:bg-brand/10 transition" />
                    <div className="relative flex items-start gap-4">
                      <div className="shrink-0 grid place-items-center w-12 h-12 rounded-md bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-navy uppercase text-base leading-tight group-hover:text-brand transition">
                          {item.name}
                        </h4>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationSection() {
  const badges = [
    { icon: BadgeCheck, label: "PT Berbadan Hukum" },
    { icon: Award, label: "Terdaftar NIB & NPWP" },
    { icon: ShieldCheck, label: "SNI 180-1:2022" },
    { icon: Award, label: "UL Listed" },
    { icon: ShieldCheck, label: "FM Approved" },
    { icon: BadgeCheck, label: "ISO Standard" },
  ];
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            center
            eyebrow="Sertifikasi & Legalitas"
            title="Standar Nasional & Internasional"
            desc="Perusahaan resmi berbadan hukum dan produk-produk bersertifikat standar terpercaya."
          />
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b, i) => (
            <Reveal key={b.label} delay={i * 60}>
              <div className="h-full flex flex-col items-center justify-center gap-3 p-5 rounded-lg bg-white border border-border hover:border-brand hover:-translate-y-1 transition shadow-card">
                <div className="grid place-items-center w-14 h-14 rounded-full bg-brand/10 text-brand">
                  <b.icon className="w-7 h-7" />
                </div>
                <p className="text-xs md:text-sm font-bold text-navy text-center uppercase tracking-wide">
                  {b.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            center
            eyebrow="Kenapa Memilih Kami"
            title="Partner Fire Safety yang Bisa Diandalkan"
          />
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="group h-full p-6 rounded-lg bg-navy text-white hover:bg-brand transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5 group-hover:bg-white/10 transition" />
                <div className="relative">
                  <div className="font-display font-black text-5xl text-brand group-hover:text-white/30 transition mb-4">
                    0{i + 1}
                  </div>
                  <h4 className="font-display font-bold text-xl uppercase leading-tight">
                    {v.title}
                  </h4>
                  <p className="mt-3 text-sm text-white/75 group-hover:text-white/90 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontak" className="relative py-20 md:py-28 bg-navy text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/10 rounded-full blur-[120px]" />

      <div className="container-page relative">
        <Reveal>
          <SectionTitle
            invert
            eyebrow="Hubungi Kami"
            title="Diskusikan Kebutuhan Fire Safety Anda"
            desc="Tim kami siap memberikan konsultasi, penawaran, dan dukungan teknis untuk setiap proyek."
          />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-4">
            <ContactItem
              icon={MapPin}
              title="Head Office"
              lines={[
                "Ruko Rose Garden I No. 8/51,",
                "Grand Galaxy City, Jakasetia,",
                "Bekasi Selatan, Jawa Barat 17148, Indonesia",
              ]}
            />
            <ContactItem
              icon={Phone}
              title="Telp / Fax"
              lines={["+62 21 5692 7856", "+62 21 8275 3349"]}
              href="tel:+622156927856"
            />
            <ContactItem
              icon={Phone}
              title="Mobile / WhatsApp"
              lines={["+62 813 8014 0997"]}
              href="https://wa.me/6281380140997"
            />
            <ContactItem
              icon={Mail}
              title="Email"
              lines={["bitfireindo@yahoo.co.id"]}
              href="mailto:bitfireindo@yahoo.co.id"
            />
            <ContactItem
              icon={Globe}
              title="Website"
              lines={["www.bitfiresystem.com"]}
              href="https://www.bitfiresystem.com"
            />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="p-6 md:p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Nama Lengkap" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Field label="Nomor Telepon" name="phone" />
                <Field label="Perusahaan" name="company" />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3.5 font-bold uppercase tracking-wider text-sm shadow-elegant transition"
              >
                {sent ? "Terkirim!" : "Kirim Pesan"} <Send className="w-4 h-4" />
              </button>
              {sent && (
                <p className="mt-3 text-sm text-green-400">
                  Terima kasih! Tim kami akan menghubungi Anda segera.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  const wrapperProps: Record<string, string> = href ? { href } : {};
  return (
    <Wrapper
      {...wrapperProps}
      className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-brand hover:bg-white/10 transition group"
    >
      <div className="shrink-0 grid place-items-center w-11 h-11 rounded-md bg-brand text-brand-foreground group-hover:scale-110 transition">
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-white/60">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-white mt-0.5 break-words">
            {l}
          </p>
        ))}
      </div>
    </Wrapper>
  );
}

function Footer() {
  return (
    <footer className="bg-[#08101f] text-white/70 py-10 border-t border-white/10">
      <div className="container-page grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-md bg-brand text-brand-foreground">
            <Flame className="w-5 h-5" />
          </span>
          <div>
            <p className="font-display font-black text-white text-lg leading-none">
              BitFire<span className="text-brand">Systems</span>
            </p>
            <p className="text-xs text-white/50 mt-0.5">PT. BitFire System International</p>
          </div>
        </div>
        <p className="text-sm md:text-center font-semibold text-white/80 italic">
          "Ensuring Fire Safety, Save Life Save Property"
        </p>
        <p className="text-xs md:text-right">
          © {new Date().getFullYear()} PT. BitFire System International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProductsSection />
        <CertificationSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollHint />
    </div>
  );
}

function ScrollHint() {
  return (
    <a
      href="#tentang"
      aria-label="Scroll down"
      className="hidden md:flex fixed bottom-6 left-6 z-30 items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180"
    >
      <ArrowRight className="w-4 h-4" /> Scroll
    </a>
  );
}
