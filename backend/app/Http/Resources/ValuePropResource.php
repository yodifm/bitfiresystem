<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ValuePropResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title' => [
                'id' => $this->title_id,
                'en' => $this->title_en,
                'zh' => $this->title_zh,
            ],
            'desc' => [
                'id' => $this->desc_id,
                'en' => $this->desc_en,
                'zh' => $this->desc_zh,
            ],
        ];
    }
}
