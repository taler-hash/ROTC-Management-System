<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cadets;

class CadetController extends Controller
{
  function get () {
    return response()->json(Cadets::all());
  }
  
  function store (Request $request) {
    $request->validate([
      'user_name' => 'required|unique:cadets'
    ]);
    return response()->json($request);
  }
}
