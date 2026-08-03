<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    public function run(): void
    {
        $brands = ['Bitfire', 'Appron', 'Hooseki', 'Ozeki', 'Zeki'];

        foreach ($brands as $i => $name) {
            Brand::updateOrCreate(['name' => $name], ['sort_order' => $i]);
        }
    }
}
