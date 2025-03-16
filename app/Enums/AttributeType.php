<?php

namespace App\Enums;

enum AttributeType: string
{
    case TEXT = 'text';
    case NUMBER = 'number';
    case SELECT = 'select';
    case CHECKBOX = 'checkbox';
    case DATE = 'date';
}
