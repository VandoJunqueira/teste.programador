Para atender aos requisitos do teste, criei uma API em PHP utilizando o framework Laravel na versão 10 e um banco de dados relacional para o cadastro de eletrodomésticos.

# SUMÁRIO

1. [Instalação Passo a passo](https://github.com/VandoJunqueira/teste.programador/tree/main/backend#instala%C3%A7%C3%A3o-passo-a-passo)
    - 1.1. [Clone Repositório](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#clone-reposit%C3%B3rio)
    - 1.2. [Crie o Arquivo .env](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#crie-o-arquivo-env)
    - 1.3. [Atualize as variáveis de ambiente do arquivo .env](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#atualize-as-vari%C3%A1veis-de-ambiente-do-arquivo-env)
    - 1.4. [Suba os containers do projeto](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#suba-os-containers-do-projeto)
    - 1.5. [Acessar o container](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#acessar-o-container)
    - 1.6. [Instalar as dependências do projeto](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#instalar-as-depend%C3%AAncias-do-projeto)
    - 1.7. [Gerar a key do projeto Laravel](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#gerar-a-key-do-projeto-laravel)
2. [Migrations e Seeders](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#migrations-e-seeders)
    - 2.1. [Executar migração](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#executar-migra%C3%A7%C3%A3o)
    - 2.2. [Executar o seeder para popular a tabela](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#executar-o-seeder-para-popular-a-tabela)
    - 2.3. [Acessar o projeto](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#acessar-o-projeto)
3. [Rotas da API](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#rotas-da-api)
    - 3.1. [Endpoints Eletrodomésticos](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#endpoints-eletrodom%C3%A9sticos)
        - 3.1.1. [Listar](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#listar)
        - 3.1.2. [Cadastrar](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#cadastrar)
        - 3.1.3. [Exibir](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#exibir)
        - 3.1.4. [Editar](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#editar)
        - 3.1.5. [Excluir](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#excluir)
    - 3.2. [Endpoint Marcas](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#endpoint-marcas)
        - 3.2.1 [Listar](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#listar-1)
        - 3.2.2 [Cadastrar](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#cadastrar-1)
        - 3.2.3 [Exibir](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#exibir-1)
        - 3.2.4 [Editar](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#editar-1)
        - 3.2.5 [Excluir](https://github.com/VandoJunqueira/teste.programador/blob/main/backend/README.md#editar-1)


## Instalação Passo a passo

### Clone Repositório

```sh
git clone https://github.com/VandoJunqueira/teste.programador.git
```

### Acesse a pasta backend

```sh
cd .\backend\
```

### Crie o Arquivo .env

```sh
cp .env.example .env
```

### Atualize as variáveis de ambiente do arquivo .env

```dosini
APP_NAME="Teste Desenvolvedor Fullstack (PHP)"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8989

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=root

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120
```

### Suba os containers do projeto

```sh
docker-compose up -d
```

### Acessar o container

```sh
docker-compose exec app bash
```

### Instalar as dependências do projeto

```sh
composer install
```

### Gerar a key do projeto Laravel

```sh
php artisan key:generate
```

## Migrations e Seeders

### Executar migração

```sh
php artisan migrate
```

### Executar o seeder para popular a tabela

```sh
php artisan db:seed
```

### Acessar o projeto

[http://localhost:8989](http://localhost:8989)

## Rotas da API

### Endpoints Eletrodomésticos

#### Listar

Endpoint: `GET /api/products`

Descrição: Retorna a lista de todos os eletrodomésticos cadastrados.

**Exemplo de resposta de sucesso (200 OK):**

```json
[
    {
        "id": 15,
        "name": "Cafeteira Expresso Autom\u00e1tica",
        "description": "Cafeteira autom\u00e1tica que prepara diversos tipos de caf\u00e9 expresso com um toque, moedor de gr\u00e3os integrado e bico de vapor.",
        "voltage": "bivolt",
        "brand_id": 5,
        "value": "900.00",
        "main_image": "71APp0IvbLL._AC_SL1500_.jpg",
        "created_at": "2023-08-02T00:57:01.000000Z",
        "updated_at": "2023-08-02T00:57:03.000000Z",
        "deleted_at": null,
        "images": [
            {
                "id": 29,
                "src": {
                    "full_src": "http://localhost:8989/storage/images/71APp0IvbLL._AC_SL1500_.jpg",
                    "name": "71APp0IvbLL._AC_SL1500_.jpg"
                },
                "created_at": "2023-08-02T00:57:03.000000Z",
                "updated_at": "2023-08-02T00:57:03.000000Z"
            },
            {
                "id": 30,
                "src": {
                    "full_src": "http://localhost:8989/storage/images/61WjyYLSzAL._AC_SL1000_.jpg",
                    "name": "61WjyYLSzAL._AC_SL1000_.jpg"
                },
                "created_at": "2023-08-02T00:57:03.000000Z",
                "updated_at": "2023-08-02T00:57:03.000000Z"
            }
        ],
        "brand": {
            "id": 5,
            "name": "Philips",
            "created_at": "2023-08-02T00:57:00.000000Z",
            "updated_at": null,
            "deleted_at": null
        }
    },
    {
        "id": 14,
        "name": "Ferro de Passar a Vapor",
        "description": "Ferro a vapor com base antiaderente, sistema de vapor cont\u00ednuo e fun\u00e7\u00e3o de spray.",
        "voltage": "bivolt",
        "brand_id": 5,
        "value": "80.00",
        "main_image": "71jMtNo9U-L._AC_SL1500_.jpg",
        "created_at": "2023-08-02T00:57:01.000000Z",
        "updated_at": "2023-08-02T00:57:03.000000Z",
        "deleted_at": null,
        "images": [
            {
                "id": 27,
                "src": {
                    "full_src": "http://localhost:8989/storage/images/71jMtNo9U-L._AC_SL1500_.jpg",
                    "name": "71jMtNo9U-L._AC_SL1500_.jpg"
                },
                "created_at": "2023-08-02T00:57:03.000000Z",
                "updated_at": "2023-08-02T00:57:03.000000Z"
            },
            {
                "id": 28,
                "src": {
                    "full_src": "http://localhost:8989/storage/images/71z8x+AjGsL._AC_SL1500_.jpg",
                    "name": "71z8x+AjGsL._AC_SL1500_.jpg"
                },
                "created_at": "2023-08-02T00:57:03.000000Z",
                "updated_at": "2023-08-02T00:57:03.000000Z"
            }
        ],
        "brand": {
            "id": 5,
            "name": "Philips",
            "created_at": "2023-08-02T00:57:00.000000Z",
            "updated_at": null,
            "deleted_at": null
        }
    },
]
```

#### Cadastrar

Endpoint: `POST /api/products`

Descrição: Cadastra um novo eletrodoméstico no sistema.

**BODY PARAMS**

| Parâmetro   | Tipo    | Obrigatório | Descrição                    |
| ----------- | ------- | ----------- | ---------------------------- |
| name        | string  | Sim         | Nome do eletrodoméstico      |
| description | string  | Não         | Descrição do eletrodoméstico |
| voltage     | string  | Sim         | Voltage do eletrodoméstico   |
| brand_id    | integer | Sim         | ID da marca                  |
| value       | double  | Sim         | Preço do eletrodoméstico     |

**Exemplo de resposta de sucesso (200 OK):**

```json
{
    "status":"success",
    "message":"Salvo com sucesso!"
}
```
**Exemplo de resposta de erro (422 OK):**

```json
{
    "status":"error",
    "message":"Erro ao salvar!"
}
```

#### Exibir

Endpoint: `GET /api/products/{id}`

Descrição: Exibe os detalhes de um eletrodoméstico específico.

```json
{
  "id": 1,
  "name": "Geladeira French Door 514L",
  "description": "Uma geladeira espaçosa e moderna, com design French Door, prateleiras ajustáveis, sistema de refrigeração Twin Cooling Plus, dispenser de água e gelo na porta, e iluminação LED interna.",
  "voltage": "bivolt",
  "brand_id": 1,
  "value": "5000.00",
  "main_image": "2af6eaf0a7be9dc316d18059957533ff.webp",
  "created_at": "2023-08-02T00:57:01.000000Z",
  "updated_at": "2023-08-02T00:57:01.000000Z",
  "deleted_at": null,
  "images": [
    {
      "id": 1,
      "src": {
        "full_src": "http://localhost:8989/storage/images/2af6eaf0a7be9dc316d18059957533ff.webp",
        "name": "2af6eaf0a7be9dc316d18059957533ff.webp"
      },
      "created_at": "2023-08-02T00:57:01.000000Z",
      "updated_at": "2023-08-02T00:57:01.000000Z"
    },
    {
      "id": 2,
      "src": {
        "full_src": "http://localhost:8989/storage/images/a16f8f6f97336804fc6b69bf5c8f3795.webp",
        "name": "a16f8f6f97336804fc6b69bf5c8f3795.webp"
      },
      "created_at": "2023-08-02T00:57:01.000000Z",
      "updated_at": "2023-08-02T00:57:01.000000Z"
    }
  ],
  "brand": {
    "id": 1,
    "name": "Samsung",
    "created_at": "2023-08-02T00:57:00.000000Z",
    "updated_at": null,
    "deleted_at": null
  }
}
```
#### Editar

Endpoint: `PUT /api/products/{id}`

Descrição: Edita as informações de um eletrodoméstico existente.

| Parâmetro   | Tipo    | Obrigatório | Descrição                    |
| ----------- | ------- | ----------- | ---------------------------- |
| name        | string  | Sim         | Nome do eletrodoméstico      |
| description | string  | Não         | Descrição do eletrodoméstico |
| voltage     | string  | Sim         | Voltage do eletrodoméstico   |
| brand_id    | integer | Sim         | ID da marca                  |
| value       | double  | Sim         | Preço do eletrodoméstico     |

**Exemplo de resposta de sucesso (200 OK):**

```json
{
    "status":"success",
    "message":"Salvo com sucesso!"
}
```
**Exemplo de resposta de erro (422 ERROR):**

```json
{
    "status":"error",
    "message":"Erro ao salvar!"
}
```

#### Excluir

Endpoint: `DELETE /api/products/{id}`

Descrição: Exclui um eletrodoméstico do sistema.

**Exemplo de resposta de sucesso (200 OK):**

```json
{
    "status":"success",
    "message":"Produto excluido com sucesso!"
}
```
**Exemplo de resposta de erro (404 ERROR):**

```json
{
    "status":"error",
    "message":"Produto não encontrado!"
}
```

### Endpoint Marcas

#### Listar

Endpoint: `GET /api/brands`

Descrição: Retorna a lista de todas as marcas cadastradas.

**Exemplo de resposta de sucesso (200 OK):**

```json
[
    {
      "id": 1,
      "name": "Samsung",
      "created_at": "2023-08-02T00:57:00.000000Z",
      "updated_at": "2023-08-02T00:57:00.000000Z",
      "deleted_at": null
    },
    {
      "id": 2,
      "name": "LG",
      "created_at": "2023-08-02T00:57:00.000000Z",
      "updated_at": "2023-08-02T00:57:00.000000Z",
      "deleted_at": null
    },
    {
      "id": 3,
      "name": "Electrolux",
      "created_at": "2023-08-02T00:57:00.000000Z",
      "updated_at": "2023-08-02T00:57:00.000000Z",
      "deleted_at": null
    },
    {
      "id": 4,
      "name": "Brastemp",
      "created_at": "2023-08-02T00:57:00.000000Z",
      "updated_at": "2023-08-02T00:57:00.000000Z",
      "deleted_at": null
    },
    {
      "id": 5,
      "name": "Philips",
      "created_at": "2023-08-02T00:57:00.000000Z",
      "updated_at": "2023-08-02T00:57:00.000000Z",
      "deleted_at": null
    }
]
```
**Exemplo de resposta de erro (404 ERROR):**

```json
{
    "status":"error",
    "message":"Produto não encontrado!"
}
```
#### Cadastrar

Endpoint: `POST /api/brands`
Endpoint: `POST /api/brands`

Descrição: Cadastra uma nova marca no sistema.
Descrição: Cadastra uma nova marca no sistema.

**Exemplo de resposta de sucesso (200 OK):**
**Exemplo de resposta de sucesso (200 OK):**

```json
{
    "status":"success",
    "message":"Salvo com sucesso!"
}
```
**Exemplo de resposta de erro (422 ERROR):**
```json
{
    "status":"success",
    "message":"Salvo com sucesso!"
}
```
**Exemplo de resposta de erro (422 ERROR):**

```json
{
    "status":"error",
    "message":"Erro ao salvar!"
}
```
```json
{
    "status":"error",
    "message":"Erro ao salvar!"
}
```

#### Exibir
#### Exibir

Endpoint: `GET /api/brands/{id}`
Endpoint: `GET /api/brands/{id}`

Descrição: Exibe os detalhes de uma marca específica.
Descrição: Exibe os detalhes de uma marca específica.

**Exemplo de resposta de sucesso (200 OK):**
**Exemplo de resposta de sucesso (200 OK):**

```json
{
    "status":"success",
    "message":"Salvo com sucesso!"
}
```
**Exemplo de resposta de erro (422 ERROR):**
```json
{
    "status":"success",
    "message":"Salvo com sucesso!"
}
```
**Exemplo de resposta de erro (422 ERROR):**

```json
{
    "status":"error",
    "message":"Erro ao salvar!"
}
```
```json
{
    "status":"error",
    "message":"Erro ao salvar!"
}
```

#### Editar
#### Editar

Endpoint: `PUT /api/brands/{id}`
Endpoint: `PUT /api/brands/{id}`

Descrição: Edita as informações de uma marca existente.
Descrição: Edita as informações de uma marca existente.

**Exemplo de resposta de sucesso (200 OK):**
**Exemplo de resposta de sucesso (200 OK):**

```json
{
    "id": 2,
    "name": "LG",
    "created_at": "2023-08-02T00:57:00.000000Z",
    "updated_at": "2023-08-02T00:57:00.000000Z",
    "deleted_at": null
}
```
#### Excluir
```json
{
    "id": 2,
    "name": "LG",
    "created_at": "2023-08-02T00:57:00.000000Z",
    "updated_at": "2023-08-02T00:57:00.000000Z",
    "deleted_at": null
}
```
#### Excluir

Endpoint: `DELETE /api/brands/{id}`
Endpoint: `DELETE /api/brands/{id}`

Descrição: Exclui uma marca do sistema.
Descrição: Exclui uma marca do sistema.

**Exemplo de resposta de sucesso (200 OK):**
**Exemplo de resposta de sucesso (200 OK):**

```json
{
    "status":"success",
    "message":"Produto excluido com sucesso!"
}
```
**Exemplo de resposta de erro (404 ERROR):**
```json
{
    "status":"success",
    "message":"Produto excluido com sucesso!"
}
```
**Exemplo de resposta de erro (404 ERROR):**

```json
{
    "status":"error",
    "message":"Produto não encontrado!"
}
```
```json
{
    "status":"error",
    "message":"Produto não encontrado!"
}
```
