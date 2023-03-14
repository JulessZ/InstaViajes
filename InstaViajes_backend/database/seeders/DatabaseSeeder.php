<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Friendship;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Friendship::factory(10)->create();
        $this->call(TravelStateSeeder::class);
        Travel::factory(10)->create();

        // \App\Models\User::factory(10)->create();
    }
}
