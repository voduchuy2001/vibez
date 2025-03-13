<?php

namespace App\Providers;

<<<<<<< Updated upstream
use Illuminate\Support\Facades\URL;
=======
>>>>>>> Stashed changes
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
        Vite::prefetch(concurrency: 3);
<<<<<<< Updated upstream

        if (env(key: 'APP_ENV') !== 'local') {
            URL::forceScheme(scheme:'https');
        }
=======
>>>>>>> Stashed changes
    }
}
