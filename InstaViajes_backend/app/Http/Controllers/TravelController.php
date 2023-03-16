<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use Illuminate\Http\Request;

class TravelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $travel = Travel::all();
        $travel->where("user_id", '=', request('id'));

        return response()->json(['data' => $travel]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Travel $travel)
    {
        $travel = Travel::find($travel);

        return response()->json(['data' => $travel]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Travel $travel)
    {
        $travelDestiny = $travel->destiny;
        $travelDescription = $travel->description;
        $travelBudget = $travel->budget;
        $travelState = $travel->travelStates->name;
        $travelFriends = $travel->user->friendshis;

        $travel = [
            'name' => $travel->name,
            'date' => $travel->start_date,
            'dateEnd' => $travel->end_date,
            'origin' = $travel->origin,
            'destination' = $travel->destiny,
            'description' = $travel->description,
            'budget' = $travelBudget,
            'estado' = $travelState,
            'friendsOnTrip' = [
                'id' = $travel
            ]
        ]

        $json = json_encode($travel);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Travel $travel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Travel $travel)
    {
        //
    }
}
