<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Imageable;
use App\Models\Post;
use App\Models\Travel;
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
            $num_aleatorio = rand(0, 2);
            switch ($num_aleatorio) {
            case 0:
                $p_id = Post::all()->random()->id;
                $p_type = "Post";
                break;
            case 1:
                $p_id = User::all()->random()->id;
                $p_type = "User";
                break;
            case 2:
                $p_id = Travel::all()->random()->id;
                $p_type = "Travel";
                break;
            }

            Imageable::create([
                    "image_id" => $image->id,
                    "imageable_id" => $p_id,
                    "imageable_type" => $p_type,
            ]);
        }
    }
}
