<?php

namespace App\Providers;

use App\Services\CategoryService;
use App\Services\Interfaces\CategoryServiceInterface;
use App\Services\Interfaces\PostServiceInterface;
use App\Services\Interfaces\ProductServiceInterface;
use App\Services\Interfaces\ReviewServiceInterface;
use App\Services\Interfaces\RoleServiceInterface;
use App\Services\Interfaces\UserServiceInterface;
use App\Services\PostService;
use App\Services\ProductService;
use App\Services\ReviewService;
use App\Services\RoleService;
use App\Services\UserService;
use Illuminate\Support\ServiceProvider;

class ServiceServiceProvider extends ServiceProvider
{
    protected array $services = [
       CategoryServiceInterface::class => CategoryService::class,
       ProductServiceInterface::class => ProductService::class,
       ReviewServiceInterface::class => ReviewService::class,
       PostServiceInterface::class => PostService::class,
       RoleServiceInterface::class => RoleService::class,
       UserServiceInterface::class => UserService::class,
    ];

    public function register(): void
    {
        foreach ($this->services as $key => $service) {
            $this->app->bind($key, $service);
        }
    }
}
