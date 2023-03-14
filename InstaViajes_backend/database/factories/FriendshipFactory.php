<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Friendship>
 */
class FriendshipFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    // protected $model = Friendship::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $id1 = User::all()->random()->id;
        $id2 = User::all()->random()->id;
        while($id1 == $id2) {
            $id2 = User::all()->random()->id;
        }
        return [
            'sender_user_id' => $id1,
            'receptor_user_id' => $id2,
            'state' => $this->faker->boolean(),
        ];
    }
}
