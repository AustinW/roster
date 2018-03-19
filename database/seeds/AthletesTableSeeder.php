<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use PulkitJalan\Google\Facades\Google;
use Revolution\Google\Sheets\Facades\Sheets;

class AthletesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Sheets::setService(Google::make('sheets'));
        Sheets::spreadsheet('1cbunH2Dn6O7OOd7kb66mE5GtFAdjCAFVwSttzHhD3lQ');

        $rows = Sheets::sheet('All Athletes')->get();
        $header = $rows->pull(0);

        /** @var \Illuminate\Support\Collection $athletes */
        $athletes = Sheets::collection($header, $rows);

        $athletes->each(function($athlete) {
            DB::table('athletes')->insert([
                'active' => ($athlete['Active'] === 'Yes') ? true : false,
                'usag_id' => $athlete['USAG #'],
                'first_name' => $athlete['First Name'],
                'last_name' => $athlete['Last Name'],
                'gender' => $athlete['Gender'],
                'birthdate' => $this->parseBirthday($athlete['Birthday']),
                'tra_level' => $this->parseLevel($athlete['TRA']),
                'dmt_level' => $this->parseLevel($athlete['DMT']),
                'tum_level' => $this->parseLevel($athlete['TUM']),
                'notes' => $athlete['Notes'],
                'sync_partner' => $athlete['SYNC Partner'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        });
    }

    private function parseBirthday($birthday)
    {
        if ($birthday === '') {
            return null;
        }

        return Carbon::parse($birthday);
    }

    private function parseLevel($level)
    {
        if ($level === 'X' || $level === '') {
            return null;
        }

        return $level;
    }
}
