<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductCategory extends Model
{
    protected $fillable = [
        'key',
        'label',
        'image',
        'sort_order',
    ];

    public function items(): HasMany
    {
        return $this->hasMany(ProductItem::class)->orderBy('sort_order');
    }
}
