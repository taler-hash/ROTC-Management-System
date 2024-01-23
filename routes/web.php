<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CadetController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::prefix('/api')->group(function () {

    Route::prefix('/cadet')->group(function () {
        Route::get('/', [CadetController::class, 'get']);
        Route::post('/store', [CadetController::class, 'store']);
    });
});

Route::get('{any?}', function () {
    return view('app');
})->where('any', '.*');




