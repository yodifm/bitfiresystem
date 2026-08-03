<?php

namespace App\Http\Resources;

use App\Support\Media;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'desc' => [
                'id' => $this->desc_id,
                'en' => $this->desc_en,
                'zh' => $this->desc_zh,
            ],
            'icon' => $this->icon,
            'image' => Media::url($this->image),
            'brand' => $this->whenLoaded('brand', fn () => $this->brand?->name),
        ];
    }
}
