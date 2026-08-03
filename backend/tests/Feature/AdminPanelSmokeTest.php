<?php

namespace Tests\Feature;

use App\Models\Brand;
use App\Models\ContactMessage;
use App\Models\GalleryItem;
use App\Models\LegalDocument;
use App\Models\ProductCategory;
use App\Models\Service;
use App\Models\Stat;
use App\Models\User;
use App\Models\ValueProp;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminPanelSmokeTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $brand = Brand::create(['name' => 'Bitfire', 'sort_order' => 0]);

        $service = Service::create([
            'icon' => 'Factory',
            'image' => 'services/test.jpg',
            'title' => 'Test Service',
            'desc_id' => 'id', 'desc_en' => 'en', 'desc_zh' => 'zh',
            'sort_order' => 0,
        ]);

        $category = ProductCategory::create([
            'key' => 'test-category',
            'label' => 'Test Category',
            'image' => 'https://example.com/x.jpg',
            'sort_order' => 0,
        ]);

        $category->items()->create([
            'brand_id' => $brand->id,
            'name' => 'Test Item',
            'desc_id' => 'id', 'desc_en' => 'en', 'desc_zh' => 'zh',
            'icon' => 'Droplets',
            'image' => 'product-items/test.jpg',
            'sort_order' => 0,
        ]);

        GalleryItem::create([
            'image' => 'https://example.com/g.jpg',
            'caption_id' => 'id', 'caption_en' => 'en', 'caption_zh' => 'zh',
            'sort_order' => 0,
        ]);

        Stat::create([
            'value' => 10, 'suffix' => '+',
            'label_id' => 'id', 'label_en' => 'en', 'label_zh' => 'zh',
            'sort_order' => 0,
        ]);

        ValueProp::create([
            'title_id' => 'id', 'title_en' => 'en', 'title_zh' => 'zh',
            'desc_id' => 'id', 'desc_en' => 'en', 'desc_zh' => 'zh',
            'sort_order' => 0,
        ]);

        LegalDocument::create([
            'title_id' => 'id', 'title_en' => 'en', 'title_zh' => 'zh',
            'file' => 'legal/test.pdf',
            'sort_order' => 0,
        ]);

        ContactMessage::create([
            'name' => 'Test', 'email' => 'test@test.com', 'message' => 'Hello',
        ]);
    }

    /**
     * @dataProvider resourcePages
     */
    public function test_admin_page_loads_successfully(string $label, string $url): void
    {
        $user = User::factory()->create();

        $start = microtime(true);
        $response = $this->actingAs($user)->get($url);
        $ms = round((microtime(true) - $start) * 1000);

        fwrite(STDERR, sprintf("[%s] %s -> %d (%dms)\n", $label, $url, $response->getStatusCode(), $ms));

        $response->assertOk();
    }

    public static function resourcePages(): array
    {
        return [
            'Dashboard' => ['Dashboard', '/admin'],
            'Services index' => ['Services index', '/admin/services'],
            'Services create' => ['Services create', '/admin/services/create'],
            'Services edit' => ['Services edit', '/admin/services/1/edit'],
            'ProductCategories index' => ['ProductCategories index', '/admin/product-categories'],
            'ProductCategories create' => ['ProductCategories create', '/admin/product-categories/create'],
            'ProductCategories edit' => ['ProductCategories edit', '/admin/product-categories/1/edit'],
            'Brands index' => ['Brands index', '/admin/brands'],
            'Brands create' => ['Brands create', '/admin/brands/create'],
            'Brands edit' => ['Brands edit', '/admin/brands/1/edit'],
            'GalleryItems index' => ['GalleryItems index', '/admin/gallery-items'],
            'GalleryItems create' => ['GalleryItems create', '/admin/gallery-items/create'],
            'GalleryItems edit' => ['GalleryItems edit', '/admin/gallery-items/1/edit'],
            'Stats index' => ['Stats index', '/admin/stats'],
            'Stats create' => ['Stats create', '/admin/stats/create'],
            'Stats edit' => ['Stats edit', '/admin/stats/1/edit'],
            'ValueProps index' => ['ValueProps index', '/admin/value-props'],
            'ValueProps create' => ['ValueProps create', '/admin/value-props/create'],
            'ValueProps edit' => ['ValueProps edit', '/admin/value-props/1/edit'],
            'LegalDocuments index' => ['LegalDocuments index', '/admin/legal-documents'],
            'LegalDocuments create' => ['LegalDocuments create', '/admin/legal-documents/create'],
            'LegalDocuments edit' => ['LegalDocuments edit', '/admin/legal-documents/1/edit'],
            'ContactMessages index' => ['ContactMessages index', '/admin/contact-messages'],
            'ContactMessages edit' => ['ContactMessages edit', '/admin/contact-messages/1/edit'],
        ];
    }
}
