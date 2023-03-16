<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use OpenApi\Annotations as OA;


/**
 * @OA\Schema(
 *     schema="User",
 *     required={"name","email"},
 *     @OA\Property(property="name", type="string", example="John Doe"),
 *     @OA\Property(property="email", type="string", example="johndoe@example.com"),
 * )
 *
 * @OA\Schema(
 *     schema="ValidationError",
 *     @OA\Property(property="name", type="string", example="The name field is required."),
 *     @OA\Property(property="email", type="string", example="The email field is required."),
 *     @OA\Property(property="password", type="string", example="The password field is required."),
 * )
 *
 * @OA\Info(
 *             title="API for Authentication Controller", 
 *             version="1.0",
 *             description="Descripcion"
 * )
 *
 */



class AuthController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/register",
     *     tags={"Authentication"},
     *     summary="Register a new user",
     *     description="Register a new user with a name, email, and password",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name","email","password"},
     *             @OA\Property(property="name", type="string", example="John Doe", description="The name of the user"),
     *             @OA\Property(property="email", type="string", example="johndoe@example.com", description="The email of the user"),
     *             @OA\Property(property="password", type="string", example="password123", description="The password of the user"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="User registered successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="data", type="object", ref="#/components/schemas/User"),
     *             @OA\Property(property="access_token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."),
     *             @OA\Property(property="token_type", type="string", example="bearer"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response="422",
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *             @OA\Property(property="errors", type="object", ref="#/components/schemas/ValidationError"),
     *         ),
     *     ),
     * )
     */

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth')->plainTextToken;

        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'bearer']);
    }

    /**
     * Authenticate a user and return an access token.
     *
     * @OA\Post(
     *     path="/api/login",
     *     summary="Authenticate a user",
     *     description="Authenticate a user and return an access token.",
     *     operationId="auth.login",
     *     tags={"Authentication"},
     *     @OA\RequestBody(
     *         required=true,
     *         description="User credentials",
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="string", example="johndoe"),
     *             @OA\Property(property="password", type="string", example="password"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Welcome"),
     *             @OA\Property(property="access_token", type="string", example="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),
     *             @OA\Property(property="token_type", type="string", example="bearer"),
     *             @OA\Property(property="user", type="object", ref="#/components/schemas/User"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthorized"),
     *         ),
     *     ),
     * )
     */

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only(['name', 'password']))) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = User::where('name', $request->name)->first();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Welcome', 'access_token' => $token, 'token_type' => 'bearer', 'user' => $user]);
    }

    /**
     * Remove the access token and logout the user.
     *
     * @OA\Delete(
     *     path="/api/logout",
     *     summary="Logout the user",
     *     description="Remove the access token and logout the user.",
     *     operationId="auth.logout",
     *     tags={"Authentication"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Successfully logged out"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated"),
     *         ),
     *     ),
     * )
     */

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Verify user authentication.
     *
     * @OA\Get(
     *     path="/api/verify",
     *     summary="Verify user authentication",
     *     description="Verify that the user is authenticated and return user information.",
     *     operationId="auth.verify",
     *     tags={"Authentication"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Authenticated"),
     *             @OA\Property(property="user", ref="#/components/schemas/User"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthorized"),
     *         ),
     *     ),
     * )
     */

    public function verify()
    {
        if (!Auth::check()) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = User::find(Auth::id());

        return response()->json([
            'message' => 'Authenticated',
            'user' => $user
        ]);
    }
}
