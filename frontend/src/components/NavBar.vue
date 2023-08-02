<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container">
            <a class="navbar-brand" href="/">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Produtos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'products' }">
                                    Listar
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'products.create' }">
                                    Cadastrar
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'brands' }">
                                    Listar
                                </router-link>
                            </li>
                            <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
};
</script>