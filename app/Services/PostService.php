<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Services\Interfaces\PostServiceInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostService implements PostServiceInterface
{
    protected Post $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
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

        $result = DataTable::query($this->post->query())
            ->with(['product', 'customer'])
            ->searchable(['comment'])
            ->applyFilters($filters)
            ->allowedFilters(['status:published', 'status:pending', 'status:draft'])
            ->applySort($sort)
            ->allowedSorts(['star'])
            ->make();

        return PostResource::collection($result);
    }

    public function store($data): void
    {
        $this->post->create($data);
    }

    public function update(int|string $id, $data): void
    {
        $post = $this->post->findOrFail($id);
        $post->update($data);
    }

    public function destroy(int|string $id): void
    {
        $post = $this->post->findOrFail($id);
        $post->delete();
    }
}
