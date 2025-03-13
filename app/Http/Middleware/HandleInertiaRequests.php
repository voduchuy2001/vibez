<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
<<<<<<< Updated upstream
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
=======
     * The root template that is loaded on the first page visit.
>>>>>>> Stashed changes
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
<<<<<<< Updated upstream
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
=======
     * Determine the current asset version.
>>>>>>> Stashed changes
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
<<<<<<< Updated upstream
     * @see https://inertiajs.com/shared-data
     *
=======
>>>>>>> Stashed changes
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
<<<<<<< Updated upstream
             ...parent::share($request),
             'auth' => $request->user()
         ];
=======
            ...parent::share($request),
            'auth' => $request->user()
        ];
>>>>>>> Stashed changes
    }
}
