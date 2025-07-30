<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoCallController;

Route::get('/video/create-session', [VideoCallController::class, 'createSession']);
Route::post('/video/generate-token', [VideoCallController::class, 'generateToken']);