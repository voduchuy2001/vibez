<?php

namespace Database\Seeders;

use App\Enums\UserStatus;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        $admin = [
            'name' => 'Vo Duc Huy',
            'email' => 'admin@gmail.com',
            'email_verified_at' => $now,
            'password' => Hash::make('admin123'),
            'super_user' => true,
            'avatar' => '',
            'status' => UserStatus::ACTIVE->value,
        ];

        User::create($admin);
    }
}
