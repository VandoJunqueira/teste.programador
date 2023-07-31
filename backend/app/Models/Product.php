<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'voltage',
        'brand_id',
        'value',
        'main_image'
    ];

    protected function value(): Attribute
    {
        return Attribute::make(
            set: function (mixed $value) {

                $value = format_float($value);

                return (float) $value;
            },
        );
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function (Product $product) {
            // Excluir as imagens relacionadas ao produto antes de excluir o produto.
            $product->images()->delete();
        });
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'image_morph');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}
