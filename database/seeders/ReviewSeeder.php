<?php

namespace Database\Seeders;

use App\Enums\BaseStatus;
use App\Models\Product;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        $customers = User::pluck('id')->toArray();
        $products = Product::pluck('id')->toArray();
        $statuses = [BaseStatus::PUBLISHED->value, BaseStatus::DRAFT->value, BaseStatus::PENDING->value];

        $reviews = [];
        for ($i = 0; $i < 100; $i++) {
            $reviews[] = [
                'customer_id' => $customers[array_rand($customers)],
                'product_id' => $products[array_rand($products)],
              'comment' => fake()->sentence(),
                'star' => rand(1, 5),
                'images' => json_encode([fake()->imageUrl(), fake()->imageUrl()]),
                'status' => $statuses[array_rand($statuses)],
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        Review::insert($reviews);
    }
}
