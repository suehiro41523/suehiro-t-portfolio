<?php

namespace App\Http\Controllers\api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreImageRequest;
use Illuminate\Http\Request;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;


class ImageController extends Controller
{
    public function index()
    {
        // filesystem.phpファイルで定義したディスクを選択
        $disk = Storage::disk('s3');
        return (
            // $disk->files('images')
            Image::all()
        );
    }

    public function store(StoreImageRequest $request)
    {
        $disk = Storage::disk('s3'); # 使わない可能性大
        if (!is_null($request->file('image')))
        {
            $fileName = $request->file('image')->getClientOriginalName();
        }

        $s3Path = $request->file('image')->storeAs('images', $fileName, 's3'); # S3にアップロード
        $path = $request->file('image')->storeAs('images', $fileName); # リクエストの作成
        // $path = $disk->put('images', 's3'); # s3にputメソッドでも可
        Image::create(['image' => $path]); # DBに保存 
        Storage::disk('s3')->setVisibility($path, 'public'); # 画像のアクセス許可


        return strval($request->file('image')->getClientOriginalName());
    }

    public function show(Image $image)
    {
        // $disk = Storage::disk('s3');
        $fileName = Image::find($image, ['image'])->value('image');

        return Image::find($image, ['image'])->value('image');
        // return Storage::disk('s3')->get($fileName);
        // return Storage::disk('s3')->get('template.jpg');
    }
}
