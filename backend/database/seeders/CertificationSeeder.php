<?php

namespace Database\Seeders;

use App\Models\Certification;
use Illuminate\Database\Seeder;

class CertificationSeeder extends Seeder
{
    public function run(): void
    {
        $certifications = [
            ['icon' => 'BadgeCheck', 'label_id' => 'PT Berbadan Hukum', 'label_en' => 'Licensed Company', 'label_zh' => '合法注册公司'],
            ['icon' => 'Award', 'label_id' => 'Terdaftar NIB & NPWP', 'label_en' => 'Registered NIB & NPWP', 'label_zh' => '已注册 NIB 与 NPWP'],
            ['icon' => 'ShieldCheck', 'label_id' => 'SNI 180-1:2022', 'label_en' => 'SNI 180-1:2022', 'label_zh' => 'SNI 180-1:2022'],
            ['icon' => 'Award', 'label_id' => 'UL Listed', 'label_en' => 'UL Listed', 'label_zh' => 'UL 认证'],
            ['icon' => 'ShieldCheck', 'label_id' => 'FM Approved', 'label_en' => 'FM Approved', 'label_zh' => 'FM 认证'],
            ['icon' => 'BadgeCheck', 'label_id' => 'ISO Standard', 'label_en' => 'ISO Standard', 'label_zh' => 'ISO 标准'],
        ];

        foreach ($certifications as $i => $certification) {
            Certification::updateOrCreate(
                ['label_id' => $certification['label_id']],
                $certification + ['sort_order' => $i],
            );
        }
    }
}
