<?php

namespace Database\Seeders;

use App\Enums\BaseStatus;
use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'parent_id' => null,
                'name' => 'Thời trang nam',
                'image' => 'categories/men-fashion.jpg',
                'icon_image' => 'categories/icons/men-fashion.png',
                'description' => 'Thời trang dành cho nam giới',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 1,
            ],
            [
                'parent_id' => null,
                'name' => 'Thời trang nữ',
                'image' => 'categories/women-fashion.jpg',
                'icon_image' => 'categories/icons/women-fashion.png',
                'description' => 'Thời trang dành cho nữ giới',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 2,
            ],
            [
                'parent_id' => null,
                'name' => 'Phụ kiện',
                'image' => 'categories/accessories.jpg',
                'icon_image' => 'categories/icons/accessories.png',
                'description' => 'Phụ kiện thời trang cao cấp',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 3,
            ],
            [
                'parent_id' => null,
                'name' => 'Giày dép',
                'image' => 'categories/shoes.jpg',
                'icon_image' => 'categories/icons/shoes.png',
                'description' => 'Các loại giày dép nam nữ',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 4,
            ],

            [
                'parent_id' => 1,
                'name' => 'Áo sơ mi nam',
                'image' => 'categories/men-shirts.jpg',
                'icon_image' => 'categories/icons/men-shirts.png',
                'description' => 'Các loại áo sơ mi nam lịch lãm',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 5,
            ],
            [
                'parent_id' => 1,
                'name' => 'Quần jeans nam',
                'image' => 'categories/men-jeans.jpg',
                'icon_image' => 'categories/icons/men-jeans.png',
                'description' => 'Quần jeans nam phong cách',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 6,
            ],

            [
                'parent_id' => 2,
                'name' => 'Váy đầm',
                'image' => 'categories/women-dresses.jpg',
                'icon_image' => 'categories/icons/women-dresses.png',
                'description' => 'Các mẫu váy đầm sang trọng',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 7,
            ],
            [
                'parent_id' => 2,
                'name' => 'Quần jeans nữ',
                'image' => 'categories/women-jeans.jpg',
                'icon_image' => 'categories/icons/women-jeans.png',
                'description' => 'Quần jeans nữ trẻ trung',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 8,
            ],

            [
                'parent_id' => 3,
                'name' => 'Túi xách',
                'image' => 'categories/bags.jpg',
                'icon_image' => 'categories/icons/bags.png',
                'description' => 'Túi xách thời trang',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 9,
            ],
            [
                'parent_id' => 3,
                'name' => 'Kính mát',
                'image' => 'categories/sunglasses.jpg',
                'icon_image' => 'categories/icons/sunglasses.png',
                'description' => 'Kính mát cao cấp',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 10,
            ],

            [
                'parent_id' => 4,
                'name' => 'Giày thể thao',
                'image' => 'categories/sneakers.jpg',
                'icon_image' => 'categories/icons/sneakers.png',
                'description' => 'Giày thể thao nam nữ',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 11,
            ],
            [
                'parent_id' => 4,
                'name' => 'Dép sandal',
                'image' => 'categories/sandals.jpg',
                'icon_image' => 'categories/icons/sandals.png',
                'description' => 'Dép sandal phong cách',
                'status' => BaseStatus::PUBLISHED->value,
                'order' => 12,
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
