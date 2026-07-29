<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CertificationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'icon' => $this->icon,
            'label' => [
                'id' => $this->label_id,
                'en' => $this->label_en,
                'zh' => $this->label_zh,
            ],
        ];
    }
}
