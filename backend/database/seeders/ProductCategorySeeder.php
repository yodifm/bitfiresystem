<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    public function run(): void
    {
        $bitfireId = Brand::where('name', 'Bitfire')->value('id');

        $categories = [
            [
                'key' => 'fire-hydrant-system',
                'label' => 'Fire Hydrant System',
                'image' => 'product-categories/fire-hydrant-system.jpg',
                'items' => [
                    [
                        'name' => 'Hydrant Box Type A1, A2, B, C',
                        'icon' => 'PanelTop',
                        'image' => 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Indoor & outdoor hydrant box sesuai standar SNI.',
                        'desc_en' => 'Indoor & outdoor hydrant box compliant with SNI standard.',
                        'desc_zh' => '符合SNI标准的室内外消防栓箱。',
                    ],
                    [
                        'name' => 'Hose Rack, Hydrant Valve, Hose Nozzle',
                        'icon' => 'Droplets',
                        'image' => 'https://images.unsplash.com/photo-1620912189866-3bea63274633?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Kelengkapan hydrant box premium.',
                        'desc_en' => 'Premium hydrant box accessories.',
                        'desc_zh' => '高级消防栓箱配件。',
                    ],
                    [
                        'name' => 'Siamese Connection',
                        'icon' => 'GitBranch',
                        'image' => 'https://images.unsplash.com/photo-1581093458791-9d2b9c9c9c5f?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Two-way & three-way siamese untuk sambungan pemadam.',
                        'desc_en' => 'Two-way & three-way siamese connection for firefighting supply.',
                        'desc_zh' => '用于消防供水的双出口及三出口接口。',
                    ],
                    [
                        'name' => 'Fire Hose Coupling',
                        'icon' => 'CircleDot',
                        'image' => 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Machino & Storz coupling brass/aluminum.',
                        'desc_en' => 'Machino & Storz coupling in brass/aluminum.',
                        'desc_zh' => '黄铜/铝制 Machino 及 Storz 接口。',
                    ],
                    [
                        'name' => 'Fire Hose Canvas & Duraline Red Rubber',
                        'icon' => 'Waves',
                        'image' => 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Ukuran 1.5" & 2.5", tahan tekanan tinggi.',
                        'desc_en' => 'Size 1.5" & 2.5", high pressure resistant.',
                        'desc_zh' => '尺寸 1.5" 及 2.5"，耐高压。',
                    ],
                    [
                        'name' => 'Handline Fire Hose Nozzle',
                        'icon' => 'Droplets',
                        'image' => 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Selectable gallonage, adjustable spray.',
                        'desc_en' => 'Selectable gallonage, adjustable spray pattern.',
                        'desc_zh' => '可调节流量与喷射方式。',
                    ],
                    [
                        'name' => 'Manual Fixed Fire Monitor',
                        'icon' => 'Wrench',
                        'image' => 'https://images.unsplash.com/photo-1581091870627-3b4a3b3c0a1a?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'T Series BFM-20T s/d BFM-50T.',
                        'desc_en' => 'T Series BFM-20T up to BFM-50T.',
                        'desc_zh' => 'T系列 BFM-20T 至 BFM-50T。',
                    ],
                    [
                        'name' => 'Hydrant Pillar',
                        'icon' => 'FlameKindling',
                        'image' => 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'One Way, Two Way, Wet Barrel Pillar.',
                        'desc_en' => 'One Way, Two Way, Wet Barrel Pillar.',
                        'desc_zh' => '单出口、双出口、湿式消火栓。',
                    ],
                ],
            ],
            [
                'key' => 'fire-alarm-system',
                'label' => 'Fire Alarm System',
                'image' => 'product-categories/fire-alarm-system.jpg',
                'items' => [
                    [
                        'name' => 'Conventional Fire Alarm',
                        'icon' => 'Bell',
                        'image' => 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Sistem zoning konvensional untuk gedung kecil-menengah.',
                        'desc_en' => 'Conventional zoning system for small-to-medium buildings.',
                        'desc_zh' => '适用于中小型建筑的传统分区系统。',
                    ],
                    [
                        'name' => 'Semi Addressable System',
                        'icon' => 'Radio',
                        'image' => 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Kombinasi biaya efisien dengan identifikasi zona.',
                        'desc_en' => 'Cost-efficient combination with zone identification.',
                        'desc_zh' => '具成本效益并可识别区域的组合方案。',
                    ],
                    [
                        'name' => 'Full Addressable System',
                        'icon' => 'Gauge',
                        'image' => 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Identifikasi titik detektor presisi untuk gedung tinggi.',
                        'desc_en' => 'Precise detector point identification for high-rise buildings.',
                        'desc_zh' => '适用于高层建筑的精确探测点识别。',
                    ],
                    [
                        'name' => 'Manual Call Point',
                        'icon' => 'AlertTriangle',
                        'image' => 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Break glass MCP standar internasional.',
                        'desc_en' => 'International standard break-glass MCP.',
                        'desc_zh' => '符合国际标准的破碎玻璃手动报警按钮。',
                    ],
                    [
                        'name' => 'Smoke & Heat Detector',
                        'icon' => 'Wind',
                        'image' => 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Optical smoke, heat, dan multi-sensor detector.',
                        'desc_en' => 'Optical smoke, heat, and multi-sensor detectors.',
                        'desc_zh' => '光电烟感、温感及多传感器探测器。',
                    ],
                    [
                        'name' => 'Alarm Bell & Strobe',
                        'icon' => 'Siren',
                        'image' => 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Audible-visual notification device 6"/10".',
                        'desc_en' => 'Audible-visual notification device 6"/10".',
                        'desc_zh' => '6"/10" 声光报警装置。',
                    ],
                ],
            ],
            [
                'key' => 'fire-extinguisher',
                'label' => 'Fire Extinguisher',
                'image' => 'product-categories/fire-extinguisher.jpg',
                'items' => [
                    [
                        'name' => 'APAR ABC Powder TONATA 1–9 Kg',
                        'icon' => 'Cylinder',
                        'image' => 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Portable fire extinguisher SNI 180-1:2022.',
                        'desc_en' => 'Portable fire extinguisher, SNI 180-1:2022 certified.',
                        'desc_zh' => '符合 SNI 180-1:2022 标准的便携式灭火器。',
                    ],
                    [
                        'name' => 'APAR Trolley 20–150 Kg',
                        'icon' => 'Truck',
                        'image' => 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Wheeled ABC powder extinguisher industrial.',
                        'desc_en' => 'Industrial wheeled ABC powder extinguisher.',
                        'desc_zh' => '工业用轮式ABC干粉灭火器。',
                    ],
                    [
                        'name' => 'CO₂ Fire Extinguisher',
                        'icon' => 'Wind',
                        'image' => 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Untuk kebakaran listrik & ruang server.',
                        'desc_en' => 'For electrical fires & server rooms.',
                        'desc_zh' => '适用于电气火灾及机房。',
                    ],
                    [
                        'name' => 'Foam AFFF Extinguisher',
                        'icon' => 'Droplets',
                        'image' => 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Cairan mudah terbakar & area migas.',
                        'desc_en' => 'For flammable liquids & oil & gas areas.',
                        'desc_zh' => '适用于易燃液体及石油天然气区域。',
                    ],
                    [
                        'name' => 'Automatic Ceiling Extinguisher',
                        'icon' => 'ShieldAlert',
                        'image' => 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Proteksi otomatis untuk ruang panel & kitchen.',
                        'desc_en' => 'Automatic protection for panel rooms & kitchens.',
                        'desc_zh' => '适用于配电室及厨房的自动保护装置。',
                    ],
                    [
                        'name' => 'Fire Blanket',
                        'icon' => 'FlameKindling',
                        'image' => 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Selimut api fiberglass tahan panas tinggi.',
                        'desc_en' => 'High heat-resistant fiberglass fire blanket.',
                        'desc_zh' => '耐高温玻璃纤维灭火毯。',
                    ],
                ],
            ],
            [
                'key' => 'fire-suppression-system',
                'label' => 'Fire Suppression System',
                'image' => 'product-categories/fire-suppression-system.jpg',
                'items' => [],
            ],
            [
                'key' => 'fire-fighting-equipment',
                'label' => 'Fire Fighting Equipment',
                'image' => 'product-categories/fire-fighting-equipment.jpg',
                'items' => [],
            ],
            [
                'key' => 'fire-hydrant-valves',
                'label' => 'Fire Hydrant Valves',
                'image' => 'product-categories/fire-hydrant-valves.jpg',
                'items' => [
                    [
                        'name' => 'Butterfly Valve',
                        'icon' => 'Cog',
                        'image' => 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Wafer & lug type dengan tamper switch opsional.',
                        'desc_en' => 'Wafer & lug type with optional tamper switch.',
                        'desc_zh' => '对夹式与法兰式，可选防拆开关。',
                    ],
                    [
                        'name' => 'Gate Valve OS&Y',
                        'icon' => 'Wrench',
                        'image' => 'https://images.unsplash.com/photo-1581094651181-35942459ef62?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Outside screw & yoke gate valve UL/FM.',
                        'desc_en' => 'Outside screw & yoke gate valve, UL/FM listed.',
                        'desc_zh' => '外螺纹轭式闸阀，UL/FM认证。',
                    ],
                    [
                        'name' => 'Swing Check Valve',
                        'icon' => 'GitBranch',
                        'image' => 'https://images.unsplash.com/photo-1581093458791-9d2b9c9c9c5f?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Ductile iron body untuk sistem hydrant & sprinkler.',
                        'desc_en' => 'Ductile iron body for hydrant & sprinkler systems.',
                        'desc_zh' => '球墨铸铁材质，适用于消防栓及喷淋系统。',
                    ],
                    [
                        'name' => 'Indicator Post',
                        'icon' => 'Gauge',
                        'image' => 'https://images.unsplash.com/photo-1581091870627-3b4a3b3c0a1a?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Wall & post indicator valve.',
                        'desc_en' => 'Wall & post indicator valve.',
                        'desc_zh' => '墙式及柱式指示阀。',
                    ],
                    [
                        'name' => 'Wet Alarm Valve',
                        'icon' => 'Bell',
                        'image' => 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Sistem sprinkler wet pipe dengan retarding chamber.',
                        'desc_en' => 'Wet pipe sprinkler system with retarding chamber.',
                        'desc_zh' => '带延时室的湿式喷淋系统。',
                    ],
                    [
                        'name' => 'Deluge Alarm Valve',
                        'icon' => 'ShieldAlert',
                        'image' => 'https://images.unsplash.com/photo-1581094651181-35942459ef62?auto=format&fit=crop&w=1000&q=80',
                        'desc_id' => 'Deluge system untuk area risiko tinggi.',
                        'desc_en' => 'Deluge system for high-risk areas.',
                        'desc_zh' => '适用于高风险区域的雨淋系统。',
                    ],
                ],
            ],
            [
                'key' => 'fire-and-safety-equipment',
                'label' => 'Fire and Safety Equipment',
                'image' => 'product-categories/fire-and-safety-equipment.jpg',
                'items' => [],
            ],
            [
                'key' => 'service-and-maintenance',
                'label' => 'Service and Maintenance',
                'image' => 'product-categories/service-and-maintenance.jpg',
                'items' => [],
            ],
        ];

        foreach ($categories as $catIndex => $categoryData) {
            $items = $categoryData['items'];
            unset($categoryData['items']);

            $category = ProductCategory::updateOrCreate(
                ['key' => $categoryData['key']],
                $categoryData + ['sort_order' => $catIndex],
            );

            foreach ($items as $itemIndex => $item) {
                $category->items()->updateOrCreate(
                    ['name' => $item['name']],
                    $item + ['sort_order' => $itemIndex, 'brand_id' => $bitfireId],
                );
            }
        }
    }
}
