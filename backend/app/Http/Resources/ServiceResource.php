<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'icon' => $this->icon,
            'title' => $this->title,
            'desc' => [
                'id' => $this->desc_id,
                'en' => $this->desc_en,
                'zh' => $this->desc_zh,
            ],
        ];
    }
}
