<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductItem extends Model
{
    protected $fillable = [
        'product_category_id',
        'name',
        'desc_id',
        'desc_en',
        'desc_zh',
        'icon',
        'image',
        'sort_order',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }
}
