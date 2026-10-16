<!-- src/App.vue -->
<!-- Componente raíz: contiene la barra de navegación y el <router-view> -->
<template>
  <div id="app-wrapper">
    <!-- ========== BARRA DE NAVEGACIÓN ========== -->
    <nav class="navbar" role="navigation" aria-label="Menú principal">
      <div class="navbar-inner">
        <!-- Logo / Marca -->
        <router-link to="/" class="navbar-brand" id="nav-brand">
          <div class="brand-logo">V</div>
          <span>Directivas Vue 3</span>
        </router-link>

        <!-- Menú de navegación con router-link (sin <a href> ni recargas) -->
        <div class="navbar-nav" role="menubar">
          <router-link
            to="/"
            class="nav-link"
            id="nav-inicio"
            role="menuitem"
            exact-active-class="router-link-exact-active"
          >
            🏠 Inicio
          </router-link>

          <router-link
            to="/v-if"
            class="nav-link"
            id="nav-v-if"
            role="menuitem"
          >
            <span class="badge">v-if</span>
            Condicional
          </router-link>

          <router-link
            to="/v-show"
            class="nav-link"
            id="nav-v-show"
            role="menuitem"
          >
            <span class="badge">v-show</span>
            Visibilidad
          </router-link>

          <router-link
            to="/v-for"
            class="nav-link"
            id="nav-v-for"
            role="menuitem"
          >
            <span class="badge">v-for</span>
            Bucle
          </router-link>

          <router-link
            to="/v-bind-key"
            class="nav-link"
            id="nav-v-bind-key"
            role="menuitem"
          >
            <span class="badge">:key</span>
            Clave
          </router-link>
        </div>
      </div>
    </nav>

    <!-- ========== CONTENIDO DE LA RUTA ACTIVA ========== -->
    <!-- router-view inyecta el componente correspondiente a la ruta actual -->
    <main class="main-content" id="main">
      <router-view v-slot="{ Component }">
        <!-- Transición suave entre vistas -->
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- ========== PIE DE PÁGINA ========== -->
    <footer class="app-footer">
      <p>Unidad 3 · Directivas Vue 3 · Humberto Fonseca · {{ currentYear }}</p>
    </footer>
  </div>
</template>

<script setup>
// Composition API con <script setup>
// Usamos computed para el año actual del footer
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
/* Transición entre páginas */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
