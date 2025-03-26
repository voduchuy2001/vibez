<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SKUResource extends JsonResource
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
            'code' => $this->code,
            'is_default' => $this->is_default,
            'price' => $this->price,
            'stock' => $this->stock,
            'images' => $this->images,
            'status' => $this->status,
        ];
    }
}
