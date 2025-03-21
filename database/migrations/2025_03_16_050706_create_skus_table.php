<?php

use App\Enums\BaseStatus;
use App\Models\Product;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('skus', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Product::class, 'product_id');
            $table->string('code')->unique();
            $table->tinyInteger('is_default')->default(0);
            $table->integer('price');
            $table->integer('stock')->default(0);
            $table->text('images')->nullable();
            $table->string('status', 60)->default(BaseStatus::PUBLISHED->value);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skus');
    }
};
