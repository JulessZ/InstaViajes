<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TravelUsers extends Model
{
    use HasFactory;


    // RELATIONSHIPS

    /**
     * Get the user that has been invited to the TravelUsers
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    //RELACIÓN PIVOTE CON TRAVEL_USERS

    /**
     * The travels that belong to the TravelUsers
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function travels(): BelongsToMany
    {
        return $this->belongsToMany(Travel::class);
    }

    // RELATIONSHIPS END
}