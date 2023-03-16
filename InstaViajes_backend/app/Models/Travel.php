<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Travel extends Model
{
    use HasFactory;
    protected $table = 'travels';

    // RELATIONSHIPS

    /**
     * Get the user that owns the Travel
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all of the activities for the Travel
     * A travel can have many activities.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class);
    }

    /**
     * Get all of the posts for the Travel
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    /**
     * Get the states that the Travel have.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function travelStates(): BelongsTo
    {
        return $this->belongsTo(TravelStates::class);
    }

    //RELACIÓN PIVOTE CON TRAVEL_USERS

    /**
     * The travel users that belong to the Travel
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function travelUsers(): BelongsToMany
    {
        return $this->belongsToMany(TravelUsers::class);
    }

    /**
     * Get all of the images for the travel.
     */
    public function images(): MorphToMany
    {
        return $this->morphToMany(Image::class, 'imageable');
    }


    // RELATIONSHIPS END
}
