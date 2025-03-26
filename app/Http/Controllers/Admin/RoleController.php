<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\RoleServiceInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class RoleController extends Controller
{
    protected RoleServiceInterface $roleService;

    public function __construct(RoleServiceInterface $roleService)
    {
        $this->roleService = $roleService;
    }

    public function index(): Response
    {
        $roles = $this->roleService->index();

        return Inertia::render('admin/role/index', [
            'roles' => $roles
        ]);
    }

    public function destroy(string|int $id): RedirectResponse
    {
        $this->roleService->destroy($id);

        return Redirect::back()->with([
           'type' => 'success',
           'message' => trans('Delete review success'),
        ]);
    }
}
