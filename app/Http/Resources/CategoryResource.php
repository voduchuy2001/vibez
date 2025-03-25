<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'image' => $this->image,
            'icon_image' => $this->icon_image,
            'description' => $this->description,
            'status' => $this->status,
            'order' => $this->order,
            'parent' => $this->whenLoaded('parent', fn () => new CategoryResource($this->parent)),
            'created_at' => $this->created_at
        ];
    }
}
