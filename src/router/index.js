// src/router/index.js
// Configuración de Vue Router para la SPA de directivas Vue 3
// Se usa createWebHashHistory para evitar errores 404 en GitHub Pages,
// ya que GitHub Pages no soporta rutas de historial HTML5 sin configuración de servidor.

import { createRouter, createWebHashHistory } from 'vue-router'

// Importación de las vistas (lazy-loading para mejor rendimiento)
import Inicio from '../views/Inicio.vue'
import VIfView from '../views/VIfView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VBindKeyView from '../views/VBindKeyView.vue'

// Definición de las rutas de la aplicación
const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio,
    meta: { title: 'Inicio – Directivas Vue 3' }
  },
  {
    path: '/v-if',
    name: 'v-if',
    component: VIfView,
    meta: { title: 'v-if / v-else-if / v-else – Directivas Vue 3' }
  },
  {
    path: '/v-show',
    name: 'v-show',
    component: VShowView,
    meta: { title: 'v-show – Directivas Vue 3' }
  },
  {
    path: '/v-for',
    name: 'v-for',
    component: VForView,
    meta: { title: 'v-for – Directivas Vue 3' }
  },
  {
    path: '/v-bind-key',
    name: 'v-bind-key',
    component: VBindKeyView,
    meta: { title: 'v-bind:key – Directivas Vue 3' }
  }
]

// Crear la instancia del router con modo hash
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // Scroll suave al cambiar de ruta
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Actualizar el título de la página en cada navegación
router.afterEach((to) => {
  document.title = to.meta.title || 'Directivas Vue 3'
})

export default router
