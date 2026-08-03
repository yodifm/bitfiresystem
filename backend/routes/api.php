<?php

use App\Http\Controllers\Api\ContactMessageController;
use App\Http\Controllers\Api\ContentController;
use Illuminate\Support\Facades\Route;

Route::get('/services', [ContentController::class, 'services']);
Route::get('/product-categories', [ContentController::class, 'productCategories']);
Route::get('/brands', [ContentController::class, 'brands']);
Route::get('/gallery', [ContentController::class, 'gallery']);
Route::get('/stats', [ContentController::class, 'stats']);
Route::get('/value-props', [ContentController::class, 'valueProps']);
Route::get('/legal-documents', [ContentController::class, 'legalDocuments']);
Route::get('/catalogs', [ContentController::class, 'catalogs']);

Route::post('/contact-messages', [ContactMessageController::class, 'store']);
