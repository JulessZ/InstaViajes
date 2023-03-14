<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Friendship extends Model
{
    use HasFactory;


    // RELATIONSHIPS

    /**
     * Get the sender user of the Friendship's invitation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function senderUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'sender_user_id');
    }

    /**
     * Get the receptor user of the Friendship's invitation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function receptorUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'receptor_user_id');
    }

    // RELATIONSHIPS END
}
