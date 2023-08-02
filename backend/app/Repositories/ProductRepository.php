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
        $query = $this->model->with('images', 'brand')->orderBy('id', 'DESC');

        if (is_null(request('page'))) {
            // Se não for uma solicitação de paginação, obtenha todos os resultados.
            return $query->get();
        } else {
            // Caso contrário, retorne os resultados paginados.
            return $query->paginate(10);
        }
    }

    function getById(string $id)
    {
        return $this->find($id)->load('images', 'brand');
    }
}
