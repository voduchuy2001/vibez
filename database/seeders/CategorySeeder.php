<?php

namespace Database\Seeders;

use App\Enums\BaseStatus;
use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    private function buildData(?int $parentId, string $name, string $slug, int $order): array
    {
        return [
             'parent_id' => $parentId,
            'name' => $name,
            'image' => "categories/{$slug}.jpg",
            'icon_image' => "categories/icons/{$slug}.png",
            'description' => "{$name} cao cấp",
            'status' => BaseStatus::PUBLISHED->value,
            'order' => $order,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    public function run(): void
    {
        $categories = [
           $this->buildData(null, 'Men fashion', 'men-fashion', 1),
           $this->buildData(null, 'Women fashion', 'women-fashion', 2),
           $this->buildData(null, 'Accessories', 'accessories', 3),
           $this->buildData(null, 'Shoes', 'shoes', 4),
           $this->buildData(1, 'Men Shirts', 'men-shirts', 5),
           $this->buildData(1, 'Men jeans', 'men-jeans', 6),
           $this->buildData(2, 'Women dresses', 'women-dresses', 7),
           $this->buildData(2, 'Women jeans', 'women-jeans', 8),
           $this->buildData(3, 'Bags', 'bags', 9),
           $this->buildData(3, 'Sunglasses', 'sunglasses', 10),
           $this->buildData(4, 'Sneakers', 'sneakers', 11),
           $this->buildData(4, 'Sandals', 'sandals', 12),
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
