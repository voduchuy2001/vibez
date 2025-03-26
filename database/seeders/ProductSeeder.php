<?php

namespace Database\Seeders;

use App\Enums\BaseStatus;
use App\Models\Category;
use App\Models\Product;
use App\Models\SKU;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::pluck('id')->toArray();
        $statuses = [BaseStatus::PUBLISHED->value, BaseStatus::DRAFT->value, BaseStatus::PENDING->value];

        for ($i = 1; $i <= 20; $i++) {
            $product = Product::create([
                'name' => fake()->name(),
                'code' => strtoupper(Str::random(10)),
                'thumbnail' => fake()->imageUrl(),
                'images' => json_encode([fake()->imageUrl(), fake()->imageUrl()]),
                'description' => fake()->text(),
                'content' => fake()->text(),
                'status' => $statuses[array_rand($statuses)],
            ]);

            $randomCategories = collect($categories)->random(rand(1, 3))->toArray();
            $product->categories()->attach($randomCategories);

            $skus = [];
            for ($j = 1; $j <= 3; $j++) {
                $skus[] = [
                    'product_id' => $product->id,
                    'code' => strtoupper(Str::random(10)),
                    'price' => rand(10000, 500000),
                    'stock' => rand(0, 100),
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }

            SKU::insert($skus);
        }
    }
}
