<?php

namespace App\Http\Resources;

use App\Support\Media;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CatalogResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title' => [
                'id' => $this->title_id,
                'en' => $this->title_en,
                'zh' => $this->title_zh,
            ],
            'cover' => $this->cover ? Media::url($this->cover) : null,
            'file' => Media::url($this->file),
        ];
    }
}
