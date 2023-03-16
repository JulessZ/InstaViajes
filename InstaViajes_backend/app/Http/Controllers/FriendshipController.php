<?php

namespace App\Http\Controllers;

use App\Models\Friendship;
use Illuminate\Http\Request;

class FriendshipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $userId = $request->input('userId'); // Get the user ID from the request data
        $userInvitedId = $request->input('userInvitedId'); // Get the user ID from the request data

        // Crea un nuevo registro de amistad
        $friendship = new Friendship();
        $friendship->sender_user_id = $userId;
        $friendship->receptor_user_id = $userInvitedId;
        $friendship->save();

        // Retorna una respuesta con código HTTP 200
        return response()->json([
            'message' => 'La solicitud de amistad se ha enviado con éxito'
        ], 200);
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
    public function show(Friendship $friendship)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Friendship $friendship)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $friendshipId = $request->input('friendshipId'); // Get the friendship ID from the request data

        $friendship = Friendship::findOrFail($friendshipId); // Find the friendship model by ID

        $friendship->state = true; // Update the state field to true

        $friendship->save(); // Save the updated friendship model

        return response()->json([
            'message' => 'Friendship state updated successfully',
            'friendship' => $friendship
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $friendshipId = $request->input('friendshipId'); // Get the friendship ID from the request data

        Friendship::find($friendshipId)->delete(); //;

    }
}
