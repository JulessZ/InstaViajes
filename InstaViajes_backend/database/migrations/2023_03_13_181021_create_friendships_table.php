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
        Schema::create('friendships', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("sender_user_id");
            $table->foreign("sender_user_id")->references("id")->on("users")->onDelete("cascade");
            $table->unsignedBigInteger("receptor_user_id");
            $table->foreign("receptor_user_id")->references("id")->on("users")->onDelete("cascade");
            $table->boolean('state')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('friendships');
    }
};
