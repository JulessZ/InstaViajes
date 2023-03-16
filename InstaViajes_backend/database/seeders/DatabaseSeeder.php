<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Activity;
use App\Models\ActivityVotes;
use App\Models\Friendship;
use App\Models\Image;
use App\Models\Imageable;
use App\Models\Place;
use App\Models\Post;
use App\Models\Travel;
use App\Models\TravelTravelUsers;
use App\Models\TravelUsers;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Storage::deleteDirectory('public/images');
        Storage::makeDirectory('public/images');

        User::factory(50)->create();
        Friendship::factory(90)->create();
        $this->call(TravelStateSeeder::class);

        Travel::factory(50)->create();

        Post::factory(100)->create();
        $this->call(UserSeeder::class); // Creación de admin
        // TravelUsers::factory(100)->create();
        // $this->call(TravelUsersSeeder::class);
        Place::factory(100)->create();
        Activity::factory(50)->create();
        ActivityVotes::factory(100)->create();
        // TravelTravelUsers::factory(100)->create();
        $this->call(TravelTravelUsersSeeder::class);
        Image::factory(50)->create();
        $this->call(ImageableSeeder::class);
        // \App\Models\User::factory(10)->create();
    }
}
