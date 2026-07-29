<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $fillable = [
        'icon',
        'label_id',
        'label_en',
        'label_zh',
        'sort_order',
    ];
}
