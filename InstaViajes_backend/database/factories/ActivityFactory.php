<?php

namespace Database\Factories;

use App\Models\Place;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'travel_id' => Travel::all()->random()->id,
            'user_id' => User::all()->random()->id,
            'place_id' => Place::all()->random()->id,
            'start_date' => $this->faker->date(),
            'start_hour' => $this->faker->time(),
            'duration' => $this->faker->numberBetween(0, 60),
            'description' => $this->faker->sentence(),
            'price' => $this->faker->randomFloat(2, 0, 10000),
        ];
    }
}
