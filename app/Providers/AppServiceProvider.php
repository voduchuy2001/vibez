<?php

namespace App\Providers;

use App\Enums\Environment;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);

        Vite::prefetch(concurrency: 3);

        if (env(key: 'APP_ENV') === Environment::PRODUCTION->value) {
            URL::forceScheme(scheme:'https');
        }
    }
}
