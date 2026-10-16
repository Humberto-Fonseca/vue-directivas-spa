<!-- src/views/VShowView.vue -->
<!-- Vista que demuestra la directiva v-show y la diferencia con v-if -->
<template>
  <div class="view-container">
    <!-- Cabecera -->
    <div class="view-header">
      <div class="directive-badge">👁️ Directiva de visibilidad</div>
      <h1>v-show</h1>
      <p class="description">
        <code class="inline-code">v-show</code> muestra u oculta un elemento
        modificando únicamente su propiedad CSS <code class="inline-code">display: none</code>.
        El elemento <strong>siempre existe en el DOM</strong>, a diferencia de
        <code class="inline-code">v-if</code> que lo agrega/elimina completamente.
        Ideal para alternar contenido con frecuencia, ya que evita el costo de
        crear/destruir elementos.
      </p>
    </div>

    <!-- Demo interactiva -->
    <section class="section" id="demo-v-show">
      <h2 class="section-title">Ejemplo interactivo: Panel de información</h2>
      <div class="demo-box">

        <!-- Botón que alterna la visibilidad con v-show -->
        <div class="btn-group">
          <button
            class="btn btn-primary"
            id="btn-toggle-panel"
            @click="mostrarPanel = !mostrarPanel"
          >
            {{ mostrarPanel ? '🙈 Ocultar panel' : '👁️ Mostrar panel' }}
          </button>
        </div>

        <!-- Estado actual del toggle -->
        <p class="state-indicator">
          Estado: <code class="inline-code">mostrarPanel = {{ mostrarPanel }}</code>
        </p>

        <!--
          v-show: el panel siempre está en el DOM.
          Cuando mostrarPanel es false, Vue aplica style="display: none;"
          Puedes verificarlo con las DevTools del navegador (inspeccionar elemento).
        -->
        <div v-show="mostrarPanel" class="info-panel" id="panel-info">
          <div class="panel-header">
            <span class="panel-icon">📋</span>
            <h3>Panel de información</h3>
          </div>
          <div class="panel-body">
            <p>
              Este panel siempre existe en el DOM. Cuando está "oculto",
              Vue le aplica <code class="inline-code">display: none</code> pero
              puedes encontrarlo con las DevTools del navegador.
            </p>
            <ul class="fact-list">
              <li>✅ El elemento <strong>permanece en el DOM</strong> aunque esté oculto</li>
              <li>✅ Ideal para alternar contenido <strong>frecuentemente</strong></li>
              <li>✅ Menor costo computacional que crear/destruir con v-if</li>
              <li>✅ El ciclo de vida del componente <strong>no se interrumpe</strong></li>
            </ul>
          </div>
        </div>

        <!-- Nota sobre la diferencia v-show vs v-if -->
        <div class="note-box">
          <strong>📌 v-show vs v-if:</strong>
          <ul style="margin-top: 8px; padding-left: 20px; line-height: 2">
            <li>
              <code class="inline-code">v-if</code> — <strong>agrega/elimina del DOM</strong>.
              Costo alto al alternar. Úsalo si la condición cambia pocas veces.
            </li>
            <li>
              <code class="inline-code">v-show</code> — solo cambia <strong>display:none</strong>.
              El elemento siempre existe. Úsalo si necesitas alternar con frecuencia.
            </li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Bloque de código -->
    <section class="section" id="codigo-v-show">
      <h2 class="section-title">Código del ejemplo</h2>
      <div class="code-block">
        <div class="code-block-header">
          <span>VShowView.vue — fragmento del template</span>
          <span class="lang-badge">Vue 3 SFC</span>
        </div>
        <pre><code>{{ codigoEjemplo }}</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variable reactiva que controla la visibilidad del panel
// true  → Vue NO aplica display:none  → panel visible
// false → Vue aplica display:none     → panel oculto (sigue en el DOM)
const mostrarPanel = ref(true)

// Código del ejemplo para el bloque <pre><code>
const codigoEjemplo = `<script setup>
import { ref } from 'vue'

// true = visible, false = oculto (con display:none en CSS)
const mostrarPanel = ref(true)
<\/script>

<template>
  <!-- Botón que alterna el valor de mostrarPanel -->
  <button @click="mostrarPanel = !mostrarPanel">
    {{ mostrarPanel ? 'Ocultar panel' : 'Mostrar panel' }}
  </button>

  <!--
    v-show: el elemento SIEMPRE existe en el DOM.
    Vue solo modifica style="display: none" según la condición.
    
    Diferencia clave con v-if:
    - v-if  → AGREGA o ELIMINA el nodo del DOM
    - v-show → solo cambia display: none / display: block
  -->
  <div v-show="mostrarPanel" class="info-panel">
    <p>Este panel existe en el DOM aunque esté oculto.</p>
  </div>
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

.state-indicator {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
}

/* Panel que se muestra/oculta con v-show */
.info-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
  animation: fadeSlideIn 0.25s ease;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 14px 20px;
  background: rgba(108, 99, 255, 0.08);
  border-bottom: 1px solid var(--color-border);
}

.panel-icon { font-size: 1.25rem; }

.panel-header h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.panel-body {
  padding: var(--space-lg) var(--space-xl);
}

.panel-body p { color: var(--color-text-muted); }

.fact-list {
  list-style: none;
  padding: 0;
  margin-top: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.fact-list li {
  font-size: 0.875rem;
  color: var(--color-text);
  padding: 6px 0;
  border-bottom: 1px solid var(--color-border);
}

.fact-list li:last-child { border-bottom: none; }
</style>
