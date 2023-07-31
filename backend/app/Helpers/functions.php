<?php

use Illuminate\Support\Facades\Storage;

if (!function_exists('photos')) {
    function photos(string|null $src, string $folder = 'profiles', $size = 'thumbnail')
    {
        if (is_null($src) or !Storage::exists("/public/$folder/$size/$src")) {
            return asset('assets/img/profiles/avatar-semfoto.jpg');
        }
        return url("/storage/$folder/$size/$src");
    }
}

if (!function_exists('format_money')) {
    function format_money($value)
    {
        return  number_format((float) $value, 2, ',', '.');
    }
}

if (!function_exists('format_float')) {
    function format_float($value)
    {
        if (!is_float($value)) {
            $value = str_replace('.', '', $value);
            $value = str_replace(',', '.', $value);
        }
        return $value;
    }
}
