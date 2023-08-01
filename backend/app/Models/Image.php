<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'src',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'image_morph_type',
        'image_morph_id',
    ];


    protected function src(): Attribute
    {
        return Attribute::make(
            get: function (mixed $value) {
                return [
                    'full_src' => url('storage/images/' . $value),
                    'name' => $value
                ];
            },
        );
    }
}
