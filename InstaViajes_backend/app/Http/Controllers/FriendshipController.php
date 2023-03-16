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
     * @OA\Post(
     *     path="/friendship/add",
     *     tags={"Friendship"},
     *     summary="Crea una nueva solicitud de amistad",
     *     description="Crea un nuevo registro de amistad en la base de datos",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"userId", "userInvitedId"},
     *             @OA\Property(property="userId", type="integer", example="123", description="ID del usuario que envía la solicitud de amistad"),
     *             @OA\Property(property="userInvitedId", type="integer", example="456", description="ID del usuario que recibe la solicitud de amistad"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="La solicitud de amistad se ha enviado con éxito"),
     *         ),
     *     ),
     *     security={
     *         {"apiKeyAuth": {}}
     *     }
     * )
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
     * @OA\Put(
     *     path="/friendship/accept",
     *     tags={"Friendship"},
     *     summary="Update the state of a friendship",
     *     description="Update the state of a friendship to `true`",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"friendshipId"},
     *             @OA\Property(property="friendshipId", type="integer", example=1, description="The ID of the friendship to update"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="Friendship state updated successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Friendship state updated successfully"),
     *             @OA\Property(property="friendship", type="object", ref="#/components/schemas/Friendship"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response="404",
     *         description="Friendship not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Friendship not found"),
     *         ),
     *     ),
     * )
     *
     * @OA\Schema(
     *     schema="Friendship",
     *     @OA\Property(property="id", type="integer", example=1),
     *     @OA\Property(property="sender_user_id", type="integer", example=1),
     *     @OA\Property(property="receptor_user_id", type="integer", example=2),
     *     @OA\Property(property="state", type="boolean", example=true),
     *     @OA\Property(property="created_at", type="string", format="date-time", example="2023-03-16 10:00:00"),
     *     @OA\Property(property="updated_at", type="string", format="date-time", example="2023-03-16 11:00:00"),
     * )
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
     * @OA\Delete(
     *     path="/api/friendships/{id}",
     *     summary="Delete a friendship",
     *     description="Delete a friendship by ID",
     *     operationId="deleteFriendship",
     *     tags={"Friendship"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the friendship to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Friendship deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Friendship not found"
     *     ),
     *     security={
     *         {"Bearer": {}}
     *     }
     * )
     */

    public function destroy(Request $request)
    {
        $friendshipId = $request->input('friendshipId'); // Get the friendship ID from the request data

        Friendship::find($friendshipId)->delete(); //;

    }
}
