<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\ReviewResource;
use App\Services\Interfaces\RoleServiceInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Spatie\Permission\Models\Role;

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
            ['star', 'created_at'],
            ['star', 'created_at'],
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

        $result = DataTable::query($this->role->query())
            ->with(['product', 'customer'])
            ->searchable(['comment'])
            ->applyFilters($filters)
            ->allowedFilters(['status:published', 'status:pending', 'status:draft'])
            ->applySort($sort)
            ->allowedSorts(['star'])
            ->make();

        return ReviewResource::collection($result);
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
