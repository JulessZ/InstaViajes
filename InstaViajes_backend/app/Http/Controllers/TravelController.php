<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityVotes;
use App\Models\Image;
use App\Models\Imageable;
use App\Models\Place;
use App\Models\Travel;
use App\Models\TravelStates;
use App\Models\TravelTravelUsers;
use App\Models\TravelUsers;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            // // Imagen viaje
            // $fotoTravel = Imageable::all()->where('imageable_id', '=', $travel['id'])->where('imageable_type', '=', 'Travel')->value('image_id');
            // if ($fotoTravel) { // Evita errores
            //     $fotoTravel = Image::find($fotoTravel)->value("name");
            // }
            // // Imagen user
            // $fotoUser = Imageable::all()->where('imageable_id', '=', $travel['user_id'])->where('imageable_type', '=', 'User')->value('image_id');
            // if ($fotoUser) { // Evita errores
            //     $fotoUser = Image::find($fotoUser)->value("name");
            // }
            // Imagen aleatoria
            $randomImage = DB::table('images')->inRandomOrder()->first();
            $randomImageName = ($randomImage) ? $randomImage->name : '';

            return [
                'id' => $travel['id'],
                'user_id' => $travel['user_id'],
                'username' => $userName,
                'image' => asset('api/images/' . $randomImageName),
                'imageuser' => asset('api/images/' . $randomImageName),
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
        $travelId = $request->id;
        $travelUserId = $request->user_id;
        $travel = Travel::create($request->all());
        $travelUser = TravelUsers::create(['user_id' => $travelUserId]);
        $travelTravelUser = TravelTravelUsers::create(['travel_id' => $travel->id, 'travel_user_id' => $travelUserId]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Travel $travel)
    {
        // Nombres de participantes
        $participantes = TravelTravelUsers::all()->where('travel_id', "=", $travel['id']);
        $nombresParticipantes = [];
        foreach ($participantes as $participante) {
            array_push($nombresParticipantes, TravelUsers::find($participante->travel_user_id)->user->name);
        }

        $activities = DB::table("activities")->where('travel_id', '=', $travel['id'])->orderBy("start_date")->get()->toArray();
        $acti = [];
        foreach ($activities as $activity) {
            $activiti = [
                "id" => $activity->id,
                "title" => Place::all()->find($activity->place_id)->name,
                "budget" => $activity->price,
                "type" => Place::all()->find($activity->place_id)->type,
                "votes" => ActivityVotes::all()->where('activity_id', '=', $activity->id)->count(),
                "image" => null,
                "description" => $activity->description,
                "duration" => $activity->duration,
            ];
            array_push($acti, $activiti);
        }


        // Imprimir los campos renombrados
        return response()->json([
            "title" => $travel['name'],
            "participants" => $nombresParticipantes,
            "state" => TravelStates::find($travel['travel_states_id'])->name,
            "budget" => $travel['budget'],
            "days" => $acti
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Travel $travel)
    {
        $friends = [];
        $friendsValueNames = ['id', 'name', 'mail', 'image'];
        foreach ($travel->user->friendships as $friend) {
            return $friend->user;
            $auxFriend = [
                'id' => $friend->user->id,
                'name' => $friend->user->name,
                'mail' => $friend->user->mail,
                'image' => $friend->user->images
            ];
            array_push($friends, $auxFriend);
        }

        $jsonObject = [

            'trip' => [
                'name' => $travel->name,
                'date' => $travel->start_date,
                'dateEnd' => $travel->end_date,
                'origin' => $travel->origin,
                'destination' => $travel->destiny,
                'description' => $travel->description,
                'budget' => $travel->budget,
                'estado' => $travel->state,
                'friendsOnTrip' => [
                    'id' => $travel->id,
                    'image' => $travel->images
                ]
            ],

            'friends' => $auxFriend
        ];
        return response()->json($jsonObject);
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
