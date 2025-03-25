<?php

namespace App\Services;

use App\Facades\DataTable;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use App\Services\Interfaces\ReviewServiceInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ReviewService implements ReviewServiceInterface
{
    protected Review $review;

    public function __construct(Review $review)
    {
        $this->review = $review;
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

        $result = DataTable::query($this->review->query())
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
        $this->review->create($data);
    }

    public function update(int|string $id, $data): void
    {
        $review = $this->review->findOrFail($id);
        $review->update($data);
    }

    public function destroy(int|string $id): void
    {
        $review = $this->review->findOrFail($id);
        $review->delete();
    }
}
