<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Athlete extends Model
{
    protected $guarded = ['id'];

    protected $appends = ['age'];

    public function getCompetitiveAgeAttribute()
    {
        return Carbon::now()->year - Carbon::parse($this->birthdate)->year;
    }
}
