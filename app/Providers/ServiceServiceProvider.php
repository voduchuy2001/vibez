<?php

namespace App\Providers;

use App\Services\CategoryService;
use App\Services\Interfaces\CategoryServiceInterface;
use Illuminate\Support\ServiceProvider;

class ServiceServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(CategoryServiceInterface::class, CategoryService::class);
    }
}
