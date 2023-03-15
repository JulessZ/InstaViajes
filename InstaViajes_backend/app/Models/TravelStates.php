<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TravelStates extends Model
{
    use HasFactory;


    // RELATIONSHIPS
    
    /**
     * Get all of the travels for the TravelStates
     * Travel states can be in any travel.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function travels(): HasMany
    {
        return $this->hasMany(Travel::class);
    }

    // RELATIONSHIPS END
}
