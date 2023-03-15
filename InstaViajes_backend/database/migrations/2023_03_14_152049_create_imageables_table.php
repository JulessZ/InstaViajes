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
        Schema::create('imageables', function (Blueprint $table) {
            $table->unsignedBigInteger("image_id");
            $table->foreign("image_id")->references("id")->on("images")->onDelete("cascade");
            $table->unsignedBigInteger("imageable_id");
            $table->string("imageable_type");
            $table->primary(["image_id"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imageables');
    }
};
