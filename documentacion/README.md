# Portfolio Minimalista - Guía de Implementación

## 📋 Descripción General

Este es un portfolio profesional minimalista diseñado para diseñadores UX/UI y desarrolladores frontend. Combina un diseño elegante con interactividad sofisticada.

## 🎯 Características Principales

### 1. **Hero Section**
- Video de fondo personalizado
- Mensaje de bienvenida animado
- CTA (Call to Action) con dos opciones
- Indicador de scroll automático

### 2. **Split Screen Section**
- Pantalla dividida en 2 secciones (UX/UI y Desarrollo Web)
- Efecto hover con expansión suave
- Fondos de imagen personalizables
- Descripciones y skills asociados
- Responsive en mobile, tablet y desktop

### 3. **Componentes Principales**
- Página de inicio (index.html)
- Página de trabajos con filtrado por categoría (pages/trabajos.html)
- Página de contacto con formulario (pages/contacto.html)
- Página sobre mí

### 4. **Sistema de Diseño**
- Variables SCSS configurables
- Mixins para media queries y estilos comunes
- Responsive design (mobile-first)
- Animaciones suaves y transiciones

## 📁 Estructura de Archivos

```
.
├── index.html                          # Página principal
├── pages/
│   ├── trabajos.html                  # Galería de proyectos
│   ├── contacto.html                  # Formulario de contacto
│   ├── sobre-mi.html                  # Sección sobre ti
│   └── portfolio-*.html                # Páginas de portfolio específicas
├── assets/
│   ├── css/
│   │   ├── stylesass.css              # CSS compilado (compilar SCSS aquí)
│   │   └── effects.css                # Efectos CSS adicionales
│   ├── js/
│   │   ├── main.js                    # JS principal
│   │   ├── effects.js                 # Efectos visuales
│   │   ├── utilities.js               # Funciones helper
│   │   ├── split-screen.js            # Efectos split screen
│   │   └── [imágenes]
│   └── [imágenes y assets]
└── sass/
    ├── style.scss                     # Archivo principal SCSS
    └── partials/
        ├── _variables.scss            # Variables globales
        ├── _mixin.scss                # Mixins reutilizables
        ├── _mqueries.scss             # Media queries y responsive
        ├── _reset.scss                # Reset de estilos
        ├── _header.scss               # Estilos de navbar
        ├── _welcome.scss              # Estilos de bienvenida
        ├── _buttons.scss              # Estilos de botones
        ├── _split_screen.scss         # Estilos split screen
        ├── _footer.scss               # Estilos de footer
        └── [otros]
```

## 🎨 Personalización

### Variables Principales (sass/partials/_variables.scss)

```scss
// Colores
$violeta: #55466B;        // Color primario
$acento: #A06868;         // Color de acento
$grisaceo: #ADA6B7;       // Gris secundario
$beige: #BFB2B2;          // Beige
$gris: #ccc;              // Gris claro

// Tipografía
$h: "Poppins", sans-serif;
$p: "Inter", sans-serif;

// Font weights
$regular: 400;
$semibold: 600;
$bold: 700;

// Media query breakpoints
$mobile-min: 360px;
$mobile-max: 575px;
$tablet-min: 576px;
$tablet-max: 991px;
$desktop-min: 992px;
```

### Cambiar Imágenes de Split Screen

En `index.html`, busca la sección split-screen y reemplaza los paths:

```html
<!-- Cambiar estas líneas -->
<div class="split-background" style="background-image: url('assets/ux-ui-design.jpg')"></div>
<div class="split-background" style="background-image: url('assets/web-development.jpg')"></div>
```

### Personalizar Contenido

#### Hero
- Título: En `index.html`, busca `.hero-title`
- Subtítulo: En `index.html`, busca `.hero-subtitle`
- Video: Reemplaza `assets/hero-video.mp4` con tu video

#### Split Screen
- Títulos y descripciones en las `<h2>` y `<p>` de cada panel
- Skills: Edita los `<span class="skill-tag">`

#### Colores y Estilos
- Modifica `$acento` para cambiar el color principal en toda la web
- Ajusta los tamaños de fuente en `_variables.scss`

## 🚀 Compilación SCSS

### Opción 1: Usar Sass CLI (Recomendado)

```bash
# Instalar sass globalmente (si no está instalado)
npm install -g sass

# Compilar SCSS a CSS en modo watch (recompila automáticamente)
sass --watch sass/:css/

# O compilar una sola vez
sass sass/style.scss css/stylesass.css
```

### Opción 2: Usar VS Code Extension

1. Instala la extensión "Live Sass Compiler"
2. Haz clic en "Watch Sass" en la esquina inferior derecha

### Opción 3: Usar Node.js Project

```bash
npm init
npm install sass
npx sass --watch sass/:css/
```

## 🎬 Efectos JavaScript Disponibles

### Split Screen Effects
- **SplitScreenEffects.expandLeft()** - Expande panel izquierdo
- **SplitScreenEffects.expandRight()** - Expande panel derecho
- **SplitScreenEffects.reset()** - Resetea a estado normal

### Smooth Scroll
- Links internos (href="#") hacen scroll suave automáticamente

### Mobile Menu
- Menú se abre/cierra con toggle button
- Se cierra automáticamente al hacer scroll

### Filter Portfolio
- Filtrado de proyectos con Isotope.js
- Categorías: Todos, Diseño UX/UI, Frontend, Diseño+Dev

### Form Validation
- Validación en tiempo real
- Mensajes de error dinámicos
- Soporte para email, teléfono, etc.

### Additional Effects
- Cursor personalizado (desktop)
- Parallax en scroll
- Reveal on scroll
- Back to top button
- Notifications system

## 📱 Breakpoints Responsive

```scss
// Mobile: 360px - 575px
// Tablet: 576px - 991px
// Desktop: 992px+
// Large Desktop: 1200px+
```

### Usar Mixins en SCSS

```scss
.mi-clase {
	// Estilos mobile (default)
	font-size: 14px;

	// Tablet
	@include tablet {
		font-size: 16px;
	}

	// Desktop
	@include desktop {
		font-size: 18px;
	}
}
```

## 🔧 Instalación de Dependencias

El proyecto usa:
- Bootstrap 5.3.0 (CSS)
- AOS (Animate On Scroll)
- Font Awesome 6.4.0 (Icons)
- Isotope.js (Filtrado de portfolio)

Todos se cargan desde CDN, no necesitas instalar nada localmente.

## 📝 Pasos para Completar el Portfolio

1. **Personaliza variables de color** en `_variables.scss`
2. **Agrega tus imágenes** en la carpeta `assets/`
3. **Reemplaza los contenidos** en los HTML con tu información
4. **Agrega descripción profesional** en split screen y about section
5. **Configura tus redes sociales** con los links reales
6. **Ajusta el formulario de contacto** (integración con email service)
7. **Prueba responsive** en diferentes tamaños de pantalla
8. **Optimiza imágenes** antes de subir a producción

## 🎥 Videos y Media

Para agregar un video custom en el hero:
1. Convierte tu video a formato MP4
2. Reemplaza `assets/hero-video.mp4`
3. Asegúrate que sea optimizado para web (máximo 5-10MB)

## 📞 Integración de Formulario de Contacto

Opciones disponibles:

### Opción 1: Formspree
```javascript
// En contacto.html, reemplaza el formulario action
<form action="https://formspree.io/f/tu_form_id" method="POST">
```

### Opción 2: EmailJS
```javascript
// Instalar emailjs en el HTML
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

// Inicializar en effects.js o main.js
emailjs.init('your_public_key');
```

### Opción 3: Backend propio
Crear un endpoint POST que maneje el formulario

## 🌐 Hosting

Recomendaciones:
- **Netlify** - Fácil deployment desde GitHub
- **Vercel** - Excelente para static sites
- **GitHub Pages** - Gratis y simple
- **Hostinger** - Hosting compartido tradicional

## 🔐 SEO y Optimización

- Meta descriptions configuradas
- Open Graph tags (redes sociales)
- Performance optimization
- Lazy loading de imágenes
- CSS y JS minificados en producción

## 🐛 Troubleshooting

### Las imágenes no se ven
- Verifica los paths de las imágenes
- Asegúrate que las imágenes existan en `assets/`

### Split screen no funciona
- Verifica que `split-screen.js` está cargado
- Abre console (F12) para ver errores

### Estilos no aplican
- Compila SCSS con `sass --watch sass/:css/`
- Limpia cache del navegador (Ctrl+Shift+Del)
- Verifica que `effects.css` está linkeado en HTML

### Animaciones lentas
- Reduce `duration` en AOS.init()
- Disminuye el número de animaciones simultáneas

## 📚 Recursos Útiles

- [SCSS Documentation](https://sass-lang.com/documentation)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Isotope.js](https://isotope.metafizzy.co/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💡 Tips y Buenas Prácticas

1. **Performance**: Optimiza imágenes (WebP format)
2. **Accesibilidad**: Usa atributos alt en imágenes
3. **Mobile First**: Diseña mobile primero, luego desktop
4. **Testing**: Prueba en diferentes navegadores
5. **Version Control**: Usa Git para controlar cambios
6. **Backup**: Guarda copias de tus cambios

## 📄 Licencia

Libre para uso personal y comercial.

---

**Última actualización:** Febrero 2026
**Versión:** 1.0
