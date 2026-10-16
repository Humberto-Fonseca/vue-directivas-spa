# Directivas Vue 3 – Unidad 3

> Proyecto académico que documenta y demuestra las principales **directivas de control de Vue 3** a través de ejemplos interactivos. Cada ruta de la SPA explica una directiva con código funcional.

---

## Demo en vivo

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
