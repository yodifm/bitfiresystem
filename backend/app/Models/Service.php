<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'icon',
        'title',
        'desc_id',
        'desc_en',
        'desc_zh',
        'sort_order',
    ];
}
