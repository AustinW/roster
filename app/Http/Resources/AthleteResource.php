<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AthleteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'active' => $this->active,
            'usag_id' => $this->usag_id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'gender' => $this->gender,
            'birthdate' => $this->birthdate,
            'competitive_age' => $this->competitive_age,
            'tra_level' => $this->tra_level,
            'dmt_level' => $this->dmt_level,
            'tum_level' => $this->tum_level,
            'notes' => $this->notes,
            'sync_partner' => $this->sync_partner,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
