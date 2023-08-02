<?php


namespace App\Repositories;

use App\Models\Brand;

class BrandRepository extends Repository
{
    protected $model;

    public function __construct(Brand $model)
    {
        $this->model = $model;
    }

    function getAll()
    {
        $query = $this->model;

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
        return $this->find($id);
    }
}
