<?php

namespace App\Models;

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
}
