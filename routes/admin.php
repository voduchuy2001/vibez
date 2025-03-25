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
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('admin.profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('admin.profile.destroy');

    Route::get('/setting', [SettingController::class, 'index'])->name('admin.setting.index');

    Route::get('/category', [CategoryController::class, 'index'])->name('admin.category.index');
    Route::delete('/category/{id}', [CategoryController::class, 'destroy'])->name('admin.category.destroy');

    Route::get('/product', [ProductController::class, 'index'])->name('admin.product.index');

    Route::get('/review', [ReviewController::class, 'index'])->name('admin.review.index');

    Route::get('/post', [PostController::class, 'index'])->name('admin.post.index');

    Route::get('/user', [UserController::class, 'index'])->name('admin.user.index');

    Route::get('/role', [RoleController::class, 'index'])->name('admin.role.index');
});
