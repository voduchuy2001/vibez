<?php

namespace App\Services\Interfaces;

use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface CategoryServiceInterface
{
    public function index(): AnonymousResourceCollection;
    public function store($data): void;
    public function update(Category $category, $data): void;
    public function destroy(string|int $id): void;
    public function all(): Collection;
    public function findById(string|int $id): Category;
}
