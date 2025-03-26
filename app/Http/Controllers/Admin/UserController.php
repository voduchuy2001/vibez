<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\Interfaces\UserServiceInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    protected UserServiceInterface $userService;

    public function __construct(UserServiceInterface $userService)
    {
        $this->userService = $userService;
    }

    public function index(): Response
    {
        $users = $this->userService->index();

        return Inertia::render('admin/user/index', [
            'users' => $users
        ]);
    }

    public function destroy(string|int $id): RedirectResponse
    {
        $this->userService->destroy($id);

        return Redirect::back()->with([
           'type' => 'success',
           'message' => trans('Delete review success'),
        ]);
    }
}
