<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use App\Models\Place;
use App\Models\Travel;

class ActivityController extends Controller
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
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $actividadPlaceID = Place::All()->where('name', '=', $request->name)->first()->id;
        
        $actividad  = new Activity();
        
        $actividad -> travel_id = $request->travel_id;
        $actividad -> user_id = $request->user_id;
        $actividad -> place_id = $actividadPlaceID;
        $actividad -> description = $request->description;
        $actividad -> start_date = $request->start_date;
        $actividad -> start_hour = $request->start_hour;
        $actividad -> duration = $request->duration;
        $actividad -> price = $request->price;

        $actividad->save();

        return redirect('../');

    }

    /**
     * Display the specified resource.
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Activity $activity)
    {
        
        $yourActivity = $activity->toArray();
            
        $activityId = $activity->id;
        $activityName = Place::All()->where('id', '=', $activityId)->first()->name;
        $activityDescription = $activity->description;
        $activityStartDate = $activity->start_date;
        $activityStartHour = $activity->start_hour;
        $activityDuration = $activity->duration;
        $activityPrice = $activity->price;

            return [
                'id' => $activityId,
                'place_name' => $activityName,
                'description' => $activityDescription,
                'start_date' => $activityStartDate,
                'start_hour' => $activityStartHour,
                'duration' => $activityDuration,
                'price' => $activityPrice,
            ];
        }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Activity $activity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Activity $activity)
    {
        //
    }
}
