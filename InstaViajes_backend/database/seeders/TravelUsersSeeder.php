<?php

namespace Database\Seeders;

use App\Models\Travel;
use App\Models\TravelUsers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TravelUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $travels = Travel::all();
        foreach ($travels as $travel) {
            TravelUsers::create([
                'user_id' => $travel->user->id,
            ]);
        }
    }
}
