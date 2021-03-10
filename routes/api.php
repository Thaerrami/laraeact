<?php

use App\Product;
use App\User;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hello',function(){
    return response()->json(User::all());
});


Route::get('product/{id}', 'ProductController@showProduct');

Route::post('likeproduct/{id}', 'ProductController@likeProduct');
Route::post('dislikeproduct/{id}', 'ProductController@dislikeProduct');


Route::get('/prodcuts','ProductController@getAllProducts');

Route::any('/delete/{id}','ProductController@deleteProduct');


Route::any('/update/{id}','ProductController@updateProduct');



Route::middleware('auth')->group(function () {


    Route::any('udtprd/{id}', function (Request $request,$id) {
        $prod=Product::find($id);
        $prod->update([
            
        ]);
    });
    
});


