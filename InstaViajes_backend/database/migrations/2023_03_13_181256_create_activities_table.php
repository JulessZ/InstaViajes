<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("travel_id");
            $table->foreign("travel_id")->references("id")->on("travels")->onDelete("cascade");
            $table->unsignedBigInteger("user_id");
            $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
            $table->unsignedBigInteger("place_id")->nullable();
            $table->foreign("place_id")->references("id")->on("places")->onDelete("null");
            // La foreign key anterior cumple la misma función: $table->string("name");
            $table->date("start_date");
            $table->time("start_hour");
            $table->integer("duration");
            $table->string("description");
            $table->double("price", 9, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
