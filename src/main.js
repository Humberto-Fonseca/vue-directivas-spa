// src/main.js
// Punto de entrada de la aplicación Vue 3
// Importamos Vue, el router y los estilos globales

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css'

// Crear la instancia de la app, registrar el router y montar en #app
const app = createApp(App)
app.use(router)
app.mount('#app')
