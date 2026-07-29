<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{
    protected $fillable = [
        'value',
        'suffix',
        'label_id',
        'label_en',
        'label_zh',
        'sort_order',
    ];
}
