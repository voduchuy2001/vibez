<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class AttributeOptionSku extends Pivot
{
    protected $table = 'attribute_option_skus';

    protected $fillable = [
        'sku_id',
        'attribute_option_id',
    ];

    public function sku(): BelongsTo
    {
        return $this->belongsTo(SKU::class, 'sku_id');
    }

    public function attributeOption(): BelongsTo
    {
        return $this->belongsTo(AttributeOption::class, 'attribute_option_id');
    }
}
