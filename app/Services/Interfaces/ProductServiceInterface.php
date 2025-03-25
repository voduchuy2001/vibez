<?php

namespace App\Services\Interfaces;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface ProductServiceInterface
{
    public function index(): AnonymousResourceCollection;
    public function store($data): void;
    public function update(string|int $id, $data): void;
    public function destroy(string|int $id): void;
}
