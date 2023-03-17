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
        Schema::create('travel_travel_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("travel_id");
            $table->foreign("travel_id")->references("id")->on("travels")->onDelete("cascade");
            $table->unsignedBigInteger("travel_user_id");
            $table->foreign("travel_user_id")->references("id")->on("travel_users")->onDelete("cascade");
            //$table->primary(['travel_id', 'travel_user_id']);
            $table->unique(['travel_id', 'travel_user_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('travel_travel_user');
    }
};
