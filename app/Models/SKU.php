<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class SKU extends Model
{
    protected $table = 'skus';

    protected $fillable = [
        'product_id',
        'code',
        'price',
        'stock',
        'images',
        'status',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function attributeOptions(): BelongsToMany
    {
        return $this->belongsToMany(AttributeOption::class, 'attribute_option_skus', 'sku_id', 'attribute_option_id');
    }
}
