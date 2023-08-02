<?php

namespace App\Http\Controllers;

use App\Http\Requests\BrandRequest;
use App\Repositories\BrandRepository;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BrandController extends Controller
{

    private $brandRepository;

    /**
     * Inject the brand repository into the controller.
     */
    function __construct(BrandRepository $brandRepository)
    {
        $this->brandRepository = $brandRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $brands = $this->brandRepository->getAll();
        return response()->json($brands, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        // You can return a JSON response here if needed, or simply return an empty response.
        return response()->json(['message' => 'Not implemented'], 501);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BrandRequest  $request
     * @return JsonResponse
     */
    public function store(BrandRequest $request)
    {
        try {
            $brand = $this->brandRepository->store($request->all());
            return response()->json([
                'status' => 'success',
                'message' => 'Salvo com sucesso!'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'Erro ao salvar!'
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $id
     * @return JsonResponse
     */
    public function show(string $id)
    {
        $brand = $this->brandRepository->getById($id);

        if (!$brand) {
            return response()->json([
                'status' => 'error',
                'message' => 'Marca não encontrada!'
            ], 404);
        }

        return response()->json($brand, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $id
     * @return JsonResponse
     */
    public function edit(string $id)
    {
        // You can return a JSON response here if needed, or simply return an empty response.
        return response()->json(['message' => 'Not implemented'], 501);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  BrandRequest  $request
     * @param  string  $id
     * @return JsonResponse
     */
    public function update(BrandRequest $request, string $id)
    {
        if (!$this->brandRepository->update($id, $request->all())) {
            return response()->json([
                'status' => 'error',
                'message' => 'Marca não encontrada!'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Salvo com sucesso!'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $id
     * @return JsonResponse
     */
    public function destroy(string $id)
    {
        // Verifica se a marca existe
        $brand = $this->brandRepository->find($id);

        if (!$brand) {
            return response()->json([
                'status' => 'error',
                'message' => 'Marca não encontrada!'
            ], 404);
        }

        if ($brand->products()->exists()) {
            // Se houver produtos, avise o usuário que a exclusão não é permitida
            return response()->json([
                'status' => 'error',
                'message' => 'Não é possível excluir a marca com produtos associados'
            ], 422);
        }

        if ($this->brandRepository->destroy($id)) {
            return response()->json([
                'status' => 'success',
                'message' => 'Marca excluída com sucesso'
            ], 200);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Falha ao excluir a marca'
        ], 500);
    }
}
