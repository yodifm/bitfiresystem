<?php

namespace Database\Seeders;

use App\Models\LegalDocument;
use Illuminate\Database\Seeder;

class LegalDocumentSeeder extends Seeder
{
    public function run(): void
    {
        $documents = [
            [
                'title_id' => 'Akta Pendirian Perusahaan',
                'title_en' => 'Company Deed of Establishment',
                'title_zh' => '公司设立契约',
                'file' => 'legal/akta-pendirian.pdf',
            ],
            [
                'title_id' => 'NIB (Nomor Induk Berusaha)',
                'title_en' => 'NIB (Business Identification Number)',
                'title_zh' => '商业登记号 (NIB)',
                'file' => 'legal/nib.pdf',
            ],
            [
                'title_id' => 'NPWP Perusahaan',
                'title_en' => 'Company Tax ID (NPWP)',
                'title_zh' => '公司税务登记号 (NPWP)',
                'file' => 'legal/npwp.pdf',
            ],
            [
                'title_id' => 'Sertifikat Standar',
                'title_en' => 'Standard Certificate',
                'title_zh' => '标准认证证书',
                'file' => 'legal/sertifikat-standar.pdf',
            ],
            [
                'title_id' => 'SK Kemenkumham',
                'title_en' => 'Ministry of Law Decree (SK)',
                'title_zh' => '法律部决定书 (SK)',
                'file' => 'legal/sk-kemenkumham.pdf',
            ],
            [
                'title_id' => 'SPPKP',
                'title_en' => 'VAT Taxable Entity Confirmation (SPPKP)',
                'title_zh' => '增值税纳税人确认书 (SPPKP)',
                'file' => 'legal/sppkp.pdf',
            ],
        ];

        foreach ($documents as $i => $doc) {
            LegalDocument::updateOrCreate(
                ['file' => $doc['file']],
                $doc + ['sort_order' => $i],
            );
        }
    }
}
