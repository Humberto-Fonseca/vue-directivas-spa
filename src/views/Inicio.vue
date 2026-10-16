<!-- src/views/Inicio.vue -->
<!-- Vista de inicio: presentación del proyecto y lista de directivas -->
<template>
  <div class="view-container">
    <!-- Cabecera de la vista de inicio -->
    <div class="view-header">
      <div class="directive-badge">📚 Unidad 3 – Estructuras de Control</div>
      <h1>Directivas de Control en Vue 3</h1>
      <p class="description">
        Este sitio es un <strong>proyecto académico</strong> que documenta y demuestra las
        principales directivas de control de Vue 3 de manera interactiva. Cada ruta explica
        una directiva con código de ejemplo funcional que puedes explorar directamente
        en el navegador.
      </p>
    </div>

    <!-- ¿Qué es una directiva? -->
    <section class="section">
      <h2 class="section-title">¿Qué son las directivas en Vue?</h2>
      <p>
        Las <strong>directivas</strong> son atributos especiales que comienzan con el prefijo
        <code style="font-family: var(--font-code); color: var(--color-accent);">v-</code>.
        Permiten aplicar comportamientos reactivos al DOM de forma declarativa, sin
        manipularlo directamente con JavaScript.
      </p>
      <p>
        Vue incluye un conjunto de directivas integradas (<em>built-in</em>) que cubren
        los casos más comunes: renderizado condicional, iteración sobre listas, enlace
        de atributos, manejo de eventos y más.
      </p>
    </section>

    <!-- Tarjetas de navegación a cada directiva -->
    <section class="section">
      <h2 class="section-title">Directivas cubiertas en este proyecto</h2>
      <div class="card-grid" role="list">

        <router-link to="/v-if" class="dir-card" id="card-v-if" role="listitem">
          <div class="dir-card-badge">v-if / v-else-if / v-else</div>
          <h3>Renderizado Condicional</h3>
          <p>Agrega o elimina elementos del DOM según una condición booleana.</p>
          <span class="dir-card-cta">Ver ejemplo →</span>
        </router-link>

        <router-link to="/v-show" class="dir-card" id="card-v-show" role="listitem">
          <div class="dir-card-badge">v-show</div>
          <h3>Visibilidad con CSS</h3>
          <p>Alterna la visibilidad de un elemento cambiando su propiedad <code>display</code>.</p>
          <span class="dir-card-cta">Ver ejemplo →</span>
        </router-link>

        <router-link to="/v-for" class="dir-card" id="card-v-for" role="listitem">
          <div class="dir-card-badge">v-for</div>
          <h3>Renderizado de Listas</h3>
          <p>Itera sobre un arreglo u objeto y genera elementos HTML por cada ítem.</p>
          <span class="dir-card-cta">Ver ejemplo →</span>
        </router-link>

        <router-link to="/v-bind-key" class="dir-card" id="card-v-bind-key" role="listitem">
          <div class="dir-card-badge">v-bind:key / :key</div>
          <h3>Clave de Seguimiento</h3>
          <p>Proporciona a Vue una identidad única por elemento para un DOM virtual eficiente.</p>
          <span class="dir-card-cta">Ver ejemplo →</span>
        </router-link>

      </div>
    </section>

    <!-- Tecnologías usadas -->
    <section class="section">
      <h2 class="section-title">Tecnologías del proyecto</h2>
      <div class="tech-list">
        <span class="tech-badge">⚡ Vite 6</span>
        <span class="tech-badge">💚 Vue 3</span>
        <span class="tech-badge">🔀 Vue Router 4</span>
        <span class="tech-badge">📝 Composition API</span>
        <span class="tech-badge">🎨 Vanilla CSS</span>
        <span class="tech-badge">🚀 GitHub Pages</span>
      </div>
    </section>
  </div>
</template>

<script setup>
// Esta vista no requiere lógica reactiva adicional
// La navegación se maneja con router-link (no hay recargas de página)
</script>

<style scoped>
/* --- Tarjetas de directiva --- */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-md);
}

.dir-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
  text-decoration: none;
  color: var(--color-text);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.dir-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary-glow) 0%, transparent 60%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.dir-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
  color: var(--color-text);
}

.dir-card:hover::before { opacity: 1; }

.dir-card-badge {
  font-family: var(--font-code);
  font-size: 0.75rem;
  color: var(--color-accent);
  background: rgba(0, 212, 170, 0.1);
  border: 1px solid rgba(0, 212, 170, 0.2);
  border-radius: 4px;
  padding: 3px 10px;
  align-self: flex-start;
}

.dir-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.dir-card p {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
  flex: 1;
}

.dir-card-cta {
  font-size: 0.8rem;
  color: var(--color-primary-light);
  font-weight: 500;
  margin-top: auto;
}

/* --- Tecnologías --- */
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.tech-badge {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.tech-badge:hover {
  border-color: var(--color-primary);
  color: var(--color-primary-light);
}
</style>
