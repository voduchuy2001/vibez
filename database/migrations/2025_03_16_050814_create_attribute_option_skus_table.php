<?php

use App\Models\AttributeOption;
use App\Models\SKU;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('attribute_option_skus', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(SKU::class, 'sku_id');
            $table->foreignIdFor(AttributeOption::class, 'attribute_option_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attribute_option_skus');
    }
};
