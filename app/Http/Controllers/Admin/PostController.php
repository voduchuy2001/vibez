<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\PostServiceInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    protected PostServiceInterface $postService;

    public function __construct(PostServiceInterface $postService)
    {
        $this->postService = $postService;
    }

    public function index(): Response
    {
        $posts = $this->postService->index();

        return Inertia::render('admin/post/index', [
            'posts' => $posts
        ]);
    }

    public function destroy(string|int $id): RedirectResponse
    {
        $this->postService->destroy($id);

        return Redirect::back()->with([
           'type' => 'success',
           'message' => trans('Delete product success'),
        ]);
    }
}
