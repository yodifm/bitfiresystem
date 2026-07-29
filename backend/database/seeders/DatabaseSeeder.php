<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            ServiceSeeder::class,
            ProductCategorySeeder::class,
            GalleryItemSeeder::class,
            StatSeeder::class,
            ValuePropSeeder::class,
            CertificationSeeder::class,
        ]);
    }
}
