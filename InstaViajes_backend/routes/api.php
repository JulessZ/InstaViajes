<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TravelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('test', function () {
    return 'Prueba de endpoint llamado test';
});


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Viajes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);
    // Todos los viajes
    Route::get('/viajes', 'App\Http\Controllers\TravelController@index');
    // Datos de un viaje
    Route::get('/viajes/{travel}', 'App\Http\Controllers\TravelController@show');
    Route::post('/verify', [AuthController::class, 'verify']);
    //User and friends
    Route::get('/profile/users', 'App\Http\Controllers\UserController@index');
    Route::get('/profile/{id}', 'App\Http\Controllers\UserController@friends');
    //Manager friends requests
    Route::put('/friendship/accept', 'App\Http\Controllers\FriendshipController@update');
    Route::delete('/friendship/delete', 'App\Http\Controllers\FriendshipController@destroy');
    Route::post('/friendship/add', 'App\Http\Controllers\FriendshipController@create');
    // Viajes de un usuario
    Route::get('/usuario/{user}/viajes', 'App\Http\Controllers\UserController@indexTravels');
    // Viajes de los amigos de un usuario
    Route::get('/usuario/{user}/friends/viajes', 'App\Http\Controllers\UserController@indexFriendTravels');
    // datos del perfil de usuario
    Route::post('/perfil/{user}/update', 'App\Http\Controllers\UserController@update');
    
    Route::post('/verify', [AuthController::class, 'verify']);
});




// Edición de viaje

Route::get('/misviajes/{travel}/editar', 'App\Http\Controllers\TravelController@edit');

// Edicion de actividad
Route::get('/viaje/{activity}/editar', 'App\Http\Controllers\ActivityController@edit');

// Creacion de actividad
Route::post('/viaje/crearactividad', 'App\Http\Controllers\ActivityController@store');