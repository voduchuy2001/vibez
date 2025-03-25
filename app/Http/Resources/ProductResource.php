<?php

namespace App\Http\Resources;

use App\Enums\BaseStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'thumbnail' => $this->thumbnail,
            'images' => $this->images,
            'description' => $this->description,
            'content' => $this->content,
            'status' => BaseStatus::tryFrom($this->status)->label(),
        ];
    }
}
