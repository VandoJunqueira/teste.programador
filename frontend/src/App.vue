
<template>
  <div class="container-fluid p-0">

    <NavBar />


    <div class="container pb-5">
      <RouterView />
    </div>

    <div v-if="this.$store.getters.getPageLoading"
      class="loading-backdrop position-fixed position-absolute top-0 bottom-0 w-100 h-100 bg-white d-flex justify-content-center align-items-center">

      <div class="position-absolute text-center loading-page">
        <!-- <h3 class="mb-3">RANCH SORTING SYSTEM</h3> -->
        <div class="loading-icon"> </div>
        <img height="80" src="./assets/img/loading.gif" alt />
        <div class="text-center mt-2">Carregando...</div>
      </div>
    </div>
  </div>
</template>

<style scope>
.loading-backdrop {
  z-index: 1000;
}
</style>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  },
}
</script>


