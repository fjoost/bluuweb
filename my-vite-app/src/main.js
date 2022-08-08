import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// #1 importar router
import router from '../src/router'

import { createPinia } from 'pinia';

// 2# Le decimos a la App que use nuestro router
createApp(App).use(router).use(createPinia()).mount('#app')
