import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/Login', component: Login },
    { path: '/Register', component: Register },
]

// router.push:  empuja el usuario a otra ruta
const router = createRouter({
    routes, history: createWebHistory()
})

export default router