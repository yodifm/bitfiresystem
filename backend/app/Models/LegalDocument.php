<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LegalDocument extends Model
{
    protected $fillable = [
        'title_id',
        'title_en',
        'title_zh',
        'file',
        'sort_order',
    ];
}
