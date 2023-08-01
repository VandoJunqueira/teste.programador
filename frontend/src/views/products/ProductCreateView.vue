<template>
    <div>
        <div class="d-flex justify-content-between mt-3">
            <h3>Cadastrar Eletrodoméstico</h3>
        </div>

        <form id="form">
            <div class="card mt-3">
                <div class="card-body">


                    <div class="row justify-content-center">
                        <div class="col-8">
                            <FileUploadInput :images="product.images" @response="getImages" />
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="name" class="form-label fw-bold">Título <span
                                                class="text-danger">*</span></label>
                                        <input v-model="product.name" type="text" class="form-control form-control-lg"
                                            id="name" placeholder="Digite o nome do Eletrodoméstico" required>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="brand" class="form-label fw-bold">Marca <span
                                                class="text-danger">*</span></label>
                                        <select v-model="product.brand_id" class="form-select form-select-lg mb-3"
                                            id="brand" required>
                                            <option value="" selected>Selecione...</option>
                                            <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                                                {{ brand.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="value" class="form-label fw-bold">Preço <span
                                                class="text-danger">*</span></label>
                                        <input v-model="product.value" type="text" class="form-control form-control-lg"
                                            id="value" v-money.lazy="money" required>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="voltage" class="form-label fw-bold">Voltagem <span
                                                class="text-danger">*</span></label>
                                        <select v-model="product.voltage" class="form-select form-select-lg mb-3"
                                            id="voltage" required>
                                            <option value="" selected>Selecione...</option>
                                            <option value="bivolt">bivolt</option>
                                            <option value="110V">110V</option>
                                            <option value="220V">220V</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="description" class="form-label fw-bold">Descrição</label>

                                        <textarea v-model="product.description" class="form-control" id="description"
                                            rows="4"></textarea>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary btn-lg" @click="save">Salvar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
import FileUploadInput from '../../components/FileUploadInput.vue';
import { VMoney } from 'v-money'
import qs from 'qs';

export default {
    components: {
        VMoney, FileUploadInput
    },
    data() {
        return {
            product: {},
            brands: {},
            images: [],
            money: this.$util.money,
        };
    },
    methods: {
        async init() {

            let url = '/products/create'

            if (this.product_id != null) { url = '/products/' + this.product_id + '/edit' }

            this.$http
                .get(url)
                .then((response) => {
                    let data = response.data;
                    this.product = data.product ?? {}
                    this.brands = data.brands ?? {}



                });
        },
        async save(event) {

            event.preventDefault()

            let validate = this.$util.validate('form')

            if (validate) {
                this.setImages()
                // Se o product_id for null, significa que esta cadastrando um novo produto
                if (this.product_id == null) {
                    this.$http
                        .post('/products', qs.stringify(this.product))
                        .then((response) => {
                            let data = response.data;

                            // this.$router.push({ name: 'products' })
                        });
                } else {
                    this.$http
                        .put('/products/' + this.product_id, qs.stringify(this.product))
                        .then((response) => {
                            let data = response.data;

                            // this.$router.push({ name: 'products' })
                        });
                }



            }
        },
        setImages() {
            this.product.file_name = [];

            if (this.product.images) {
                this.product.images.map((image) => {
                    this.product.file_name.push(image.src.name)
                })
            }

            if (this.images) {
                this.images.map((image) => {
                    this.product.file_name.push(image.file_name)
                })
            }
        },
        getImages(response) {
            console.log(response)
            this.images = response
        }
    },
    mounted() {
        this.product_id = this.$route.params.id != 'undefined' ? this.$route.params.id : null

        this.init()
    },
    directives: { money: VMoney }
};
</script>