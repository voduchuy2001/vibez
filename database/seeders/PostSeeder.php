<?php

namespace Database\Seeders;

use App\Enums\BaseStatus;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $now = Carbon::now();
        $authors = User::pluck('id')->toArray();
        $statuses = [BaseStatus::PUBLISHED->value, BaseStatus::DRAFT->value, BaseStatus::PENDING->value];

        $posts = [];
        for ($i = 0; $i < 20; $i++) {
            $posts[] = [
                'author_id'   => $authors[array_rand($authors)],
                'name'        => fake()->sentence(6),
                'description' => fake()->text(100),
                'content'     => fake()->paragraphs(3, true),
                'status'      => $statuses[array_rand($statuses)],
                'image'       => fake()->imageUrl(640, 480, 'business', true),
                'views'       => rand(0, 500),
                'is_featured' => fake()->boolean(20),
                'created_at'  => $now,
                'updated_at'  => $now,
            ];
        }

        Post::insert($posts);
    }
}
