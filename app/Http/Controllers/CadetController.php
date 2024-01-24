<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Cadets;

class CadetController extends Controller
{
  function get () {
    return response()->json(Cadets::all());
  }
  
  function store (Request $request) {

    $request->full_name = $request->last_name. ', '. $request->first_name;

    $request->validate([
      'user_name' => 'required|unique:cadets',
      'first_name' => 'required',
      'last_name' => 'required',
      'full_name' => 'unique:cadets',
      'email' => 'required|email|unique:cadets',
      'password' => 'required'
    ]);

    $hashedPassword = Hash::make($request->password);

    $cadet = new Cadets;

    $cadet->full_name = $request->full_name;
    $cadet->user_name = $request->user_name;
    $cadet->password = $hashedPassword;
    $cadet->email = $request->email;
    $cadet->role = 3;

    $cadet->save();

    return response()->json($request);
  }
}
