<?php

use App\Http\Controllers\SteamController;

Route::get('/steam', [SteamController::class, 'getSteamData']);
