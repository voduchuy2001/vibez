<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('permission:dashboard.view');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('admin.profile.edit')->middleware('permission:profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('admin.profile.update')->middleware('permission:profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('admin.profile.destroy')->middleware('permission:profile.destroy');

    Route::get('/settings', [SettingController::class, 'index'])->name('admin.setting.index')->middleware('permission:setting.index');

    Route::get('/categories', [CategoryController::class, 'index'])->name('admin.category.index')->middleware('permission:category.index');
    Route::delete('/category/{id}', [CategoryController::class, 'destroy'])->name('admin.category.destroy')->middleware('permission:category.destroy');
    Route::get('/create-category', [CategoryController::class, 'create'])->name('admin.category.create')->middleware('permission:category.create');
    Route::post('/category', [CategoryController::class, 'store'])->name('admin.category.store')->middleware('permission:category.store');
    Route::get('/edit-category/{id}', [CategoryController::class, 'edit'])->name('admin.category.edit')->middleware('permission:category.edit');
    Route::put('/category', [CategoryController::class, 'update'])->name('admin.category.update')->middleware('permission:category.update');

    Route::get('/products', [ProductController::class, 'index'])->name('admin.product.index')->middleware('permission:product.index');
    Route::delete('/product/{id}', [ProductController::class, 'destroy'])->name('admin.product.destroy')->middleware('permission:product.destroy');

    Route::get('/reviews', [ReviewController::class, 'index'])->name('admin.review.index')->middleware('permission:review.index');
    Route::delete('/review/{id}', [ReviewController::class, 'destroy'])->name('admin.review.destroy')->middleware('permission:review.destroy');

    Route::get('/posts', [PostController::class, 'index'])->name('admin.post.index')->middleware('permission:post.index');
    Route::delete('/post/{id}', [PostController::class, 'destroy'])->name('admin.post.destroy')->middleware('permission:post.destroy');

    Route::get('/users', [UserController::class, 'index'])->name('admin.user.index')->middleware('permission:user.index');
    Route::delete('/user/{id}', [UserController::class, 'destroy'])->name('admin.user.destroy')->middleware('permission:user.destroy');

    Route::get('/roles', [RoleController::class, 'index'])->name('admin.role.index')->middleware('permission:role.index');
    Route::delete('/role/{id}', [RoleController::class, 'destroy'])->name('admin.role.destroy')->middleware('permission:role.destroy');

});
