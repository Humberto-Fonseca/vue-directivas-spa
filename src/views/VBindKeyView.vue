<!-- src/views/VBindKeyView.vue -->
<!-- Vista que demuestra el uso de v-bind:key dentro de un bucle v-for -->
<template>
  <div class="view-container">
    <!-- Cabecera -->
    <div class="view-header">
      <div class="directive-badge">🔑 Directiva de enlace</div>
      <h1>v-bind:key (o :key)</h1>
      <p class="description">
        <code class="inline-code">:key</code> es un atributo especial que proporciona
        a Vue un <strong>identificador único</strong> para cada nodo generado por
        <code class="inline-code">v-for</code>. Sin él, Vue reutiliza nodos de forma
        incorrecta al reordenar o eliminar ítems, produciendo bugs de estado difíciles
        de detectar. La clave debe ser un <strong>ID único</strong>, nunca el índice del arreglo.
      </p>
    </div>

    <!-- Sección explicativa: ¿por qué no usar el índice? -->
    <section class="section" id="por-que-key">
      <h2 class="section-title">¿Por qué NO usar el índice como key?</h2>
      <div class="note-box">
        <strong>⚠️ Problema con <code>:key="index"</code>:</strong>
        Si usas el índice y eliminas el ítem #0, el antiguo ítem #1 pasa a ser
        el nuevo #0 — Vue cree que el primer elemento no cambió y reutiliza su
        nodo DOM, causando que el <em>estado interno</em> (inputs, checkboxes, animaciones)
        quede asociado al ítem incorrecto.
        <br /><br />
        <strong>✅ Solución:</strong> usar un <code>id</code> único e inmutable
        (como un UUID o un contador incremental) para que Vue siempre sepa
        qué elemento es cuál.
      </div>
    </section>

    <!-- Demo interactiva: lista dinámica con add/delete -->
    <section class="section" id="demo-v-bind-key">
      <h2 class="section-title">Ejemplo interactivo: Lista de tareas dinámica</h2>
      <div class="demo-box">

        <!-- Formulario para agregar tarea -->
        <div class="add-form">
          <input
            id="input-nueva-tarea"
            v-model="nuevaTarea"
            type="text"
            class="form-input"
            placeholder="Nombre de la tarea…"
            maxlength="50"
            @keyup.enter="agregarTarea"
          />
          <button
            class="btn btn-primary"
            id="btn-agregar-tarea"
            @click="agregarTarea"
            :disabled="!nuevaTarea.trim()"
          >
            ➕ Agregar
          </button>
        </div>

        <!-- Lista dinámica con v-for y :key="tarea.id" -->
        <!--
          :key="tarea.id"
            - tarea.id es un contador incremental único
            - NUNCA usamos :key="index" porque al eliminar ítems
              el índice cambia y Vue confunde los nodos del DOM
        -->
        <ul class="item-list" id="lista-tareas" aria-label="Lista de tareas">
          <li
            v-for="(tarea, index) in tareas"
            :key="tarea.id"
            class="tarea-item"
          >
            <!-- Índice actual (base-0) -->
            <span class="item-index">{{ index }}</span>

            <!-- ID único de la tarea (su key real) -->
            <span class="tarea-id" title="ID único usado como :key">
              id:{{ tarea.id }}
            </span>

            <!-- Checkbox de completado -->
            <input
              type="checkbox"
              :id="`check-tarea-${tarea.id}`"
              v-model="tarea.completada"
              class="tarea-check"
            />

            <!-- Nombre de la tarea -->
            <span class="tarea-nombre" :class="{ completada: tarea.completada }">
              {{ tarea.nombre }}
            </span>

            <!-- Botón eliminar -->
            <button
              class="btn btn-danger btn-sm tarea-delete"
              :id="`btn-del-${tarea.id}`"
              @click="eliminarTarea(tarea.id)"
              title="Eliminar tarea"
            >
              🗑️
            </button>
          </li>
        </ul>

        <!-- Estado vacío -->
        <p v-if="tareas.length === 0" class="empty-state">
          No hay tareas. ¡Agrega una usando el campo de arriba!
        </p>

        <!-- Resumen -->
        <div class="tareas-resumen" v-if="tareas.length > 0">
          <span>Total: <strong>{{ tareas.length }}</strong></span>
          <span>Completadas: <strong>{{ tareasCompletadas }}</strong></span>
          <span>Pendientes: <strong>{{ tareas.length - tareasCompletadas }}</strong></span>
        </div>
      </div>
    </section>

    <!-- Bloque de código -->
    <section class="section" id="codigo-v-bind-key">
      <h2 class="section-title">Código del ejemplo</h2>
      <div class="code-block">
        <div class="code-block-header">
          <span>VBindKeyView.vue — fragmento del template</span>
          <span class="lang-badge">Vue 3 SFC</span>
        </div>
        <pre><code>{{ codigoEjemplo }}</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Contador incremental para generar IDs únicos
// Este ID es inmutable: una vez asignado, no cambia aunque el arreglo se reordene
let contadorId = 4

// Arreglo reactivo de tareas con IDs únicos
const tareas = ref([
  { id: 1, nombre: 'Leer la documentación de Vue 3', completada: true  },
  { id: 2, nombre: 'Entender el Virtual DOM',          completada: false },
  { id: 3, nombre: 'Practicar las directivas',         completada: false },
])

// Estado del input
const nuevaTarea = ref('')

// Función para agregar una nueva tarea
function agregarTarea() {
  const nombre = nuevaTarea.value.trim()
  if (!nombre) return

  // Usamos un ID incremental único (NO el index del arreglo)
  tareas.value.push({
    id: contadorId++,      // ← Este es el :key que Vue usará
    nombre,
    completada: false,
  })

  nuevaTarea.value = '' // Limpiar el input
}

// Función para eliminar una tarea por su ID único
function eliminarTarea(id) {
  // filter devuelve un nuevo arreglo sin la tarea eliminada
  tareas.value = tareas.value.filter(t => t.id !== id)
}

// Computed: número de tareas completadas
const tareasCompletadas = computed(
  () => tareas.value.filter(t => t.completada).length
)

// Código del ejemplo para el bloque <pre><code>
const codigoEjemplo = `<script setup>
import { ref } from 'vue'

let contadorId = 4  // Contador global para generar IDs únicos

const tareas = ref([
  { id: 1, nombre: 'Estudiar Vue 3',   completada: true  },
  { id: 2, nombre: 'Practicar v-for',  completada: false },
])

function agregarTarea(nombre) {
  tareas.value.push({
    id: contadorId++,   // ← ID único e inmutable → usado como :key
    nombre,
    completada: false,
  })
}

function eliminarTarea(id) {
  tareas.value = tareas.value.filter(t => t.id !== id)
}
<\/script>

<template>
  <ul>
    <!--
      ✅ CORRECTO:  :key="tarea.id"   → ID único, no cambia al reordenar
      ❌ INCORRECTO: :key="index"     → el índice cambia al eliminar ítems,
                                        Vue confunde nodos y el estado es incorrecto
    -->
    <li
      v-for="(tarea, index) in tareas"
      :key="tarea.id"
    >
      <span>[{{ index }}]</span>          <!-- Índice visible -->
      <span>id:{{ tarea.id }}</span>      <!-- ID único (la key real) -->
      <input type="checkbox" v-model="tarea.completada" />
      <span>{{ tarea.nombre }}</span>

      <button @click="eliminarTarea(tarea.id)">🗑️ Eliminar</button>
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

/* Formulario de agregar */
.add-form {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
  flex-wrap: wrap;
}

/* Ítem de tarea */
.tarea-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.tarea-id {
  font-family: var(--font-code);
  font-size: 0.7rem;
  color: var(--color-primary-light);
  background: rgba(108, 99, 255, 0.12);
  border-radius: 4px;
  padding: 2px 6px;
  white-space: nowrap;
}

.tarea-check {
  width: 16px;
  height: 16px;
  accent-color: var(--color-primary);
  cursor: pointer;
  flex-shrink: 0;
}

.tarea-nombre {
  flex: 1;
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.tarea-nombre.completada {
  text-decoration: line-through;
  color: var(--color-text-muted);
}

.tarea-delete {
  flex-shrink: 0;
  margin-left: auto;
}

.empty-state {
  text-align: center;
  color: var(--color-text-muted);
  padding: var(--space-xl);
  font-style: italic;
}

.tareas-resumen {
  display: flex;
  gap: var(--space-xl);
  font-size: 0.8rem;
  color: var(--color-text-muted);
  justify-content: flex-end;
}

.tareas-resumen strong {
  color: var(--color-text);
}
</style>
