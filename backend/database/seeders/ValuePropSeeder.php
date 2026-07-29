<?php

namespace Database\Seeders;

use App\Models\ValueProp;
use Illuminate\Database\Seeder;

class ValuePropSeeder extends Seeder
{
    public function run(): void
    {
        $values = [
            [
                'title_id' => 'Full-Service Fire Protection',
                'title_en' => 'Full-Service Fire Protection',
                'title_zh' => '全方位消防保护服务',
                'desc_id' => 'Konsultasi, desain, supply, instalasi, commissioning, hingga maintenance dalam satu atap.',
                'desc_en' => 'Consultation, design, supply, installation, commissioning, and maintenance all under one roof.',
                'desc_zh' => '咨询、设计、供应、安装、调试至维护一站式服务。',
            ],
            [
                'title_id' => 'Produk Berkualitas & Bersertifikat',
                'title_en' => 'Quality & Certified Products',
                'title_zh' => '优质认证产品',
                'desc_id' => 'Peralatan bersertifikasi SNI, UL Listed, FM Approved, dan standar internasional lainnya.',
                'desc_en' => 'Equipment certified to SNI, UL Listed, FM Approved, and other international standards.',
                'desc_zh' => '通过SNI、UL认证、FM认证及其他国际标准认证的设备。',
            ],
            [
                'title_id' => 'Tim Berpengalaman',
                'title_en' => 'Experienced Team',
                'title_zh' => '经验丰富的团队',
                'desc_id' => 'Engineer & teknisi tersertifikasi dengan pengalaman proyek migas, power plant, dan high-rise.',
                'desc_en' => 'Certified engineers & technicians experienced with oil & gas, power plant, and high-rise projects.',
                'desc_zh' => '拥有石油天然气、发电厂及高层建筑项目经验的认证工程师与技术人员。',
            ],
            [
                'title_id' => 'Melayani Semua Industri',
                'title_en' => 'Serving Every Industry',
                'title_zh' => '服务各行各业',
                'desc_id' => 'Solusi disesuaikan untuk kebutuhan setiap sektor — dari marine hingga forestry.',
                'desc_en' => "Tailored solutions for every sector's needs — from marine to forestry.",
                'desc_zh' => '针对每个行业需求量身定制的解决方案——从海事到林业。',
            ],
        ];

        foreach ($values as $i => $value) {
            ValueProp::updateOrCreate(
                ['title_id' => $value['title_id']],
                $value + ['sort_order' => $i],
            );
        }
    }
}
