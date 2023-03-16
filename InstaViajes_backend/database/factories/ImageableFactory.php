<?php

namespace Database\Factories;

use App\Models\Image;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ImageableFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        if ($this->faker->boolean()) {
            $p_id = Post::all()->random()->id;
            $p_type = "Post";
        } else {
            $p_id = User::all()->random()->id;
            $p_type = "User";
        }
        return [
            "image_id" => Image::all()->random()->id,
            "parentable_id" => $p_id,
            "parentable_type" => $p_type,
        ];
    }
}
