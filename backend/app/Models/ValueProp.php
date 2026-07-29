<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ValueProp extends Model
{
    protected $fillable = [
        'title_id',
        'title_en',
        'title_zh',
        'desc_id',
        'desc_en',
        'desc_zh',
        'sort_order',
    ];
}
