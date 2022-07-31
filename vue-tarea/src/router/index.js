import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import IncreaseView from '@/views/IncreaseView.vue'
import DecreaseView from '@/views/DecreaseView.vue'


const routes = [
  {
    path: '/Balance',
    name: 'AccountView',
    component: AccountView
  },
  {
    path: '/Increase',
    name: 'IncreaseView',
    component: IncreaseView
  },
  {
    path: '/Decrease',
    name: 'DecreaseView',
    component: DecreaseView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
