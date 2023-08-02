import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: () => import(/* webpackChunkName: "products" */ '@/views/products/ProductsView.vue'),
    },
    {
      path: '/products/create',
      name: 'products.create',
      component: () => import(/* webpackChunkName: "products" */ '@/views/products/ProductCreateView.vue'),
    },
    {
      path: '/products/edit/:id',
      name: 'products.edit',
      component: () => import(/* webpackChunkName: "products" */ '@/views/products/ProductCreateView.vue'),
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import(/* webpackChunkName: "brands" */ '@/views/brands/BrandsView.vue'),
    },
    {
      path: '/brands/create',
      name: 'brands.create',
      component: () => import(/* webpackChunkName: "brands" */ '@/views/brands/BrandCreateView.vue'),
    },
    {
      path: '/brands/edit/:id',
      name: 'brands.edit',
      component: () => import(/* webpackChunkName: "brands" */ '@/views/brands/BrandCreateView.vue'),
    },
  ]
})

export default router
