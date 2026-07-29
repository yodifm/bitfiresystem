<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CertificationResource;
use App\Http\Resources\GalleryItemResource;
use App\Http\Resources\ProductCategoryResource;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\StatResource;
use App\Http\Resources\ValuePropResource;
use App\Models\Certification;
use App\Models\GalleryItem;
use App\Models\ProductCategory;
use App\Models\Service;
use App\Models\Stat;
use App\Models\ValueProp;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ContentController extends Controller
{
    public function services(): AnonymousResourceCollection
    {
        return ServiceResource::collection(
            Service::orderBy('sort_order')->get()
        );
    }

    public function productCategories(): AnonymousResourceCollection
    {
        return ProductCategoryResource::collection(
            ProductCategory::with('items')->orderBy('sort_order')->get()
        );
    }

    public function gallery(): AnonymousResourceCollection
    {
        return GalleryItemResource::collection(
            GalleryItem::orderBy('sort_order')->get()
        );
    }

    public function stats(): AnonymousResourceCollection
    {
        return StatResource::collection(
            Stat::orderBy('sort_order')->get()
        );
    }

    public function valueProps(): AnonymousResourceCollection
    {
        return ValuePropResource::collection(
            ValueProp::orderBy('sort_order')->get()
        );
    }

    public function certifications(): AnonymousResourceCollection
    {
        return CertificationResource::collection(
            Certification::orderBy('sort_order')->get()
        );
    }
}
