import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/AddUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUser
    }
  ]
})

export default router
