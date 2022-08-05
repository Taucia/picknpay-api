import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/landing.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    
    component: () => import('../views/signup.vue')
  },
  {
    path: '/login',
    name: 'login',
   
    component: () => import('../views/login.vue')
  },{
    path: '/products',
    name: 'products',
   
    component: () => import( '../views/products.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
