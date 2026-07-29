<?php

namespace App\Http\Resources;

use App\Support\Media;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GalleryItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'image' => Media::url($this->image),
            'caption' => [
                'id' => $this->caption_id,
                'en' => $this->caption_en,
                'zh' => $this->caption_zh,
            ],
        ];
    }
}
