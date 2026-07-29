<?php

namespace Database\Seeders;

use App\Models\Stat;
use Illuminate\Database\Seeder;

class StatSeeder extends Seeder
{
    public function run(): void
    {
        $stats = [
            ['value' => 500, 'suffix' => '+', 'label_id' => 'Proyek Terpasang', 'label_en' => 'Projects Installed', 'label_zh' => '已安装项目'],
            ['value' => 50, 'suffix' => '+', 'label_id' => 'Klien Korporat', 'label_en' => 'Corporate Clients', 'label_zh' => '企业客户'],
            ['value' => 10, 'suffix' => '+', 'label_id' => 'Tahun Pengalaman', 'label_en' => 'Years of Experience', 'label_zh' => '年经验'],
            ['value' => 100, 'suffix' => '%', 'label_id' => 'Bersertifikat', 'label_en' => 'Certified', 'label_zh' => '已认证'],
        ];

        foreach ($stats as $i => $stat) {
            Stat::updateOrCreate(
                ['label_id' => $stat['label_id']],
                $stat + ['sort_order' => $i],
            );
        }
    }
}
