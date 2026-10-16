# Directivas Vue 3 – Unidad 3

> Proyecto académico que documenta y demuestra las principales **directivas de control de Vue 3** a través de ejemplos interactivos. Cada ruta de la SPA explica una directiva con código funcional.

---

## 🚀 Demo en vivo

**URL:** https://Humberto-Fonseca.github.io/vue-directivas-spa/

> Recuerda activar GitHub Pages en **Settings → Pages → Source: GitHub Actions** antes del primer push.

---

## 📋 Rutas y directivas cubiertas

| Ruta | Vista | Directiva |
|------|-------|-----------|
| `/` | Inicio | — Presentación general |
| `/#/v-if` | Condicional | `v-if` / `v-else-if` / `v-else` |
| `/#/v-show` | Visibilidad | `v-show` |
| `/#/v-for` | Bucle | `v-for` |
| `/#/v-bind-key` | Clave | `v-bind:key` / `:key` |

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| [Vue 3](https://vuejs.org/) | 3.x | Framework reactivo |
| [Vue Router 4](https://router.vuejs.org/) | 4.x | Navegación SPA (hash mode) |
| [Vite](https://vitejs.dev/) | 6.x | Bundler y servidor de desarrollo |
| Vanilla CSS | — | Estilos sin librerías externas |
| GitHub Actions | — | CI/CD y despliegue automático |

---

## ▶️ Cómo correrlo localmente

### Prerrequisitos
- Node.js **≥ 18** (recomendado 20 LTS)
- npm **≥ 9**

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Humberto-Fonseca/vue-directivas-spa.git
cd vue-directivas-spa

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre en el navegador: **http://localhost:5173/vue-directivas-spa/**

### Build de producción

```bash
# Genera la carpeta dist/ lista para desplegar
npm run build

# Preview local del build de producción
npm run preview
```

---

## 🌐 Despliegue en GitHub Pages

El despliegue es **automático** con cada push a `main` gracias al workflow de GitHub Actions (`.github/workflows/deploy.yml`).

### Activación manual (solo la primera vez)

1. Ve a **Settings** del repositorio en GitHub
2. Sección **Pages** → **Source**: selecciona **GitHub Actions**
3. Haz un push a `main` — el workflow se ejecutará automáticamente

---

## 📂 Estructura del proyecto

```
vue-directivas-spa/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD → GitHub Pages
├── public/
├── src/
│   ├── router/
│   │   └── index.js            # Vue Router (hash mode)
│   ├── views/
│   │   ├── Inicio.vue          # Presentación del proyecto
│   │   ├── VIfView.vue         # v-if / v-else-if / v-else
│   │   ├── VShowView.vue       # v-show
│   │   ├── VForView.vue        # v-for
│   │   └── VBindKeyView.vue    # v-bind:key
│   ├── App.vue                 # Shell: navbar + router-view
│   ├── main.js                 # Punto de entrada
│   └── style.css               # Estilos globales
├── index.html
├── vite.config.js              # base: '/vue-directivas-spa/'
└── package.json
```

---

## 👤 Autor

**Humberto Fonseca** — Unidad 3 · Programación Web

---

## 📄 Licencia

MIT
