<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'name',
        'code',
        'thumbnail',
        'images',
        'description',
        'content',
        'status',
    ];

    public function skus(): HasMany
    {
        return $this->hasMany(SKU::class, 'product_id');
    }

    public function defaultSku(): HasOne
    {
        return $this->hasOne(SKU::class, 'product_id')
            ->where('is_default', 1);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'product_categories', 'product_id', 'category_id');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'product_id');
    }
}
