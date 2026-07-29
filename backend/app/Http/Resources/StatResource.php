<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StatResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'value' => (int) $this->value,
            'suffix' => $this->suffix,
            'label' => [
                'id' => $this->label_id,
                'en' => $this->label_en,
                'zh' => $this->label_zh,
            ],
        ];
    }
}
