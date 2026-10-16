<!-- src/views/VIfView.vue -->
<!-- Vista que demuestra las directivas v-if, v-else-if y v-else -->
<template>
  <div class="view-container">
    <!-- Cabecera -->
    <div class="view-header">
      <div class="directive-badge">🔀 Directiva de control</div>
      <h1>v-if / v-else-if / v-else</h1>
      <p class="description">
        <code class="inline-code">v-if</code> renderiza un elemento en el DOM
        <em>solo si</em> la condición es verdadera. Cuando la condición cambia, Vue
        <strong>agrega o elimina</strong> el elemento del DOM real (no solo lo oculta).
        Úsalo cuando el elemento se muestra/oculta pocas veces o cuando necesitas
        que el DOM esté limpio.
      </p>
    </div>

    <!-- Demo interactiva -->
    <section class="section" id="demo-v-if">
      <h2 class="section-title">Ejemplo interactivo: Evaluador de calificaciones</h2>
      <div class="demo-box">
        <!-- Control: slider de calificación -->
        <div class="control-group">
          <label for="slider-calificacion" class="control-label">
            Calificación: <strong class="score-display">{{ calificacion }}</strong> / 100
          </label>
          <input
            id="slider-calificacion"
            type="range"
            min="0"
            max="100"
            step="5"
            v-model.number="calificacion"
            class="range-slider"
          />
        </div>

        <!-- Botones de atajo -->
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" id="btn-reprobado" @click="calificacion = 45">
            Reprobar (45)
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-suficiente" @click="calificacion = 65">
            Suficiente (65)
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-bueno" @click="calificacion = 80">
            Bueno (80)
          </button>
          <button class="btn btn-secondary btn-sm" id="btn-excelente" @click="calificacion = 95">
            Excelente (95)
          </button>
        </div>

        <!-- RESULTADO con v-if / v-else-if / v-else consecutivos y correctos -->
        <!--
          REGLAS:
          • v-if     → primera condición (se evalúa primero)
          • v-else-if → condición alternativa (solo si la anterior fue falsa)
          • v-else   → fallback (si ninguna condición anterior fue verdadera)
          Los tres deben ir en elementos hermanos consecutivos.
        -->
        <div class="result-area">
          <div v-if="calificacion >= 90" class="alert alert-success" id="resultado-excelente">
            🏆 Excelente — Calificación sobresaliente ({{ calificacion }})
          </div>

          <div v-else-if="calificacion >= 75" class="alert alert-info" id="resultado-bueno">
            📘 Bueno — Calificación satisfactoria ({{ calificacion }})
          </div>

          <div v-else-if="calificacion >= 60" class="alert alert-warning" id="resultado-suficiente">
            ✏️ Suficiente — Aprobado mínimo ({{ calificacion }})
          </div>

          <div v-else class="alert alert-danger" id="resultado-reprobado">
            ❌ Reprobado — Calificación insuficiente ({{ calificacion }})
          </div>
        </div>
      </div>
    </section>

    <!-- Bloque de código -->
    <section class="section" id="codigo-v-if">
      <h2 class="section-title">Código del ejemplo</h2>
      <div class="code-block">
        <div class="code-block-header">
          <span>VIfView.vue — fragmento del template</span>
          <span class="lang-badge">Vue 3 SFC</span>
        </div>
        <pre><code>{{ codigoEjemplo }}</code></pre>
      </div>

      <div class="note-box" style="margin-top: var(--space-md)">
        <strong>⚠️ Regla importante:</strong> los bloques <code>v-else-if</code> y
        <code>v-else</code> <em>deben</em> colocarse inmediatamente después del elemento
        que tiene <code>v-if</code>. Si hay un elemento sin directiva entre ellos,
        Vue no los reconocerá como cadena condicional y producirá un error.
      </div>
    </section>
  </div>
</template>

<script setup>
// Composition API con <script setup>
import { ref } from 'vue'

// Variable reactiva que controla qué rama condicional se muestra
const calificacion = ref(75)

// Código del ejemplo que se muestra en el bloque <pre><code>
const codigoEjemplo = `<script setup>
import { ref } from 'vue'

// Variable reactiva — al cambiar, Vue re-evalúa los v-if automáticamente
const calificacion = ref(75)
<\/script>

<template>
  <!-- v-if: primera condición -->
  <div v-if="calificacion >= 90" class="alert alert-success">
    🏆 Excelente ({{ calificacion }})
  </div>

  <!-- v-else-if: condición alternativa (solo si la anterior fue falsa) -->
  <div v-else-if="calificacion >= 75" class="alert alert-info">
    📘 Bueno ({{ calificacion }})
  </div>

  <!-- v-else-if: otra condición alternativa -->
  <div v-else-if="calificacion >= 60" class="alert alert-warning">
    ✏️ Suficiente ({{ calificacion }})
  </div>

  <!-- v-else: fallback — se muestra si NINGUNA condición anterior fue true -->
  <div v-else class="alert alert-danger">
    ❌ Reprobado ({{ calificacion }})
  </div>
</template>`
</script>

<style scoped>
/* --- Controles del slider --- */
.control-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.control-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.score-display {
  font-size: 1.4rem;
  font-family: var(--font-code);
  color: var(--color-accent);
}

.range-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  max-width: 400px;
  height: 6px;
  border-radius: 3px;
  background: var(--color-border);
  outline: none;
  cursor: pointer;
}

.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  cursor: pointer;
  box-shadow: 0 0 8px var(--color-primary-glow);
  transition: box-shadow var(--transition-fast);
}

.range-slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 16px var(--color-primary-glow);
}

.result-area {
  margin-top: var(--space-sm);
}

/* Código inline */
.inline-code {
  font-family: var(--font-code);
  color: var(--color-accent);
  background: rgba(0, 212, 170, 0.1);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>
