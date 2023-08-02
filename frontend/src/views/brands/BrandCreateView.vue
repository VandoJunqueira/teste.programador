<template>
    <div>
        <div class="d-flex justify-content-between mt-3">
            <h3>Cadastrar Marcas</h3>
        </div>

        <form id="form">
            <div class="card mt-3">
                <div class="card-body">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label for="name" class="form-label fw-bold">Título <span
                                                class="text-danger">*</span></label>
                                        <input v-model="brand.name" type="text" class="form-control form-control-lg"
                                            id="name" placeholder="Digite o nome da Marca" required>
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
import qs from 'qs';

export default {
    data() {
        return {
            brand: {},
        };
    },
    methods: {
        async init() {
            if (this.brand_id != null) {
                this.$store.commit('setLoading', { status: true })
                this.$http
                    .get('/brands/' + this.brand_id)
                    .then((response) => {
                        let data = response.data;
                        this.brand = data ?? {}
                        this.$store.commit('setLoading', { status: false })
                    });
            }


        },
        async save(event) {

            event.preventDefault()

            let validate = this.$util.validate('form')

            if (validate) {

                this.$store.commit('setLoading', { status: true })

                // Se o brand_id for null, significa que esta cadastrando uma nova marca
                if (this.brand_id == null) {
                    this.$http
                        .post('/brands', qs.stringify(this.brand))
                        .then((response) => {
                            let data = response.data;
                            this.$util.toast(data)
                            this.$store.commit('setLoading', { status: false })
                            this.$router.push({ name: 'brands' })
                        }).catch(error => {
                            if (error.response && (error.response.status === 422 || error.response.status === 404)) {
                                this.$util.toast(error.response.data)
                                this.$store.commit('setLoading', { status: false })
                            }
                        });
                } else {
                    this.$http
                        .put('/brands/' + this.brand_id, qs.stringify(this.brand))
                        .then((response) => {
                            let data = response.data;
                            this.$util.toast(data)
                            this.$store.commit('setLoading', { status: false })
                            this.$router.push({ name: 'brands' })
                        }).catch(error => {
                            if (error.response && (error.response.status === 422 || error.response.status === 404)) {
                                this.$util.toast(error.response.data)
                                this.$store.commit('setLoading', { status: false })
                            }
                        });
                }



            }
        },
    },
    mounted() {
        this.brand_id = this.$route.params.id != 'undefined' ? this.$route.params.id : null

        this.init()
    }
};
</script>