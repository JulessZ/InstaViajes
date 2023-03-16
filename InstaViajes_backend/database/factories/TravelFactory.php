<?php

namespace Database\Factories;

use App\Models\TravelStates;
use App\Models\TravelTravelUsers;
use App\Models\User;
use App\Models\TravelUsers;
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
        $user_id = User::all()->random()->id;

        TravelUsers::create([
            'user_id' => $user_id,
        ]);

        return [
            'user_id' => $user_id,
            'travel_states_id' => TravelStates::all()->random()->id,
            'name' => $this->faker->word(),
            'description' => $this->faker->paragraph(10),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'origin' => $this->faker->word(),
            'destiny' => $this->faker->word(),
            'budget' => $this->faker->randomFloat(2, 0, 10000),
        ];
    }
}
