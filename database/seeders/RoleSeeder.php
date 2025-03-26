<?php

namespace Database\Seeders;

use App\Models\Role;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $now = Carbon::now();
        $guards = ['web', 'api'];

        $roles = [];
        for ($i = 0; $i < 20; $i++) {
            $roles[] = [
                'name' => strtoupper(Str::random(10)),
                'guard_name' => $guards[array_rand($guards)],
                'description' => fake()->name(),
                'created_at' => $now,
                'updated_at' => $now
            ];
        }

        Role::insert($roles);
    }
}
