<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Athlete extends Model
{
    protected $fillable = ['active', 'first_name', 'last_name', 'usag_id', 'gender', 'birthdate', 'tra_level', 'dmt_level', 'tum_level', 'notes', 'sync_partner'];

    protected $appends = ['competitive_age'];

    public static $rules = [
        'first_name' => 'required',
        'last_name' => 'required',
        'usag_id' => 'required',
        'gender' => 'required',
        'birthdate' => 'required',
        'tra_level' => 'required',
        'dmt_level' => 'required',
        'tum_level' => 'required',
    ];

    public function getCompetitiveAgeAttribute()
    {
        return Carbon::now()->year - Carbon::parse($this->birthdate)->year;
    }
}
