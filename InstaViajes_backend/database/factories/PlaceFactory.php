<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Place>
 */
class PlaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => $this->faker->randomElement(['Bar', 'Restaurante', 'Museo', 'Naturaleza', 'Playa', 'Parque', 'Plaza', 'Centro comercial', 'Centro recreativo', 'Recinto ferial']),
            'name' => $this->faker->word(),
        ];
    }
}
