<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\VideoCallController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::middleware(['modify'])->group(function () {
//     Route::post('/api/endpoint', [ApiController::class, 'handleRequest']);
// });


Route::get('video/create-session', [VideoCallController::class, 'createSession']);
Route::post('video/generate-token', [VideoCallController::class, 'generateToken']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/user-list', function () {
    return Inertia::render('UserList');
})->middleware(['auth', 'verified'])->name('user-list');

Route::get('/multi-step-form', function () {
    return Inertia::render('MultiStepForm');
})->middleware(['auth', 'verified'])->name('multi-step-form');

Route::get('/test', function () {
    return Inertia::render('TestData');
})->middleware(['auth', 'verified'])->name('test');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/about-us', function () {
    return Inertia::render('public_pages/AboutUs');
})->name('about-us');

Route::get('/blog', function () {
    return Inertia::render('public_pages/Blog');
})->name('blog');
Route::get('/contact-us', function () {
    return Inertia::render('public_pages/ContactUs');
})->name('contact-us');

// -------------------------------------------------Auth Route---------------------------------------------

Route::get('get-all-user', [ProfileController::class, 'getAllUser'])->middleware(['auth', 'verified'])->name('get-all-user');

Route::post('add-new-user', [ProfileController::class, 'store'])->middleware(['auth', 'verified'])->name('add-new-user');



// // Common routes
// Route::get('/', function () {
//     return view('welcome');
// });

// // Admin routes
// Route::middleware(['auth', 'admin'])->group(function () {
//     Route::get('/admin', function () {
//         return view('admin');
//     });
// });

// // User routes
// Route::middleware(['auth', 'user'])->group(function () {
//     Route::get('/user', function () {
//         return view('user');
//     });
// });


