<?php

namespace App\Http\Requests;

use App\Enums\BaseStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryRequest extends FormRequest
{
    public function rules(): array
    {

        return [
            'parent_id'    => ['nullable', 'integer', 'exists:categories,id'],
            'name'         => ['required', 'string', 'max:255'],
            'image'        => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'icon_image'   => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:1024'],
            'description'  => ['nullable', 'string'],
            'status'       => ['required', Rule::in(BaseStatus::class)],
            'order'        => ['nullable', 'integer', 'min:0'],
        ];
    }
}
