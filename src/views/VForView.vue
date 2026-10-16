<!-- src/views/VForView.vue -->
<!-- Vista que demuestra la directiva v-for iterando sobre un arreglo de objetos -->
<template>
  <div class="view-container">
    <!-- Cabecera -->
    <div class="view-header">
      <div class="directive-badge">🔁 Directiva de iteración</div>
      <h1>v-for</h1>
      <p class="description">
        <code class="inline-code">v-for</code> itera sobre un arreglo (o un objeto)
        y genera un elemento HTML por cada ítem. Se usa cuando necesitas
        <strong>renderizar listas dinámicas</strong> de datos. La sintaxis es
        <code class="inline-code">v-for="(item, index) in colección"</code> donde
        <em>index</em> es el índice base-0 de cada elemento.
      </p>
    </div>

    <!-- Demo interactiva: tabla de cursos -->
    <section class="section" id="demo-v-for">
      <h2 class="section-title">Ejemplo interactivo: Catálogo de cursos</h2>
      <div class="demo-box">

        <!-- Filtro de categoría -->
        <div class="filter-group">
          <label for="filtro-categoria">Filtrar por categoría:</label>
          <div class="btn-group">
            <button
              v-for="cat in categorias"
              :key="cat"
              class="btn btn-sm"
              :class="categoriaActiva === cat ? 'btn-primary' : 'btn-secondary'"
              :id="`btn-cat-${cat}`"
              @click="categoriaActiva = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Lista generada con v-for -->
        <!--
          v-for="(curso, index) in cursosFiltrados"
            - curso  → el objeto actual de la iteración
            - index  → su posición (0, 1, 2, …)
          :key debe ser un identificador único (no el index)
          En esta vista usamos curso.id para que sea robusto.
        -->
        <ul class="item-list" id="lista-cursos" aria-label="Lista de cursos">
          <li
            v-for="(curso, index) in cursosFiltrados"
            :key="curso.id"
            class="curso-item"
          >
            <!-- Índice visible (base-0) -->
            <span class="item-index">{{ index }}</span>

            <!-- Icono de categoría -->
            <span class="curso-icon">{{ curso.icono }}</span>

            <!-- Información del curso -->
            <div class="curso-info">
              <strong>{{ curso.nombre }}</strong>
              <small>{{ curso.categoria }}</small>
            </div>

            <!-- Precio -->
            <span class="curso-precio">${{ curso.precio }}</span>
          </li>
        </ul>

        <!-- Estado vacío -->
        <p v-if="cursosFiltrados.length === 0" class="empty-state">
          No hay cursos en esta categoría.
        </p>

        <!-- Resumen -->
        <p class="summary-text">
          Mostrando <strong>{{ cursosFiltrados.length }}</strong> de
          <strong>{{ cursos.length }}</strong> cursos.
        </p>
      </div>
    </section>

    <!-- Bloque de código -->
    <section class="section" id="codigo-v-for">
      <h2 class="section-title">Código del ejemplo</h2>
      <div class="code-block">
        <div class="code-block-header">
          <span>VForView.vue — fragmento del template</span>
          <span class="lang-badge">Vue 3 SFC</span>
        </div>
        <pre><code>{{ codigoEjemplo }}</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Arreglo reactivo de objetos (cursos) que v-for recorrerá
const cursos = ref([
  { id: 1, nombre: 'Vue 3 desde cero',       categoria: 'Frontend', precio: 299, icono: '💚' },
  { id: 2, nombre: 'React para principiantes',categoria: 'Frontend', precio: 249, icono: '⚛️'  },
  { id: 3, nombre: 'Python & FastAPI',         categoria: 'Backend',  precio: 349, icono: '🐍' },
  { id: 4, nombre: 'Node.js con Express',      categoria: 'Backend',  precio: 279, icono: '🟩' },
  { id: 5, nombre: 'Diseño UI/UX con Figma',  categoria: 'Diseño',   precio: 199, icono: '🎨' },
  { id: 6, nombre: 'CSS Avanzado & Grid',      categoria: 'Frontend', precio: 179, icono: '🎯' },
  { id: 7, nombre: 'Docker y Kubernetes',      categoria: 'DevOps',   precio: 399, icono: '🐳' },
  { id: 8, nombre: 'PostgreSQL esencial',      categoria: 'Backend',  precio: 229, icono: '🐘' },
])

// Categorías disponibles (incluyendo "Todos")
const categorias = ['Todos', 'Frontend', 'Backend', 'Diseño', 'DevOps']
const categoriaActiva = ref('Todos')

// Propiedad computada: filtra los cursos según la categoría activa
const cursosFiltrados = computed(() =>
  categoriaActiva.value === 'Todos'
    ? cursos.value
    : cursos.value.filter(c => c.categoria === categoriaActiva.value)
)

// Código del ejemplo para el bloque <pre><code>
const codigoEjemplo = `<script setup>
import { ref } from 'vue'

// Arreglo de objetos que v-for va a recorrer
const cursos = ref([
  { id: 1, nombre: 'Vue 3 desde cero',  categoria: 'Frontend', precio: 299 },
  { id: 2, nombre: 'Python & FastAPI',  categoria: 'Backend',  precio: 349 },
  // …más cursos
])
<\/script>

<template>
  <!--
    v-for="(item, index) in colección"
      - item  → objeto actual
      - index → posición base-0 (0, 1, 2, …)
    
    SIEMPRE acompaña v-for con :key para ayudar a Vue a rastrear
    los nodos del DOM eficientemente (se detalla en la vista v-bind:key).
  -->
  <ul>
    <li
      v-for="(curso, index) in cursos"
      :key="curso.id"
    >
      <!-- Índice actual -->
      <span>[{{ index }}]</span>

      <!-- Datos del objeto -->
      <strong>{{ curso.nombre }}</strong>
      <span>{{ curso.categoria }}</span>
      <span>\${{ curso.precio }}</span>
    </li>
  </ul>
</template>`
</script>

<style scoped>
.inline-code {
  font-family: var(--font-code);
  color: var(--color-accent);
  background: rgba(0, 212, 170, 0.1);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

/* Filtros */
.filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.filter-group label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

/* Ítem de curso personalizado */
.curso-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.curso-icon { font-size: 1.25rem; }

.curso-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.curso-info strong { font-size: 0.9rem; }
.curso-info small  { font-size: 0.75rem; color: var(--color-text-muted); }

.curso-precio {
  font-family: var(--font-code);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  white-space: nowrap;
}

.empty-state {
  text-align: center;
  color: var(--color-text-muted);
  padding: var(--space-xl);
  font-style: italic;
}

.summary-text {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-align: right;
  margin: 0;
}
</style>
