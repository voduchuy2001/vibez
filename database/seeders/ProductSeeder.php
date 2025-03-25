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

        for ($i = 1; $i <= 20; $i++) {
            $product = Product::create([
                'name' => 'Sản phẩm ' . $i,
                'thumbnail' => 'https://via.placeholder.com/200x200.png?text=Product+' . $i,
                'images' => json_encode([
                    'https://via.placeholder.com/300x300.png?text=Product+' . $i . '-1',
                    'https://via.placeholder.com/300x300.png?text=Product+' . $i . '-2'
                ]),
                'description' => 'Mô tả cho sản phẩm ' . $i,
                'content' => 'Nội dung chi tiết cho sản phẩm ' . $i,
                'status' => BaseStatus::PUBLISHED->value,
            ]);

            $product->categories()->attach(array_rand(array_flip($categories), rand(1, 3)));

            for ($j = 1; $j <= 3; $j++) {
                SKU::create([
                    'product_id' => $product->id,
                    'code' => strtoupper(Str::random(10)),
                    'price' => rand(10000, 500000),
                    'stock' => rand(0, 100),
                ]);
            }
        }
    }
}
