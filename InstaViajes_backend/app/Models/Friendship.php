<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Friendship extends Model
{
    use HasFactory;

    // RELATIONSHIPS END

    public function user() : BelongsTo { 
        return $this->belongsTo(User::class, 'id');
    }
}
