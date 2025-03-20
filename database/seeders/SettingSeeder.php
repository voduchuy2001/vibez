<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            'hotline' => '0962785101',
            'name' => 'Dolphin Clothing',
            'address' => 'Ninh Kieu, Can Tho',
            'email' => 'voduchuy2001@gmail.com',
            'facebook' => 'https://www.facebook.com/VDH.me',
            'instagram' => 'https://www.instagram.com/vd.huy',
            'tiktok' => 'https://www.tiktok.com/@vdhme'
        ];

        Setting::create([
            'key' => 'general_information',
            'value' => json_encode($settings)
        ]);
    }
}
