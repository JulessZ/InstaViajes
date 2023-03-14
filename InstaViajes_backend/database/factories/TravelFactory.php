<?php

namespace Database\Factories;

use App\Models\TravelStates;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Travel>
 */
class TravelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::all()->random()->id,
            'travel_states_id' => TravelStates::all()->random()->id,
            'name' => $this->faker->word(),
            'description' => $this->faker->paragraph(),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'origin' => $this->faker->word(),
            'destiny' => $this->faker->word(),
            'budget' => $this->faker->randomFloat(2, 0, 10000),
        ];
    }
}
