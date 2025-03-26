<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Services\Interfaces\ProductServiceInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductService implements ProductServiceInterface
{
    protected Product $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function index(): AnonymousResourceCollection
    {
        $sort = str_replace(
            ['created_at'],
            ['created_at'],
            request()->query('col')
        );


        $filters = str_replace(
            [
                 'status:published', 'status:pending', 'status:draft',
            ],
            [
                'status:published', 'status:pending', 'status:draft',
            ],
            request()->query('filters') ?? []
        );

        $result = DataTable::query($this->product->query())
            ->with(['defaultSku'])
            ->searchable(['name', 'description', 'content'])
            ->applyFilters($filters)
            ->allowedFilters(['status:published', 'status:pending', 'status:draft'])
            ->applySort($sort)
            ->allowedSorts(['created_at'])
            ->make();

        return ProductResource::collection($result);
    }

    public function store($data): void
    {
        $this->product->create($data);
    }

    public function update(int|string $id, $data): void
    {
        $product = $this->product->findOrFail($id);
        $product->update($data);
    }

    public function destroy(int|string $id): void
    {
        $product = $this->product->findOrFail($id);
        $product->delete();
    }
}
