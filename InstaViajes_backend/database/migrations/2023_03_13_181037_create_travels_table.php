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
        Schema::create('travels', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");
            $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
            $table->unsignedBigInteger("travel_states_id");
            $table->foreign("travel_states_id")->references("id")->on("travel_states");
            $table->string("name");
            $table->string("description")->nullable();
            $table->date("start_date");
            $table->date("end_date");
            $table->string("origin");
            $table->string("destiny");
            $table->string("budget");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('travels');
    }
};
