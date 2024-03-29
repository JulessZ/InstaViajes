<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Image extends Model
{
    use HasFactory;

    /**
     * Get all of the users that are assigned this image.
     */
    public function users(): MorphToMany
    {
        return $this->morphedByMany(User::class, 'imageable');
    }
 
    /**
     * Get all of the posts that are assigned this image.
     */
    public function posts(): MorphToMany
    {
        return $this->morphedByMany(Post::class, 'imageable');
    }
}
