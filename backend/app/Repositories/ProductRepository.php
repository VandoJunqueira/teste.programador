<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository extends Repository
{
    protected $model;

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    function getAll()
    {
        return $this->model->with('images', 'brand')->orderBy('id', 'DESC')->paginate(10);
    }

    function getById(string $id)
    {
        return $this->find($id)->load('images', 'brand');
    }
}
