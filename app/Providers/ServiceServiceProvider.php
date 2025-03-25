<?php

namespace App\Providers;

use App\Services\CategoryService;
use App\Services\Interfaces\CategoryServiceInterface;
use App\Services\Interfaces\ProductServiceInterface;
use App\Services\ProductService;
use Illuminate\Support\ServiceProvider;

class ServiceServiceProvider extends ServiceProvider
{
    protected array $services = [
       CategoryServiceInterface::class => CategoryService::class,
       ProductServiceInterface::class => ProductService::class,
    ];

    public function register(): void
    {
        foreach ($this->services as $key => $service) {
            $this->app->bind($key, $service);
        }
    }
}
