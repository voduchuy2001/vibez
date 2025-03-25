<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\QueryParamsRequest;
use App\Services\Interfaces\ProductServiceInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    protected ProductServiceInterface $productService;

    public function __construct(ProductServiceInterface $productService)
    {
        $this->productService =  $productService;
    }

    public function index(QueryParamsRequest $request): Response
    {
        $products = $this->productService->index();

        return Inertia::render('admin/product/index', [
            'products' => $products
        ]);
    }

    public function destroy(string|int $id): RedirectResponse
    {
        $this->productService->destroy($id);

        return Redirect::back()->with([
           'type' => 'success',
           'message' => trans('Delete product success'),
        ]);
    }
}
