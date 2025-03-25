<?php

namespace App\Enums;

enum BaseStatus: string
{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';
    case PENDING = 'pending';
}
