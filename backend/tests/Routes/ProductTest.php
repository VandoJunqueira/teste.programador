<?php

namespace Tests\Routes;

use Tests\TestCase;

# php artisan test --filter=ProductTest
class ProductTest extends TestCase
{

    # php artisan test --filter=ProductTest::test_index
    public function test_index(): void
    {
        $response = $this->get('/api/products');

        $response->assertStatus(200);

        $response->dump();
    }

    # php artisan test --filter=ProductTest::test_show
    public function test_show(): void
    {
        $response = $this->get('/api/products/1');

        $response->assertStatus(200);

        $response->dump();
    }

    # php artisan test --filter=ProductTest::test_store
    public function test_store(): void
    {
        $response = $this->post('/api/products', [
            'name' => 'Geladeira Frost Free',
            'description' => 'Este produto é totalmente versátil. Tudo para ser personalizado para comportar o que você preferir.)',
            'voltage' => '220v',
            'brand_id' => 1,
            'value' => 5500.00
        ]);

        // $response->dump();

        $response->assertStatus(200);
    }

    # php artisan test --filter=ProductTest::test_update
    public function test_update(): void
    {
        $response = $this->put('/api/products/16', [
            'name' => 'Geladeira Frost Free - Edit',
            'description' => 'Este produto é totalmente versátil. Tudo para ser personalizado para comportar o que você preferir.)',
            'voltage' => '220v',
            'brand_id' => 1,
            'value' => 5500.00
        ]);

        $response->dump();

        // $response->assertStatus(200);
    }

    # php artisan test --filter=ProductTest::test_destroy
    public function test_destroy(): void
    {
        $response = $this->delete('/api/products/1');

        $response->dump();

        // $response->assertStatus(200);
    }
}
