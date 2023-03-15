<?php

namespace Database\Seeders;

use App\Models\Travel;
use App\Models\TravelTravelUsers;
use App\Models\TravelUsers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TravelTravelUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $travels = Travel::all();
        foreach ($travels as $travel) {
            TravelTravelUsers::create([
                "travel_id" => $travel->id,
                "travel_user_id" => TravelUsers::find($travel->user->id)->id,
            ]);
        }
    }
}
