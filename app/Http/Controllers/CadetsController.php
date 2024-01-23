<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cadets;

class CadetsController extends Controller
{
    function getCadets () {
        return response()->json(Cadets::all());
    }
}
