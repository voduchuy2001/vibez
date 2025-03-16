<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class AttributeOptionSku extends Pivot
{
    protected $table = 'attribute_option_skus';

    protected $fillable = [
        'sku_id',
        'attribute_option_id',
    ];
}
