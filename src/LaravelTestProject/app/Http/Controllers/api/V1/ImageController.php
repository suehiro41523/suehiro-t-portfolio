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
            Image::all()
        );
    }

    public function store(StoreImageRequest $request)
    {
        if (!is_null($request->file('image')))
        {
            $fileName = $request->file('image')->getClientOriginalName();
        }

        $s3Path = $request->file('image')->storeAs('images', $fileName, 's3'); # S3にアップロード
        $path = $request->file('image')->storeAs('images', $fileName); # リクエストの作成
        Image::create($request->validated()); # DBに保存 
        Storage::disk('s3')->setVisibility($path, 'public'); # 画像のアクセス許可


        return strval($request->file('image')->getClientOriginalName());
    }

    public function show(Image $image)
    {
        Image::find($image, ['image'])->value('image');
        return response()->json("work shown");
    }
    public function update(StoreImageRequest $request, Image $image)
    {
        $fileName = $request->file('image')->getClientOriginalName();
        $request->file('image')->storeAs('images', $fileName, 's3'); # S3にアップロード
        $image->update($request->validated()); # DBの更新
        return (response()->json("work updated"));
    }
    public function destroy(Image $image)
    {
        $image->delete();
        return response('image deleted');
    }
}
