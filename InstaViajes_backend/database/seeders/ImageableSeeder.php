<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Imageable;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImageableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $images = Image::all();
        foreach ($images as $image) {
            if ((bool) mt_rand(0, 1)) {
                $p_id = Post::all()->random()->id;
                $p_type = "Post";
            } else {
                $p_id = User::all()->random()->id;
                $p_type = "User";
            }
            Imageable::create([
                    "image_id" => $image->id,
                    "parentable_id" => $p_id,
                    "parentable_type" => $p_type,
            ]);
        }
    }
}
