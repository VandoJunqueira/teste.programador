<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Brand;
use App\Models\Image;
use App\Repositories\ImageRepository;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    private $productRepository;


    function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $products = $this->productRepository->getAll();

        return response()->json(compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands = Brand::all();

        return response()->json(compact('brands'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ProductRequest  $request
     * @return JsonResponse
     */
    public function store(ProductRequest $request)
    {
        $this->productRepository->store($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $id
     * @return JsonResponse
     */
    public function show(string $id)
    {
        if (!$product = $this->productRepository->getById($id)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Produto não encontrado!'
            ], 404);
        }

        return response()->json(compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        if (!$product = $this->productRepository->getById($id)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Produto não encontrado!'
            ], 404);
        }
        $brands = Brand::all();
        return response()->json(compact('product', 'brands'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ProductRequest  $request
     * @param  string  $id
     * @return JsonResponse
     */
    public function update(ProductRequest $request, string $id)
    {
        if (!$product = $this->productRepository->update($id, $request->all())) {
            return response()->json([
                'status' => 'error',
                'message' => 'Produto não encontrado!'
            ], 404);
        }

        $product->images()->delete();

        if ($request->file_name) {


            foreach ($request->file_name as $file) {
                $product->images()->create([
                    'src' => $file
                ]);
            }
        }

        return response()->json(compact('product'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $id
     * @return JsonResponse
     */
    public function destroy(string $id)
    {
        if (!$this->productRepository->destroy($id)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Produto não encontrado!'
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Produto excluido com sucesso!'
        ], 200);
    }
}
