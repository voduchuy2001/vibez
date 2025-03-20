<?php

namespace App\Enums;

enum BaseStatus: string
{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';
    case PENDING = 'pending';

    public function label(): string
    {
        return match($this) {
            self::DRAFT => trans('status.draft'),
            self::PUBLISHED => trans('status.published'),
            self::PENDING => trans('status.pending'),
        };
    }
}
