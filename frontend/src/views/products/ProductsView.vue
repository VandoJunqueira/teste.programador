<template>
    <div>
        <h3 class="mt-3">Eletrodomésticos</h3>
        <div class="d-flex justify-content-between mt-3">
            <input type="text">
            <router-link class="btn btn-primary" :to="{ name: 'products.create' }">
                + Cadastrar
            </router-link>
        </div>

        <div class="card mt-3">
            <div class="card-body">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Valor</th>
                            <th scope="col" style="width: 150px;">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products.data" :key="product.id">
                            <th scope="row" class="text-center">{{ product.id }}</th>
                            <td>{{ product.name }}</td>
                            <td>{{ product.brand.name }}</td>
                            <td class="text-left">R$ {{ product.value }}</td>
                            <td>
                                <router-link class="btn btn-primary m-1"
                                    :to="{ name: 'products.edit', params: { id: product.id } }">
                                    <font-awesome-icon icon="edit" />
                                </router-link>
                                <button class="btn-danger m-1 btn" @click="destroy(product.id)">
                                    <font-awesome-icon icon="trash" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav class="d-flex justify-content-center">
                    <ul class="pagination">
                        <li class="page-item" :class="{ 'active': link === products.current_page }"
                            v-for="link in    products.last_page   " :key="link.label">
                            <a class="page-link" @click="list(link)">{{ link }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            products: {},
        };
    },
    methods: {
        async list(page = 1) {


            if (page != 1) { this.$router.push({ path: '/', query: { page: page } }) }

            this.$http
                .get('/products?page=' + page)
                .then((response) => {
                    let data = response.data;
                    this.products = data.products
                });
        },
        destroy(id) {

            this.$swal({
                title: 'Atenção!',
                text: 'Você realmente deseja excluir esse item? Essa ação não pode ser desfeita',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'SIM',
                cancelButtonText: 'Cancelar',
                preConfirm: () => {
                    this.$http.delete('products/' + id)
                        .then(response => {
                            this.$util.toast(response.data)
                            this.list()
                        })
                        .catch(error => {
                            if (error.response && (error.response.status === 422 || error.response.status === 404)) {
                                this.$util.toast(error.response.data)
                            }
                        });
                }
            })

        },
    },
    mounted() {
        this.list(this.$route.query.page ?? 1)
    }
};
</script>