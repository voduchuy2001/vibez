<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Services\Interfaces\CategoryServiceInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryService implements CategoryServiceInterface
{
    protected Category $category;

    public function __construct(Category $category)
    {
        $this->category =   $category;
    }

    public function index(): AnonymousResourceCollection
    {
        $sort = str_replace(
            ['order', 'created_at'],
            ['order', 'created_at'],
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

        $result = DataTable::query($this->category->query())
            ->with(['parent'])
            ->searchable(['name', 'description'])
            ->applyFilters($filters)
            ->allowedFilters(['status:published', 'status:pending', 'status:draft'])
            ->applySort($sort)
            ->allowedSorts(['order', 'created_at'])
            ->make();

        return CategoryResource::collection($result);
    }

    public function all(): Collection
    {
        return $this->category->all();
    }

    public function store($data): void
    {
        $this->category->create($data);
    }

    public function update(Category $category, $data): void
    {
        $category->update($data);
    }

    public function destroy(int|string $id): void
    {
        $category = $this->category->findOrFail($id);
        $category->delete();
    }

    public function findById(string|int $id): Category
    {
        return $this->category->findOrFail($id);
    }

}
