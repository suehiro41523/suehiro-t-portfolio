<?php

namespace App\Http\Controllers\api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDtpRequest;
use App\Models\Dtp;
use App\Http\Resources\V1\DtpResource;
use Illuminate\Http\Request;

class DtpController extends Controller
{
    public function index()
    {
        // return Dtp::all();
        return DtpResource::collection(Dtp::all());
    }

    public function show(Dtp $dtp)
    {
        return new DtpResource($dtp);
    }

    public function store(StoreDtpRequest $request)
    {
        Dtp::create($request->validated());
        return response()->json("Dtp stored");
    }

    public function update(StoreDtpRequest $request, Dtp $dtp)
    {
        $dtp->update($request->validated());
        return (response()->json("Dtp updated"));
    }
    public function destroy(Dtp $dtp)
    {
        $dtp->delete();
        return response('Dtp deleted');
    }
}
