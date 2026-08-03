<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    protected $fillable = [
        'title_id',
        'title_en',
        'title_zh',
        'cover',
        'file',
        'sort_order',
    ];
}
