<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    // RELATIONSHIPS

    /**
     * Get all of the travels for the User
     * An user can have many travels.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function travels(): HasMany
    {
        return $this->hasMany(Travel::class);
    }

    /**
     * Get all of the friendships for the User
     * An user can have many friendships.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function friendships(): HasMany
    {
        $amigos = $this->hasMany(Friendship::class, "sender_user_id")->where("state", "=", "True");
        $amigos2 = $this->hasMany(Friendship::class, "receptor_user_id")->where("state", "=", "True");
        $amigos_totales = $amigos->union($amigos2);
        return $amigos_totales;
    }
    
    /**
     * Get all of the travels interactions for the User
     * An user can have many travels where he's been invited.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function travelUsers(): HasMany
    {
        return $this->hasMany(TravelUsers::class);
    }

    /**
     * Get all of the activities for the User
     * An user can have many activities.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class);
    }

    /**
     * Get all of the activity votes for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function activityVotes(): HasMany
    {
        return $this->hasMany(ActivityVotes::class);
    }

    /**
     * Get all of the posts for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    /**
     * Get all of the images for the post.
     */
    public function images(): MorphToMany
    {
        
        return $this->morphToMany(Image::class, 'imageable');
    }

    // RELATIONSHIPS END


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
