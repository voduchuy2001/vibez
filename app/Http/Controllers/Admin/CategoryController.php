<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Requests\QueryParamsRequest;
use App\Models\Category;
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
           'message' => trans('Delete category success'),
        ]);
    }

    public function create(): Response
    {
        $categories = $this->categoryService->all();

        return Inertia::render('admin/category/create', [
            'categories' => $categories
        ]);
    }

    public function store(CategoryRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $this->categoryService->store($data);

        return Redirect::route('admin.category.index')->with([
           'type' => 'success',
           'message' => trans('Create category success'),
        ]);
    }

    public function edit(string|int $id): Response
    {
        $category = $this->categoryService->findById($id);

        return Inertia::render('admin/category/edit', [
            'category' => $category
        ]);
    }

    public function update(Category $category, CategoryRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $this->categoryService->update($category, $data);

        return Redirect::route('admin.category.index')->with([
           'type' => 'success',
           'message' => trans('Update category success'),
        ]);
    }
}
