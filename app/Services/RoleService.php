<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use App\Services\Interfaces\RoleServiceInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RoleService implements RoleServiceInterface
{
    protected Role $role;

    public function __construct(Role $role)
    {
        $this->role = $role;
    }


    public function index(): AnonymousResourceCollection
    {
        $sort = str_replace(
            ['created_at'],
            ['created_at'],
            request()->query('col')
        );

        $result = DataTable::query($this->role->query())
            ->searchable(['name', 'description'])
            ->applySort($sort)
            ->allowedSorts(['created_at'])
            ->make();

        return RoleResource::collection($result);
    }

    public function store($data): void
    {
        $this->role->create($data);
    }

    public function update(int|string $id, $data): void
    {
        $role = $this->role->findOrFail($id);
        $role->update($data);
    }

    public function destroy(int|string $id): void
    {
        $role = $this->role->findOrFail($id);
        $role->delete();
    }
}
