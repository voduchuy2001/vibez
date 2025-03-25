<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\QueryParamsRequest;
use App\Services\Interfaces\CategoryServiceInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    protected CategoryServiceInterface $categoryService;

    public function __construct(CategoryServiceInterface $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index(QueryParamsRequest $request): Response
    {
        $categories = $this->categoryService->index();

        return Inertia::render('admin/category/index', [
            'categories' => $categories,
        ]);
    }

    public function destroy(string|int $id): RedirectResponse
    {
        $this->categoryService->destroy($id);

        return Redirect::back()->with([
           'type' => 'success',
           'message' => trans('message.success'),
        ]);
    }
}
