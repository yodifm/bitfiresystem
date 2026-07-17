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

export const services = [
  { icon: Factory, title: "Oil & Gas & Mining", desc: "Proteksi fasilitas migas, kilang, dan pertambangan berisiko tinggi." },
  { icon: Zap, title: "Power Plant", desc: "Fire protection untuk pembangkit listrik dan energi." },
  { icon: Building2, title: "High Risk Building", desc: "Hotel, apartemen, rumah sakit, supermarket, sekolah." },
  { icon: Warehouse, title: "Industrial & Warehouse", desc: "Manufaktur, pabrik, gudang, dan area logistik." },
  { icon: Trees, title: "Forestry", desc: "Perlindungan kebakaran area hutan dan perkebunan." },
  { icon: Landmark, title: "Municipal", desc: "Dukungan proteksi kebakaran untuk instansi kota & pemerintah." },
  { icon: Ship, title: "Marine", desc: "Fire safety equipment untuk kapal dan sektor kelautan." },
  { icon: Truck, title: "Vehicles & Heavy Equipment", desc: "Proteksi kendaraan operasional dan alat berat." },
];

export type ProductItem = { name: string; desc: string; icon: LucideIcon };
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
    // Red fire hydrant pillar closeup
    image:
      "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1000&q=80",
    items: [
      { name: "Hydrant Box Type A1, A2, B, C", desc: "Indoor & outdoor hydrant box sesuai standar SNI.", icon: PanelTop },
      { name: "Hose Rack, Hydrant Valve, Hose Nozzle", desc: "Kelengkapan hydrant box premium.", icon: Droplets },
      { name: "Siamese Connection", desc: "Two-way & three-way siamese untuk sambungan pemadam.", icon: GitBranch },
      { name: "Fire Hose Coupling", desc: "Machino & Storz coupling brass/aluminum.", icon: CircleDot },
      { name: "Fire Hose Canvas & Duraline Red Rubber", desc: "Ukuran 1.5\" & 2.5\", tahan tekanan tinggi.", icon: Waves },
      { name: "Handline Fire Hose Nozzle", desc: "Selectable gallonage, adjustable spray.", icon: Droplets },
      { name: "Manual Fixed Fire Monitor", desc: "T Series BFM-20T s/d BFM-50T.", icon: Wrench },
      { name: "Hydrant Pillar", desc: "One Way, Two Way, Wet Barrel Pillar.", icon: FlameKindling },
    ],
  },
  {
    key: "valves",
    label: "Fire Fighting Valves",
    // Industrial red pipe valves
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    items: [
      { name: "Butterfly Valve", desc: "Wafer & lug type dengan tamper switch opsional.", icon: Cog },
      { name: "Gate Valve OS&Y", desc: "Outside screw & yoke gate valve UL/FM.", icon: Wrench },
      { name: "Swing Check Valve", desc: "Ductile iron body untuk sistem hydrant & sprinkler.", icon: GitBranch },
      { name: "Indicator Post", desc: "Wall & post indicator valve.", icon: Gauge },
      { name: "Wet Alarm Valve", desc: "Sistem sprinkler wet pipe dengan retarding chamber.", icon: Bell },
      { name: "Deluge Alarm Valve", desc: "Deluge system untuk area risiko tinggi.", icon: ShieldAlert },
    ],
  },
  {
    key: "alarm",
    label: "Fire Alarm System",
    // Fire alarm / smoke detector on ceiling
    image:
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80",
    items: [
      { name: "Conventional Fire Alarm", desc: "Sistem zoning konvensional untuk gedung kecil-menengah.", icon: Bell },
      { name: "Semi Addressable System", desc: "Kombinasi biaya efisien dengan identifikasi zona.", icon: Radio },
      { name: "Full Addressable System", desc: "Identifikasi titik detektor presisi untuk gedung tinggi.", icon: Gauge },
      { name: "Manual Call Point", desc: "Break glass MCP standar internasional.", icon: AlertTriangle },
      { name: "Smoke & Heat Detector", desc: "Optical smoke, heat, dan multi-sensor detector.", icon: Wind },
      { name: "Alarm Bell & Strobe", desc: "Audible-visual notification device 6\"/10\".", icon: Siren },
    ],
  },
  {
    key: "extinguisher",
    label: "Fire Extinguisher",
    // Row of red fire extinguishers
    image:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80",
    items: [
      { name: "APAR ABC Powder TONATA 1–9 Kg", desc: "Portable fire extinguisher SNI 180-1:2022.", icon: Cylinder },
      { name: "APAR Trolley 20–150 Kg", desc: "Wheeled ABC powder extinguisher industrial.", icon: Truck },
      { name: "CO₂ Fire Extinguisher", desc: "Untuk kebakaran listrik & ruang server.", icon: Wind },
      { name: "Foam AFFF Extinguisher", desc: "Cairan mudah terbakar & area migas.", icon: Droplets },
      { name: "Automatic Ceiling Extinguisher", desc: "Proteksi otomatis untuk ruang panel & kitchen.", icon: ShieldAlert },
      { name: "Fire Blanket", desc: "Selimut api fiberglass tahan panas tinggi.", icon: FlameKindling },
    ],
  },
];

export const values = [
  {
    title: "Full-Service Fire Protection",
    desc: "Konsultasi, desain, supply, instalasi, commissioning, hingga maintenance dalam satu atap.",
  },
  {
    title: "Produk Berkualitas & Bersertifikat",
    desc: "Peralatan bersertifikasi SNI, UL Listed, FM Approved, dan standar internasional lainnya.",
  },
  {
    title: "Tim Berpengalaman",
    desc: "Engineer & teknisi tersertifikasi dengan pengalaman proyek migas, power plant, dan high-rise.",
  },
  {
    title: "Melayani Semua Industri",
    desc: "Solusi disesuaikan untuk kebutuhan setiap sektor — dari marine hingga forestry.",
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Proyek Terpasang" },
  { value: 50, suffix: "+", label: "Klien Korporat" },
  { value: 10, suffix: "+", label: "Tahun Pengalaman" },
  { value: 100, suffix: "%", label: "Bersertifikat" },
];
