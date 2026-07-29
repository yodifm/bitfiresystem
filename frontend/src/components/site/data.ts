import {
  Factory,
  Zap,
  Building2,
  Warehouse,
  Trees,
  Landmark,
  Ship,
  Truck,
  Droplets,
  Waves,
  GitBranch,
  Wrench,
  Gauge,
  Bell,
  Siren,
  Radio,
  AlertTriangle,
  Cylinder,
  FlameKindling,
  Wind,
  ShieldAlert,
  Cog,
  CircleDot,
  PanelTop,
  type LucideIcon,
} from "lucide-react";

export type Localized = { id: string; en: string; zh: string };

export const services: { icon: LucideIcon; title: string; desc: Localized }[] = [
  {
    icon: Factory,
    title: "Oil & Gas & Mining",
    desc: {
      id: "Proteksi fasilitas migas, kilang, dan pertambangan berisiko tinggi.",
      en: "Protection for high-risk oil & gas facilities, refineries, and mining sites.",
      zh: "保护高风险的石油天然气设施、炼油厂及矿区。",
    },
  },
  {
    icon: Zap,
    title: "Power Plant",
    desc: {
      id: "Fire protection untuk pembangkit listrik dan energi.",
      en: "Fire protection for power plants and energy facilities.",
      zh: "为发电厂及能源设施提供消防保护。",
    },
  },
  {
    icon: Building2,
    title: "High Risk Building",
    desc: {
      id: "Hotel, apartemen, rumah sakit, supermarket, sekolah.",
      en: "Hotels, apartments, hospitals, supermarkets, schools.",
      zh: "酒店、公寓、医院、超市、学校。",
    },
  },
  {
    icon: Warehouse,
    title: "Industrial & Warehouse",
    desc: {
      id: "Manufaktur, pabrik, gudang, dan area logistik.",
      en: "Manufacturing plants, factories, warehouses, and logistics areas.",
      zh: "制造工厂、厂房、仓库及物流区域。",
    },
  },
  {
    icon: Trees,
    title: "Forestry",
    desc: {
      id: "Perlindungan kebakaran area hutan dan perkebunan.",
      en: "Fire protection for forestry and plantation areas.",
      zh: "森林及种植园区域的消防保护。",
    },
  },
  {
    icon: Landmark,
    title: "Municipal",
    desc: {
      id: "Dukungan proteksi kebakaran untuk instansi kota & pemerintah.",
      en: "Fire protection support for municipal and government institutions.",
      zh: "为市政及政府机构提供消防保护支持。",
    },
  },
  {
    icon: Ship,
    title: "Marine",
    desc: {
      id: "Fire safety equipment untuk kapal dan sektor kelautan.",
      en: "Fire safety equipment for ships and the maritime sector.",
      zh: "为船舶及海事领域提供消防安全设备。",
    },
  },
  {
    icon: Truck,
    title: "Vehicles & Heavy Equipment",
    desc: {
      id: "Proteksi kendaraan operasional dan alat berat.",
      en: "Protection for operational vehicles and heavy equipment.",
      zh: "保护作业车辆及重型设备。",
    },
  },
];

export type ProductItem = { name: string; desc: Localized; icon: LucideIcon; image: string };
export type ProductTab = {
  key: string;
  label: string;
  image: string;
  items: ProductItem[];
};

export const productTabs: ProductTab[] = [
  {
    key: "hydrant",
    label: "Fire Hydrant Equipment",
    image:
      "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Hydrant Box Type A1, A2, B, C",
        desc: {
          id: "Indoor & outdoor hydrant box sesuai standar SNI.",
          en: "Indoor & outdoor hydrant box compliant with SNI standard.",
          zh: "符合SNI标准的室内外消防栓箱。",
        },
        icon: PanelTop,
        image:
          "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Hose Rack, Hydrant Valve, Hose Nozzle",
        desc: {
          id: "Kelengkapan hydrant box premium.",
          en: "Premium hydrant box accessories.",
          zh: "高级消防栓箱配件。",
        },
        icon: Droplets,
        image:
          "https://images.unsplash.com/photo-1620912189866-3bea63274633?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Siamese Connection",
        desc: {
          id: "Two-way & three-way siamese untuk sambungan pemadam.",
          en: "Two-way & three-way siamese connection for firefighting supply.",
          zh: "用于消防供水的双出口及三出口接口。",
        },
        icon: GitBranch,
        image:
          "https://images.unsplash.com/photo-1581093458791-9d2b9c9c9c5f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Fire Hose Coupling",
        desc: {
          id: "Machino & Storz coupling brass/aluminum.",
          en: "Machino & Storz coupling in brass/aluminum.",
          zh: "黄铜/铝制 Machino 及 Storz 接口。",
        },
        icon: CircleDot,
        image:
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Fire Hose Canvas & Duraline Red Rubber",
        desc: {
          id: 'Ukuran 1.5" & 2.5", tahan tekanan tinggi.',
          en: 'Size 1.5" & 2.5", high pressure resistant.',
          zh: '尺寸 1.5" 及 2.5"，耐高压。',
        },
        icon: Waves,
        image:
          "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Handline Fire Hose Nozzle",
        desc: {
          id: "Selectable gallonage, adjustable spray.",
          en: "Selectable gallonage, adjustable spray pattern.",
          zh: "可调节流量与喷射方式。",
        },
        icon: Droplets,
        image:
          "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Manual Fixed Fire Monitor",
        desc: {
          id: "T Series BFM-20T s/d BFM-50T.",
          en: "T Series BFM-20T up to BFM-50T.",
          zh: "T系列 BFM-20T 至 BFM-50T。",
        },
        icon: Wrench,
        image:
          "https://images.unsplash.com/photo-1581091870627-3b4a3b3c0a1a?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Hydrant Pillar",
        desc: {
          id: "One Way, Two Way, Wet Barrel Pillar.",
          en: "One Way, Two Way, Wet Barrel Pillar.",
          zh: "单出口、双出口、湿式消火栓。",
        },
        icon: FlameKindling,
        image:
          "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    key: "valves",
    label: "Fire Fighting Valves",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Butterfly Valve",
        desc: {
          id: "Wafer & lug type dengan tamper switch opsional.",
          en: "Wafer & lug type with optional tamper switch.",
          zh: "对夹式与法兰式，可选防拆开关。",
        },
        icon: Cog,
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Gate Valve OS&Y",
        desc: {
          id: "Outside screw & yoke gate valve UL/FM.",
          en: "Outside screw & yoke gate valve, UL/FM listed.",
          zh: "外螺纹轭式闸阀，UL/FM认证。",
        },
        icon: Wrench,
        image:
          "https://images.unsplash.com/photo-1581094651181-35942459ef62?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Swing Check Valve",
        desc: {
          id: "Ductile iron body untuk sistem hydrant & sprinkler.",
          en: "Ductile iron body for hydrant & sprinkler systems.",
          zh: "球墨铸铁材质，适用于消防栓及喷淋系统。",
        },
        icon: GitBranch,
        image:
          "https://images.unsplash.com/photo-1581093458791-9d2b9c9c9c5f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Indicator Post",
        desc: {
          id: "Wall & post indicator valve.",
          en: "Wall & post indicator valve.",
          zh: "墙式及柱式指示阀。",
        },
        icon: Gauge,
        image:
          "https://images.unsplash.com/photo-1581091870627-3b4a3b3c0a1a?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Wet Alarm Valve",
        desc: {
          id: "Sistem sprinkler wet pipe dengan retarding chamber.",
          en: "Wet pipe sprinkler system with retarding chamber.",
          zh: "带延时室的湿式喷淋系统。",
        },
        icon: Bell,
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Deluge Alarm Valve",
        desc: {
          id: "Deluge system untuk area risiko tinggi.",
          en: "Deluge system for high-risk areas.",
          zh: "适用于高风险区域的雨淋系统。",
        },
        icon: ShieldAlert,
        image:
          "https://images.unsplash.com/photo-1581094651181-35942459ef62?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    key: "alarm",
    label: "Fire Alarm System",
    image:
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Conventional Fire Alarm",
        desc: {
          id: "Sistem zoning konvensional untuk gedung kecil-menengah.",
          en: "Conventional zoning system for small-to-medium buildings.",
          zh: "适用于中小型建筑的传统分区系统。",
        },
        icon: Bell,
        image:
          "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Semi Addressable System",
        desc: {
          id: "Kombinasi biaya efisien dengan identifikasi zona.",
          en: "Cost-efficient combination with zone identification.",
          zh: "具成本效益并可识别区域的组合方案。",
        },
        icon: Radio,
        image:
          "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Full Addressable System",
        desc: {
          id: "Identifikasi titik detektor presisi untuk gedung tinggi.",
          en: "Precise detector point identification for high-rise buildings.",
          zh: "适用于高层建筑的精确探测点识别。",
        },
        icon: Gauge,
        image:
          "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Manual Call Point",
        desc: {
          id: "Break glass MCP standar internasional.",
          en: "International standard break-glass MCP.",
          zh: "符合国际标准的破碎玻璃手动报警按钮。",
        },
        icon: AlertTriangle,
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Smoke & Heat Detector",
        desc: {
          id: "Optical smoke, heat, dan multi-sensor detector.",
          en: "Optical smoke, heat, and multi-sensor detectors.",
          zh: "光电烟感、温感及多传感器探测器。",
        },
        icon: Wind,
        image:
          "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Alarm Bell & Strobe",
        desc: {
          id: 'Audible-visual notification device 6"/10".',
          en: 'Audible-visual notification device 6"/10".',
          zh: '6"/10" 声光报警装置。',
        },
        icon: Siren,
        image:
          "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    key: "extinguisher",
    label: "Fire Extinguisher",
    image:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "APAR ABC Powder TONATA 1–9 Kg",
        desc: {
          id: "Portable fire extinguisher SNI 180-1:2022.",
          en: "Portable fire extinguisher, SNI 180-1:2022 certified.",
          zh: "符合 SNI 180-1:2022 标准的便携式灭火器。",
        },
        icon: Cylinder,
        image:
          "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "APAR Trolley 20–150 Kg",
        desc: {
          id: "Wheeled ABC powder extinguisher industrial.",
          en: "Industrial wheeled ABC powder extinguisher.",
          zh: "工业用轮式ABC干粉灭火器。",
        },
        icon: Truck,
        image:
          "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "CO₂ Fire Extinguisher",
        desc: {
          id: "Untuk kebakaran listrik & ruang server.",
          en: "For electrical fires & server rooms.",
          zh: "适用于电气火灾及机房。",
        },
        icon: Wind,
        image:
          "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Foam AFFF Extinguisher",
        desc: {
          id: "Cairan mudah terbakar & area migas.",
          en: "For flammable liquids & oil & gas areas.",
          zh: "适用于易燃液体及石油天然气区域。",
        },
        icon: Droplets,
        image:
          "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Automatic Ceiling Extinguisher",
        desc: {
          id: "Proteksi otomatis untuk ruang panel & kitchen.",
          en: "Automatic protection for panel rooms & kitchens.",
          zh: "适用于配电室及厨房的自动保护装置。",
        },
        icon: ShieldAlert,
        image:
          "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Fire Blanket",
        desc: {
          id: "Selimut api fiberglass tahan panas tinggi.",
          en: "High heat-resistant fiberglass fire blanket.",
          zh: "耐高温玻璃纤维灭火毯。",
        },
        icon: FlameKindling,
        image:
          "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
];

export const values: { title: Localized; desc: Localized }[] = [
  {
    title: {
      id: "Full-Service Fire Protection",
      en: "Full-Service Fire Protection",
      zh: "全方位消防保护服务",
    },
    desc: {
      id: "Konsultasi, desain, supply, instalasi, commissioning, hingga maintenance dalam satu atap.",
      en: "Consultation, design, supply, installation, commissioning, and maintenance all under one roof.",
      zh: "咨询、设计、供应、安装、调试至维护一站式服务。",
    },
  },
  {
    title: {
      id: "Produk Berkualitas & Bersertifikat",
      en: "Quality & Certified Products",
      zh: "优质认证产品",
    },
    desc: {
      id: "Peralatan bersertifikasi SNI, UL Listed, FM Approved, dan standar internasional lainnya.",
      en: "Equipment certified to SNI, UL Listed, FM Approved, and other international standards.",
      zh: "通过SNI、UL认证、FM认证及其他国际标准认证的设备。",
    },
  },
  {
    title: { id: "Tim Berpengalaman", en: "Experienced Team", zh: "经验丰富的团队" },
    desc: {
      id: "Engineer & teknisi tersertifikasi dengan pengalaman proyek migas, power plant, dan high-rise.",
      en: "Certified engineers & technicians experienced with oil & gas, power plant, and high-rise projects.",
      zh: "拥有石油天然气、发电厂及高层建筑项目经验的认证工程师与技术人员。",
    },
  },
  {
    title: { id: "Melayani Semua Industri", en: "Serving Every Industry", zh: "服务各行各业" },
    desc: {
      id: "Solusi disesuaikan untuk kebutuhan setiap sektor — dari marine hingga forestry.",
      en: "Tailored solutions for every sector's needs — from marine to forestry.",
      zh: "针对每个行业需求量身定制的解决方案——从海事到林业。",
    },
  },
];

export const stats: { value: number; suffix: string; label: Localized }[] = [
  {
    value: 500,
    suffix: "+",
    label: { id: "Proyek Terpasang", en: "Projects Installed", zh: "已安装项目" },
  },
  {
    value: 50,
    suffix: "+",
    label: { id: "Klien Korporat", en: "Corporate Clients", zh: "企业客户" },
  },
  {
    value: 10,
    suffix: "+",
    label: { id: "Tahun Pengalaman", en: "Years of Experience", zh: "年经验" },
  },
  { value: 100, suffix: "%", label: { id: "Bersertifikat", en: "Certified", zh: "已认证" } },
];

export const gallery: { image: string; caption: Localized }[] = [
  {
    image:
      "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=900&q=80",
    caption: {
      id: "Instalasi Hydrant Pillar",
      en: "Hydrant Pillar Installation",
      zh: "消防栓安装",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    caption: {
      id: "Pemasangan Fire Fighting Valve",
      en: "Fire Fighting Valve Installation",
      zh: "消防阀门安装",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=900&q=80",
    caption: {
      id: "Sistem Fire Alarm Gedung",
      en: "Building Fire Alarm System",
      zh: "建筑消防报警系统",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=900&q=80",
    caption: {
      id: "Jajaran Fire Extinguisher",
      en: "Fire Extinguisher Lineup",
      zh: "灭火器产品系列",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    caption: {
      id: "Proteksi Fasilitas Industri",
      en: "Industrial Facility Protection",
      zh: "工业设施保护",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
    caption: { id: "Tim Engineer di Lapangan", en: "Engineering Team on Site", zh: "现场工程团队" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
    caption: {
      id: "Selang & Kelengkapan Pemadam",
      en: "Hoses & Firefighting Accessories",
      zh: "消防水带及配件",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1523419409543-8c1a1e5a4b7c?auto=format&fit=crop&w=900&q=80",
    caption: { id: "Training Personel", en: "Personnel Training", zh: "人员培训" },
  },
];
