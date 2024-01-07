<?php

namespace App\Http\Controllers\api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWorkRequest;
use App\Models\Work;
use App\Http\Resources\V1\WorkResource;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    public function index()
    {
        // return Work::all();
        return WorkResource::collection(Work::all());
    }

    public function show(Work $work)
    {
        return new WorkResource($work);
    }

    public function store(StoreWorkRequest $request)
    {
        Work::create($request->validated());
        return response()->json("Work stored");
    }

    public function update(StoreWorkRequest $request, Work $work)
    {
        $work->update($request->validated());
        return (response()->json("work updated"));
    }
}
