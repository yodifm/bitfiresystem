import {
  Factory,
  Zap,
  Building2,
  Warehouse,
  Trees,
  Landmark,
  Ship,
  Truck,
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

export const productTabs = [
  {
    key: "hydrant",
    label: "Fire Hydrant Equipment",
    image:
      "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Hydrant Box Type A1, A2, B, C", desc: "Indoor & outdoor hydrant box sesuai standar SNI." },
      { name: "Hose Rack, Hydrant Valve, Hose Nozzle", desc: "Kelengkapan hydrant box premium." },
      { name: "Siamese Connection", desc: "Two-way & three-way siamese untuk sambungan pemadam." },
      { name: "Fire Hose Coupling", desc: "Machino & Storz coupling brass/aluminum." },
      { name: "Fire Hose Canvas & Duraline Red Rubber", desc: "Ukuran 1.5\" & 2.5\", tahan tekanan tinggi." },
      { name: "Handline Fire Hose Nozzle", desc: "Selectable gallonage, adjustable spray." },
      { name: "Manual Fixed Fire Monitor", desc: "T Series BFM-20T s/d BFM-50T." },
      { name: "Hydrant Pillar", desc: "One Way, Two Way, Wet Barrel Pillar." },
    ],
  },
  {
    key: "valves",
    label: "Fire Fighting Valves",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Butterfly Valve", desc: "Wafer & lug type dengan tamper switch opsional." },
      { name: "Gate Valve OS&Y", desc: "Outside screw & yoke gate valve UL/FM." },
      { name: "Swing Check Valve", desc: "Ductile iron body untuk sistem hydrant & sprinkler." },
      { name: "Indicator Post", desc: "Wall & post indicator valve." },
      { name: "Wet Alarm Valve", desc: "Sistem sprinkler wet pipe dengan retarding chamber." },
      { name: "Deluge Alarm Valve", desc: "Deluge system untuk area risiko tinggi." },
    ],
  },
  {
    key: "alarm",
    label: "Fire Alarm System",
    image:
      "https://images.unsplash.com/photo-1517940310602-26535839fe84?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Conventional Fire Alarm", desc: "Sistem zoning konvensional untuk gedung kecil-menengah." },
      { name: "Semi Addressable System", desc: "Kombinasi biaya efisien dengan identifikasi zona." },
      { name: "Full Addressable System", desc: "Identifikasi titik detektor presisi untuk gedung tinggi." },
      { name: "Manual Call Point", desc: "Break glass MCP standar internasional." },
      { name: "Smoke & Heat Detector", desc: "Optical smoke, heat, dan multi-sensor detector." },
      { name: "Alarm Bell & Strobe", desc: "Audible-visual notification device 6\"/10\"." },
    ],
  },
  {
    key: "extinguisher",
    label: "Fire Extinguisher",
    image:
      "https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "APAR ABC Powder TONATA 1–9 Kg", desc: "Portable fire extinguisher SNI 180-1:2022." },
      { name: "APAR Trolley 20–150 Kg", desc: "Wheeled ABC powder extinguisher industrial." },
      { name: "CO₂ Fire Extinguisher", desc: "Untuk kebakaran listrik & ruang server." },
      { name: "Foam AFFF Extinguisher", desc: "Cairan mudah terbakar & area migas." },
      { name: "Automatic Ceiling Extinguisher", desc: "Proteksi otomatis untuk ruang panel & kitchen." },
      { name: "Fire Blanket", desc: "Selimut api fiberglass tahan panas tinggi." },
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
