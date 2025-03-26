<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\ReviewServiceInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ReviewController extends Controller
{
    protected ReviewServiceInterface $reviewService;

    public function __construct(ReviewServiceInterface $reviewService)
    {
        $this->reviewService = $reviewService;
    }

    public function index(): Response
    {
        $reviews = $this->reviewService->index();

        return Inertia::render('admin/review/index', [
            'reviews' => $reviews
        ]);
    }

    public function destroy(string|int $id): RedirectResponse
    {
        $this->reviewService->destroy($id);

        return Redirect::back()->with([
           'type' => 'success',
           'message' => trans('Delete review success'),
        ]);
    }
}
