<?php

namespace Database\Seeders;

use App\Models\GalleryItem;
use Illuminate\Database\Seeder;

class GalleryItemSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'image' => 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Instalasi Hydrant Pillar',
                'caption_en' => 'Hydrant Pillar Installation',
                'caption_zh' => '消防栓安装',
            ],
            [
                'image' => 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Pemasangan Fire Fighting Valve',
                'caption_en' => 'Fire Fighting Valve Installation',
                'caption_zh' => '消防阀门安装',
            ],
            [
                'image' => 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Sistem Fire Alarm Gedung',
                'caption_en' => 'Building Fire Alarm System',
                'caption_zh' => '建筑消防报警系统',
            ],
            [
                'image' => 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Jajaran Fire Extinguisher',
                'caption_en' => 'Fire Extinguisher Lineup',
                'caption_zh' => '灭火器产品系列',
            ],
            [
                'image' => 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Proteksi Fasilitas Industri',
                'caption_en' => 'Industrial Facility Protection',
                'caption_zh' => '工业设施保护',
            ],
            [
                'image' => 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Tim Engineer di Lapangan',
                'caption_en' => 'Engineering Team on Site',
                'caption_zh' => '现场工程团队',
            ],
            [
                'image' => 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Selang & Kelengkapan Pemadam',
                'caption_en' => 'Hoses & Firefighting Accessories',
                'caption_zh' => '消防水带及配件',
            ],
            [
                'image' => 'https://images.unsplash.com/photo-1523419409543-8c1a1e5a4b7c?auto=format&fit=crop&w=900&q=80',
                'caption_id' => 'Training Personel',
                'caption_en' => 'Personnel Training',
                'caption_zh' => '人员培训',
            ],
        ];

        foreach ($items as $i => $item) {
            GalleryItem::updateOrCreate(
                ['image' => $item['image'], 'caption_id' => $item['caption_id']],
                $item + ['sort_order' => $i],
            );
        }
    }
}
