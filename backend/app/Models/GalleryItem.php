<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GalleryItem extends Model
{
    protected $fillable = [
        'image',
        'caption_id',
        'caption_en',
        'caption_zh',
        'sort_order',
    ];
}
