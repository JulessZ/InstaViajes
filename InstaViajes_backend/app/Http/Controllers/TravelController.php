<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Imageable;
use App\Models\Travel;
use App\Models\TravelTravelUsers;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TravelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $travels = Travel::all()->toArray();
        $newTravels = array_map(function ($travel) {
            // Calcula el número de días
            $startDate = Carbon::parse($travel['start_date']);
            $endDate = Carbon::parse($travel['end_date']);
            $days = $endDate->diffInDays($startDate);
            // Número de participantes
            $participantes = TravelTravelUsers::all()->where('travel_id', "=", $travel['id'])->count();
            // Nombre de usuario creador
            $userName = User::all()->where('id', "=", $travel['user_id'])->value('name');
            // Imagen viaje
            $fotoTravel = Imageable::all()->where('imageable_id', '=', $travel['id'])->where('imageable_type', '=', 'Travel')->value('image_id');
            if ($fotoTravel) { // Evita errores
                $fotoTravel = Image::find($fotoTravel)->value("name");
            }
            // Imagen user
            $fotoUser = Imageable::all()->where('imageable_id', '=', $travel['user_id'])->where('imageable_type', '=', 'User')->value('image_id');
            if ($fotoUser) { // Evita errores
                $fotoUser = Image::find($fotoUser)->value("name");
            }

            return [
                'id' => $travel['id'],
                'user_id' => $travel['user_id'],
                'username' => $userName,
                'image' => asset('images/' . $fotoTravel),
                'imageuser' => asset('images/' . $fotoUser),
                'travel_state_id' => $travel['travel_states_id'],
                'description' => $travel['description'],
                'start_date' => $travel['start_date'],
                'end_date' => $travel['end_date'],
                'days' => $days,
                'location' => $travel['origin'],
                'destiny' => $travel['destiny'],
                'budget' => $travel['budget'],
                'created_at' => $travel['created_at'],
                'updated_at' => $travel['updated_at'],
                'NumUsers' => $participantes,
            ];
        }, $travels);

        // Imprimir los nuevos registros con los campos renombrados
   
        return response()->json($newTravels);
        // return response()->json(['data' => $travel]);
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
