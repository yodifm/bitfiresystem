import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "id" | "en" | "zh";

export type UiText = {
  nav: {
    home: string;
    about: string;
    services: string;
    products: string;
    gallery: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    contactUs: string;
    viewProducts: string;
    scroll: string;
    slides: { eyebrow: string; title: string; highlight: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    experience: string;
    experienceLabel: string;
    visiTitle: string;
    visiDesc: string;
    misiTitle: string;
    misiItems: string[];
  };
  services: { eyebrow: string; title: string; desc: string };
  products: {
    eyebrow: string;
    title: string;
    desc: string;
    kategori: string;
    allBrands: string;
    emptyItems: string;
    detail: string;
    orderNow: string;
  };
  gallery: { eyebrow: string; title: string; desc: string };
  catalog: { eyebrow: string; title: string; desc: string; download: string };
  certification: {
    eyebrow: string;
    title: string;
    desc: string;
    legalTitle: string;
    viewDocument: string;
  };
  whyUs: { eyebrow: string; title: string };
  contact: {
    eyebrow: string;
    title: string;
    desc: string;
    headOffice: string;
    telFax: string;
    mobile: string;
    email: string;
    website: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitted: string;
      thankYou: string;
    };
  };
  footer: { tagline: string; rights: string };
};

const uiText: Record<Lang, UiText> = {
  id: {
    nav: {
      home: "Home",
      about: "Tentang Kami",
      services: "Layanan",
      products: "Produk",
      gallery: "Galeri",
      contact: "Kontak",
      getQuote: "GET QUOTE",
    },
    hero: {
      contactUs: "Hubungi Kami",
      viewProducts: "Lihat Produk",
      scroll: "Scroll",
      slides: [
        {
          eyebrow: "Total Fire Safety Provider",
          title: "Ensuring Fire Safety,",
          highlight: "Save Life. Save Property.",
          desc: "Solusi fire protection terintegrasi — dari engineering, produk bersertifikat, hingga training personel di seluruh Indonesia.",
        },
        {
          eyebrow: "Oil & Gas · Power Plant · High-Risk Building",
          title: "Dipercaya Melindungi",
          highlight: "Industri Kritikal Indonesia",
          desc: "Dipercaya melindungi fasilitas migas, pembangkit listrik, hotel, rumah sakit, dan bangunan tinggi berisiko tinggi.",
        },
        {
          eyebrow: "Produk Berkualitas",
          title: "Peralatan Keselamatan Kebakaran &",
          highlight: "Supplier Mekanikal Elektrikal",
          desc: "Produk lengkap bersertifikat standar nasional dan internasional untuk keandalan proteksi kebakaran.",
        },
        {
          eyebrow: "Engineering · Instalasi · Maintenance",
          title: "Layanan Fire Protection",
          highlight: "Dari Desain hingga After-Sales",
          desc: "Tim engineer berpengalaman siap mendampingi proyek Anda dari perencanaan hingga pemeliharaan berkala.",
        },
      ],
    },
    about: {
      eyebrow: "Tentang Kami",
      title: "Total Fire Safety Provider Terpercaya",
      paragraphs: [
        "Kami adalah BitFire System International, Total Fire Safety Provider yang menghadirkan solusi proteksi kebakaran terintegrasi paling lengkap dan fleksibel di pasar saat ini.",
        "Dengan kekayaan sumber daya dan keahlian kami, kami mengandalkan pengalaman di bidang engineering, product testing, pengembangan personel, dan training untuk memberikan cakupan layanan yang menyeluruh bagi klien serta memenuhi kebutuhan keamanan yang terus berkembang.",
        "Kami berkomitmen melayani bangsa dengan menyelamatkan jiwa dan harta benda, serta menjadi pemimpin pasar di Indonesia dengan memenangkan kepercayaan pelanggan, memperluas basis klien, dan menjaga hubungan bisnis jangka panjang melalui peningkatan layanan dan kepuasan pelanggan secara berkelanjutan.",
      ],
      experience: "10+ Tahun",
      experienceLabel: "Pengalaman Industri",
      visiTitle: "Visi",
      visiDesc: "To be a Leading Fire Fighting Industries in Indonesia.",
      misiTitle: "Misi",
      misiItems: [
        "Menyediakan produk berkualitas dengan harga bersaing.",
        "Inovasi produk & layanan berkelanjutan.",
        "Membangun performa tinggi & kepuasan pelanggan.",
      ],
    },
    services: {
      eyebrow: "Scope of Services",
      title: "Industri yang Kami Lindungi",
      desc: "Solusi fire protection kami disesuaikan untuk beragam sektor bisnis di seluruh Indonesia.",
    },
    products: {
      eyebrow: "Produk Kami",
      title: "Fire Safety Equipment Lengkap",
      desc: "Rangkaian produk fire protection bersertifikat untuk kebutuhan proyek Anda. Klik salah satu produk untuk melihat fotonya.",
      kategori: "Kategori",
      allBrands: "Semua Merk",
      emptyItems: "Belum ada produk di kategori ini untuk merk yang dipilih.",
      detail: "Lihat Detail",
      orderNow: "Pesan Sekarang",
    },
    catalog: {
      eyebrow: "Katalog Produk",
      title: "Unduh Katalog Kami",
      desc: "Lihat rangkaian lengkap produk fire safety kami dalam format PDF yang mudah dibagikan.",
      download: "Unduh Katalog",
    },
    gallery: {
      eyebrow: "Galeri",
      title: "Dokumentasi Proyek Kami",
      desc: "Cuplikan hasil instalasi, produk, dan aktivitas tim di lapangan. Klik foto untuk memperbesar.",
    },
    certification: {
      eyebrow: "Sertifikasi & Legalitas",
      title: "Dokumen Legalitas",
      desc: "Perusahaan resmi berbadan hukum dan produk-produk bersertifikat standar terpercaya.",
      legalTitle: "Unduh Dokumen Resmi",
      viewDocument: "Lihat Dokumen",
    },
    whyUs: {
      eyebrow: "Kenapa Memilih Kami",
      title: "Partner Fire Safety yang Bisa Diandalkan",
    },
    contact: {
      eyebrow: "Hubungi Kami",
      title: "Diskusikan Kebutuhan Fire Safety Anda",
      desc: "Tim kami siap memberikan konsultasi, penawaran, dan dukungan teknis untuk setiap proyek.",
      headOffice: "Head Office",
      telFax: "Telp / Fax",
      mobile: "Mobile / WhatsApp",
      email: "Email",
      website: "Website",
      form: {
        name: "Nama Lengkap",
        email: "Email",
        phone: "Nomor Telepon",
        company: "Perusahaan",
        message: "Pesan",
        messagePlaceholder: "Ceritakan kebutuhan proyek Anda...",
        submit: "Kirim via WhatsApp",
        submitted: "Membuka WhatsApp...",
        thankYou: "Silakan lanjutkan kirim pesan Anda di WhatsApp yang baru terbuka.",
      },
    },
    footer: {
      tagline: '"Ensuring Fire Safety, Save Life Save Property"',
      rights: "All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      products: "Products",
      gallery: "Gallery",
      contact: "Contact",
      getQuote: "GET QUOTE",
    },
    hero: {
      contactUs: "Contact Us",
      viewProducts: "View Products",
      scroll: "Scroll",
      slides: [
        {
          eyebrow: "Total Fire Safety Provider",
          title: "Ensuring Fire Safety,",
          highlight: "Save Life. Save Property.",
          desc: "Integrated fire protection solutions — from engineering and certified products to personnel training across Indonesia.",
        },
        {
          eyebrow: "Oil & Gas · Power Plant · High-Risk Building",
          title: "Trusted Fire Protection for",
          highlight: "Indonesia's Critical Industries",
          desc: "Trusted to protect oil & gas facilities, power plants, hotels, hospitals, and high-risk tall buildings.",
        },
        {
          eyebrow: "Premium Quality Equipment",
          title: "Fire Safety Equipment and",
          highlight: "Mechanical Electrical Supplier",
          desc: "A complete range of nationally and internationally certified products for reliable fire protection.",
        },
        {
          eyebrow: "Engineering · Installation · Maintenance",
          title: "Full-Service Fire Protection",
          highlight: "From Design to After-Sales",
          desc: "Our experienced engineering team supports your project from planning through periodic maintenance.",
        },
      ],
    },
    about: {
      eyebrow: "About Us",
      title: "A Trusted Total Fire Safety Provider",
      paragraphs: [
        "We are BitFire System International, a Total Fire Safety Provider delivering some of the most comprehensive and flexible integrated fire safety solutions in the market today.",
        "With our wealth of resources and expertise, we draw on our experience in engineering, product testing, personnel development, and training to provide seamless coverage for our clients and meet today's ever-changing security demands.",
        "We are committed to serving the nation by saving life and property, and to emerge as a market leader in Indonesia by winning our customers' confidence, expanding our client base, and maintaining long-lasting business relationships through continual improvement of our service and customer satisfaction.",
      ],
      experience: "10+ Years",
      experienceLabel: "Industry Experience",
      visiTitle: "Vision",
      visiDesc: "To be a Leading Fire Fighting Industries in Indonesia.",
      misiTitle: "Mission",
      misiItems: [
        "Provide quality products at competitive prices.",
        "Continuous product & service innovation.",
        "Build high performance & customer satisfaction.",
      ],
    },
    services: {
      eyebrow: "Scope of Services",
      title: "Industries We Protect",
      desc: "Our fire protection solutions are tailored for a wide range of business sectors across Indonesia.",
    },
    products: {
      eyebrow: "Our Products",
      title: "Complete Fire Safety Equipment",
      desc: "A range of certified fire protection products for your project needs. Click a product to view its photo.",
      kategori: "Category",
      allBrands: "All Brands",
      emptyItems: "No products yet in this category for the selected brand.",
      detail: "View Detail",
      orderNow: "Order Now",
    },
    catalog: {
      eyebrow: "Product Catalog",
      title: "Download Our Catalog",
      desc: "Browse our complete range of fire safety products in an easy-to-share PDF format.",
      download: "Download Catalog",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Our Project Documentation",
      desc: "A look at our installation results, products, and on-site team activities. Click a photo to enlarge.",
    },
    certification: {
      eyebrow: "Certification & Legality",
      title: "Legal Documents",
      desc: "An officially licensed company with products certified to trusted standards.",
      legalTitle: "Download Official Documents",
      viewDocument: "View Document",
    },
    whyUs: {
      eyebrow: "Why Choose Us",
      title: "A Fire Safety Partner You Can Rely On",
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Discuss Your Fire Safety Needs",
      desc: "Our team is ready to provide consultation, quotations, and technical support for every project.",
      headOffice: "Head Office",
      telFax: "Phone / Fax",
      mobile: "Mobile / WhatsApp",
      email: "Email",
      website: "Website",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        company: "Company",
        message: "Message",
        messagePlaceholder: "Tell us about your project needs...",
        submit: "Send via WhatsApp",
        submitted: "Opening WhatsApp...",
        thankYou: "Please continue sending your message in the WhatsApp tab that just opened.",
      },
    },
    footer: {
      tagline: '"Ensuring Fire Safety, Save Life Save Property"',
      rights: "All rights reserved.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      services: "服务",
      products: "产品",
      gallery: "相册",
      contact: "联系我们",
      getQuote: "获取报价",
    },
    hero: {
      contactUs: "联系我们",
      viewProducts: "查看产品",
      scroll: "向下滚动",
      slides: [
        {
          eyebrow: "全面消防安全服务商",
          title: "保障消防安全，",
          highlight: "拯救生命，保护财产。",
          desc: "一站式消防解决方案——从工程设计、认证产品到覆盖全印尼的人员培训。",
        },
        {
          eyebrow: "石油天然气 · 发电厂 · 高风险建筑",
          title: "值得信赖的消防保护，",
          highlight: "守护印尼关键产业",
          desc: "值得信赖地保护石油天然气设施、发电厂、酒店、医院及高风险高层建筑。",
        },
        {
          eyebrow: "优质产品",
          title: "消防安全设备与",
          highlight: "机电设备供应商",
          desc: "提供符合国家及国际标准认证的完整产品系列，确保消防安全可靠。",
        },
        {
          eyebrow: "工程 · 安装 · 维护",
          title: "全方位消防保护服务",
          highlight: "从设计到售后",
          desc: "经验丰富的工程团队从规划到定期维护，全程为您的项目保驾护航。",
        },
      ],
    },
    about: {
      eyebrow: "关于我们",
      title: "值得信赖的全面消防安全服务商",
      paragraphs: [
        "我们是BitFire System International，作为全方位消防安全服务商，为当今市场提供最全面、最灵活的整合消防安全解决方案。",
        "凭借丰富的资源与专业能力，我们运用在工程设计、产品测试、人员培养与培训方面的经验，为客户提供无缝的服务保障，满足不断变化的安全需求。",
        "我们致力于通过保护生命与财产来服务国家，并通过赢得客户信任、拓展客户群体，以及持续改进服务与客户满意度来维持长久的业务关系，从而成为印尼市场的领导者。",
      ],
      experience: "10+ 年",
      experienceLabel: "行业经验",
      visiTitle: "愿景",
      visiDesc: "成为印尼领先的消防行业企业。",
      misiTitle: "使命",
      misiItems: [
        "以具竞争力的价格提供优质产品。",
        "持续进行产品与服务创新。",
        "打造高绩效并提升客户满意度。",
      ],
    },
    services: {
      eyebrow: "服务范围",
      title: "我们守护的行业",
      desc: "我们的消防保护解决方案适用于印尼各行各业的需求。",
    },
    products: {
      eyebrow: "我们的产品",
      title: "完整的消防安全设备",
      desc: "一系列经过认证的消防产品，满足您的项目需求。点击产品即可查看照片。",
      kategori: "类别",
      allBrands: "所有品牌",
      emptyItems: "该类别暂无符合所选品牌的产品。",
      detail: "查看详情",
      orderNow: "立即订购",
    },
    catalog: {
      eyebrow: "产品目录",
      title: "下载我们的产品目录",
      desc: "以便于分享的 PDF 格式浏览我们完整的消防安全产品系列。",
      download: "下载目录",
    },
    gallery: {
      eyebrow: "相册",
      title: "项目实景记录",
      desc: "展示我们的安装成果、产品及现场团队工作情况。点击照片可放大查看。",
    },
    certification: {
      eyebrow: "认证与合法性",
      title: "法律文件",
      desc: "正规注册公司，产品均通过可信标准认证。",
      legalTitle: "下载官方文件",
      viewDocument: "查看文件",
    },
    whyUs: {
      eyebrow: "为何选择我们",
      title: "值得信赖的消防安全合作伙伴",
    },
    contact: {
      eyebrow: "联系我们",
      title: "探讨您的消防安全需求",
      desc: "我们的团队随时为您提供咨询、报价及每个项目的技术支持。",
      headOffice: "总部地址",
      telFax: "电话 / 传真",
      mobile: "手机 / WhatsApp",
      email: "电子邮件",
      website: "网站",
      form: {
        name: "姓名",
        email: "电子邮件",
        phone: "电话号码",
        company: "公司名称",
        message: "留言",
        messagePlaceholder: "请告诉我们您的项目需求...",
        submit: "通过 WhatsApp 发送",
        submitted: "正在打开 WhatsApp...",
        thankYou: "请在新打开的 WhatsApp 页面中继续发送您的留言。",
      },
    },
    footer: {
      tagline: '"确保消防安全，拯救生命，保护财产"',
      rights: "版权所有。",
    },
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: UiText;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");
  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: uiText[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
