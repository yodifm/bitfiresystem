<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'icon' => 'Factory',
                'image' => 'services/oil-and-gas.jpg',
                'title' => 'Oil and Gas',
                'desc_id' => 'Proteksi fasilitas migas dan kilang berisiko tinggi.',
                'desc_en' => 'Protection for high-risk oil & gas facilities and refineries.',
                'desc_zh' => '保护高风险的石油天然气设施及炼油厂。',
            ],
            [
                'icon' => 'Zap',
                'image' => 'services/power-plant.jpg',
                'title' => 'Power Plant',
                'desc_id' => 'Fire protection untuk pembangkit listrik dan energi.',
                'desc_en' => 'Fire protection for power plants and energy facilities.',
                'desc_zh' => '为发电厂及能源设施提供消防保护。',
            ],
            [
                'icon' => 'Warehouse',
                'image' => 'services/industrial-manufacture.jpg',
                'title' => 'Industrial Manufacture',
                'desc_id' => 'Manufaktur, pabrik, gudang, dan area logistik.',
                'desc_en' => 'Manufacturing plants, factories, warehouses, and logistics areas.',
                'desc_zh' => '制造工厂、厂房、仓库及物流区域。',
            ],
            [
                'icon' => 'Building2',
                'image' => 'services/high-risk-building.jpg',
                'title' => 'High Risk Building',
                'desc_id' => 'Hotel, apartemen, rumah sakit, supermarket, sekolah.',
                'desc_en' => 'Hotels, apartments, hospitals, supermarkets, schools.',
                'desc_zh' => '酒店、公寓、医院、超市、学校。',
            ],
            [
                'icon' => 'Trees',
                'image' => 'services/forestry.jpg',
                'title' => 'Forestry',
                'desc_id' => 'Perlindungan kebakaran area hutan dan perkebunan.',
                'desc_en' => 'Fire protection for forestry and plantation areas.',
                'desc_zh' => '森林及种植园区域的消防保护。',
            ],
            [
                'icon' => 'Landmark',
                'image' => 'services/municipal.jpg',
                'title' => 'Municipal',
                'desc_id' => 'Dukungan proteksi kebakaran untuk instansi kota & pemerintah.',
                'desc_en' => 'Fire protection support for municipal and government institutions.',
                'desc_zh' => '为市政及政府机构提供消防保护支持。',
            ],
            [
                'icon' => 'Ship',
                'image' => 'services/marine.jpg',
                'title' => 'Marine',
                'desc_id' => 'Fire safety equipment untuk kapal dan sektor kelautan.',
                'desc_en' => 'Fire safety equipment for ships and the maritime sector.',
                'desc_zh' => '为船舶及海事领域提供消防安全设备。',
            ],
            [
                'icon' => 'Truck',
                'image' => 'services/vehicles-heavy-equipment.jpg',
                'title' => 'Vehicles & Heavy Equipment',
                'desc_id' => 'Proteksi kendaraan operasional dan alat berat.',
                'desc_en' => 'Protection for operational vehicles and heavy equipment.',
                'desc_zh' => '保护作业车辆及重型设备。',
            ],
        ];

        foreach ($services as $i => $service) {
            Service::updateOrCreate(
                ['title' => $service['title']],
                $service + ['sort_order' => $i],
            );
        }
    }
}
