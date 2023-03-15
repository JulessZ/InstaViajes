<?php

namespace Database\Seeders;

use App\Models\TravelStates;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TravelStateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TravelStates::create([
            'name' => 'started'
        ]);
        TravelStates::create([
            'name' => 'ended'
        ]);
        TravelStates::create([
            'name' => 'in progress'
        ]);
    }
}
