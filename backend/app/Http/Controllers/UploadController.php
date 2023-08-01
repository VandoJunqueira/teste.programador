<?php

namespace App\Http\Controllers;

use App\Models\Image as ModelImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UploadController extends Controller
{

    private $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    public function upload(Request $request)
    {
        $linkTarget = storage_path('app/public');
        $linkName = public_path('storage');

        if (!file_exists($linkName)) {
            symlink($linkTarget, $linkName);
        }

        $request->validate([
            'files' => 'required|array',
        ]);

        $images = [];
        if ($request->hasFile('files')) {
            $files = $request->file('files');

            foreach ($files as $key => $file) {

                $extension = strtolower($file->getClientOriginalExtension());
                if (!in_array($extension, $this->allowedExtensions)) {
                    $images[] = [
                        'status' => false,
                        'error' => 'O arquivo não é uma imagem válida (permitidos: jpg, jpeg, png, gif).',
                        'index' => (int) $request->index[$key]
                    ];
                    continue;
                }

                $file->store('public/images');
                $name = $file->hashName();
                $images[] = [
                    'status' => true,
                    'file_name' => $name,
                    'index' => (int) $request->index[$key]
                ];
            }
        }

        return response()->json($images);
    }
}
