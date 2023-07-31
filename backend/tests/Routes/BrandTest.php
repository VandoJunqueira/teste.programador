<?php

namespace Tests\Routes;

use Tests\TestCase;
use Faker\Factory;

# php artisan test --filter=BrandTest
class BrandTest extends TestCase
{

    # php artisan test --filter=BrandTest::test_index
    public function test_index(): void
    {
        $response = $this->get('/api/brands');

        $response->assertStatus(200);

        $response->dump();
    }

    # php artisan test --filter=BrandTest::test_show
    public function test_show(): void
    {
        $response = $this->get('/api/brands/2');

        $response->assertStatus(200);

        $response->dump();
    }

    # php artisan test --filter=BrandTest::test_store
    public function test_store(): void
    {

        // $faker = Factory::create('pt_BR');

        $response = $this->post('/api/brands', [
            'name' => 'Teste'
        ]);

        $response->assertStatus(200);

        $response->dump();
    }

    # php artisan test --filter=BrandTest::test_update
    public function test_update(): void
    {

        // $faker = Factory::create('pt_BR');

        $response = $this->put('/api/brands/2', [
            'name' => 'Teste - edit'
        ]);

        $response->assertStatus(200);

        $response->dump();
    }


    # php artisan test --filter=BrandTest::test_destroy
    public function test_destroy(): void
    {
        $response = $this->delete('/api/brands/1');

        $response->dump();

        // $response->assertStatus(200);
    }
}
