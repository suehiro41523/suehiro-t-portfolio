<?php

use App\Http\Controllers\api\V1\WorkController;
use App\Http\Controllers\api\V1\ImageController;
use App\Http\Controllers\api\V1\DtpController;
use App\Http\Controllers\api\V1\BlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request)
{
    return $request->user();
});

Route::group(['prefix' => 'v1'], function ()
{
    Route::apiResource('works', WorkController::class);
    Route::apiResource('images', ImageController::class);
    Route::apiResource('dtps', DtpController::class);
    Route::apiResource('blogs', BlogController::class);
})->middleware('cors');
