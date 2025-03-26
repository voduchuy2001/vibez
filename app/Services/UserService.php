<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\Interfaces\UserServiceInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserService implements UserServiceInterface
{
    protected User $user;

    public function __construct(User $user)
    {
        $this->user = $user;
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
                 'status:active', 'status:block',
            ],
            [
                'status:active', 'status:block',
            ],
            request()->query('filters') ?? []
        );

        $result = DataTable::query($this->user->query())
            ->searchable(['name', 'email'])
            ->applyFilters($filters)
            ->allowedFilters(['status:active', 'status:block'])
            ->applySort($sort)
            ->allowedSorts(['created_at'])
            ->make();

        return UserResource::collection($result);
    }

    public function store($data): void
    {
        $this->user->create($data);
    }

    public function update(int|string $id, $data): void
    {
        $user = $this->user->findOrFail($id);
        $user->update($data);
    }

    public function destroy(int|string $id): void
    {
        $user = $this->user->findOrFail($id);
        $user->delete();
    }
}
