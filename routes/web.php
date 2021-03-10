<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/products', 'ProductController@showAllProducts')->name('products');

Route::post('product/{id}', 'ProductController@showProduct');


Route::middleware('auth')->group(function () {
    Route::post('/addproduct', 'ProductController@addProdut')->name('addproduct');
    Route::get('/addproduct', 'ProductController@addProdutview')->name('addproduct');
    
    Route::get('/edit',function(){
        return view('editview');
    });
});

Route::get('/hello',function(){
    return response()->json('hello');
});

Route::get('/product/{id}','ProductController@getSingleProduct');
