<?php

namespace App\Http\Controllers\api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogRequest;
use App\Models\Blog;
use App\Http\Resources\V1\BlogResource;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        // return Blog::all();
        return BlogResource::collection(Blog::all());
    }

    public function show(Blog $blog)
    {
        return new BlogResource($blog);
    }

    public function store(StoreBlogRequest $request)
    {
        Blog::create($request->validated());
        return response()->json("Blog stored");
    }

    public function update(StoreBlogRequest $request, Blog $blog)
    {
        $blog->update($request->validated());
        return (response()->json("Blog updated"));
    }
    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response('Blog deleted');
    }
}
