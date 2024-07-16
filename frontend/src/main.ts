import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'

import App from './App.vue'
import router from './router'

import { createClient } from '@hey-api/client-fetch'

createClient({
  baseUrl: 'http://localhost:8000'
})

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8000/'

app.use(createPinia())
app.use(router)

app.mount('#app')
