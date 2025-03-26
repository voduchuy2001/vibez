<?php

namespace App\Http\Resources;

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
            'code' => $this->code,
            'thumbnail' => $this->thumbnail,
            'images' => $this->images,
            'description' => $this->description,
            'content' => $this->content,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'defaultSku' => new SKUResource($this->defaultSku)
        ];
    }
}
