# SUMÁRIO

1. Instalação Passo a passo
    - 1.1. Clone Repositório
    - 1.2. Crie o Arquivo .env
    - 1.3. Atualize as variáveis de ambiente do arquivo .env
    - 1.4. Suba os containers do projeto
    - 1.5. Acessar o container
    - 1.6. Instalar as dependências do projeto
    - 1.7. Gerar a key do projeto Laravel
    - 1.8. Acessar o projeto
2. Migrates e Seeders
    - 2.1. Executar migrate
    - 2.2. Popular a tabela com o seed
3. Rotas
    - 3.1. Eletrodomesticos
        - 3.1.1. Listar
        - 3.1.2. Cadastrar
        - 3.1.3. Exibir
        - 3.1.4. Editar
        - 3.1.5. Excluir
    - 3.2. Marcas
        - 3.2.1 Listar
        - 3.2.2 Cadastrar
        - 3.2.3 Exibir
        - 3.2.4 Editar
        - 3.2.5 Excluir
4. Acessar o projeto


## Instalação Passo a passo

### Clone Repositório

```sh
git clone https://github.com/VandoJunqueira/teste.programador.git
```

### Crie o Arquivo .env

```sh
cp .env.example .env
```

### Atualize as variáveis de ambiente do arquivo .env

```sh
APP_NAME="Especializa Ti"
APP_URL=http://localhost:8989

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
