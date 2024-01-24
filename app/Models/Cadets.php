<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cadets extends Model
{
    use HasFactory;

    protected $table = 'cadets';

    protected $fillable = ['user_name', 'full_name','password','email', 'role'];
}
