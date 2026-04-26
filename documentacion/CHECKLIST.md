# 📋 CHECKLIST - Portfolio Implementation

## ✅ Completado
- [x] Estructura HTML principal (index, trabajos, contacto, sobre-mi)
- [x] Sistema SCSS modular y responsive
- [x] JavaScript interactivo (main, effects, utilities, split-screen)
- [x] Media queries para todos los breakpoints
- [x] Componentes visuales (hero, split-screen, portfolio, contacto)
- [x] Efectos avanzados (cursor, parallax, scroll effects)
- [x] Sistema de notificaciones
- [x] Formulario de contacto con validación
- [x] Navbar responsive y mobile menu
- [x] Footer con links
- [x] Bootstrap y utilidades externas integrados

## 🔄 En Progreso / Parcialmente Completado

### Compilación SCSS → CSS
- [ ] Compilar `sass/style.scss` a `css/stylesass.css`
  - **Instrucción:** Ejecuta `sass --watch sass/:css/` en terminal
  - **O:** Usa VS Code extension "Live Sass Compiler"
  - **Responsable:** Automático después de instalar Sass

### Personalización de Contenido

#### 1. Hero Section
- [ ] Reemplazar video: Coloca tu video en `assets/hero-video.mp4`
- [ ] Actualizar título principal (h1)
- [ ] Actualizar subtítulo
- [ ] Personalizar botones de CTA

#### 2. Split Screen Section
- [ ] Reemplazar imagen UX/UI en `assets/ux-ui-design.jpg`
- [ ] Reemplazar imagen Web Dev en `assets/web-development.jpg`
- [ ] Actualizar descripción UX/UI design
- [ ] Actualizar descripción Web development
- [ ] Editar skill tags (ambos paneles)
- [ ] Actualizar enlaces de portfolio

#### 3. Portfolio / Trabajos
- [ ] Crear/obtener 8 imágenes de proyectos
- [ ] Nombrarlas: `proyecto-1.jpg` a `proyecto-8.jpg`
- [ ] Colocar en `assets/`
- [ ] Reemplazar paths en `pages/trabajos.html`
- [ ] Actualizar títulos y descripciones de proyectos
- [ ] Definir categorías correctamente (ux-ui, frontend, fusion)

#### 4. About / Sobre Mí
- [ ] Crear/obtener foto de perfil
- [ ] Guardar como `assets/profile-image.jpg`
- [ ] Escribir bio profesional
- [ ] Actualizar skills/experiencia
- [ ] Personalizar tarjetas de especialidades

#### 5. Contacto
- [ ] Actualizar email de contacto (licenciada.azamora@gmail.com)
- [ ] Actualizar número de WhatsApp (+5493512729694)
- [ ] Actualizar ubicación (Córdoba, Argentina)
- [ ] Integrar servicio de email (ver abajo)

## 🎨 Personalización de Colores

Archivo a editar: `sass/partials/_variables.scss`

```scss
// Colores principales - CAMBIA ESTOS
$violeta: #55466B;      // Tu color primario
$acento: #A06868;       // Tu color de acento
$grisaceo: #ADA6B7;     // Color gris
$beige: #BFB2B2;        // Color beige
```

Opciones recomendadas a cambiar:
- [ ] Color primario ($violeta)
- [ ] Color de acento ($acento)
- [ ] Colores de información (éxito, error, alerta)

## 🔗 Redes Sociales & Links

### En `index.html` Footer
- [ ] LinkedIn: Busca `href="#"` → reemplaza con tu URL LinkedIn
- [ ] Instagram: `href="#"` → tu Instagram
- [ ] GitHub: `href="#"` → tu GitHub
- [ ] Behance (opcional): `href="#"` → tu Behance

### En `pages/contacto.html`
- [ ] Email: Actualizar `licenciada.azamora@gmail.com`
- [ ] WhatsApp: Actualizar `+5493512729694`
- [ ] LinkedIn
- [ ] Instagram
- [ ] GitHub

### Links de Proyectos
- [ ] `pages/trabajos.html` - Énlaces a proyectos
- [ ] `index.html` featured works - Enlace a portfolio completo
- [ ] Split screen - CTAs apuntando a portfolio

## 📧 Configuración de Email (Formulario de Contacto)

### Opción 1: Formspree (RECOMENDADO - Más Fácil)
```html
<!-- En pages/contacto.html, reemplaza el formulario action -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Pasos:
1. [ ] Ir a https://formspree.io
2. [ ] Registrarse
3. [ ] Crear nuevo formulario
4. [ ] Copiar Form ID
5. [ ] Reemplazar en contacto.html
6. [ ] Enviar email de confirmación desde Formspree

### Opción 2: EmailJS (Cliente-lado)
1. [ ] Ir a https://www.emailjs.com
2. [ ] Crear cuenta
3. [ ] Conectar Gmail o enviar con su servicio
4. [ ] Copiar Public Key y Service ID
5. [ ] Integrar en `assets/js/effects.js`

### Opción 3: Google Forms (Escondida)
1. [ ] Crear Google Form
2. [ ] Copiar formulario de pre-envío
3. [ ] Integrar action en contacto.html

### Opción 4: Backend Personalizado
1. [ ] Crear servidor Node/Express
2. [ ] Integrar nodemailer
3. [ ] Conectar endpoint del servidor

**Elegida:** _____________ (Anotar cuál es tu opción)

## 📸 Imágenes Requeridas

Crear/obtener estas imágenes y guardar en `assets/`:

```
assets/
├── hero-video.mp4                    # Video del hero (MP4, optimizado)
├── ux-ui-design.jpg                  # Fondo panel izquierdo
├── web-development.jpg               # Fondo panel derecho  
├── profile-image.jpg                 # Foto de perfil sobre-mi
├── proyecto-1.jpg                    # Proyecto 1 (Diseño)
├── proyecto-2.jpg                    # Proyecto 2 (Diseño)
├── proyecto-3.jpg                    # Proyecto 3 (Frontend)
├── proyecto-4.jpg                    # Proyecto 4 (Frontend)
├── proyecto-5.jpg                    # Proyecto 5 (Frontend)
├── proyecto-6.jpg                    # Proyecto 6 (Fusion)
├── proyecto-7.jpg                    # Proyecto 7 (Fusion)
└── proyecto-8.jpg                    # Proyecto 8 (Acotación)
```

**🚨 IMPORTANTE:** Optimizar todas las imágenes para web:
- Máximo 1-2 MB por imagen
- Usar WebP si es posible
- Dimensiones recomendadas: 1200x800px mínimo

## 🎯 Instalación & Setup

### Primer tiempo:
1. [ ] Clonar/descargar el proyecto
2. [ ] Instalar Node.js (si no está instalado)
3. [ ] Instalar Sass: `npm install -g sass`
4. [ ] Compilar SCSS: `sass --watch sass/:css/`

### Desarrollo local:
1. [ ] Abrir con Live Server (extensión VS Code)
2. [ ] O ejecutar: `python -m http.server 8000`
3. [ ] Ir a `http://localhost:8000`

### Testing Responsivo:
- [ ] Mobile (360px - 480px)
- [ ] Tablet (576px - 992px)
- [ ] Desktop (1200px+)
- [ ] Usar DevTools (F12) para testing

## 🚀 Pre-Deployment

### Optimización
- [ ] Minificar CSS (usar sass con --style=compressed)
- [ ] Minificar JavaScript (opcional, puede usar tercer servicio)
- [ ] Optim

izar todas las imágenes
- [ ] Comprimir videos
- [ ] Remover console.logs en JavaScript

### Testing
- [ ] Probar todos los links internos
- [ ] Probar formulario de contacto
- [ ] Verificar renderizado en Chrome, Firefox, Safari
- [ ] Probar en dispositivos reales (móvil, tablet)
- [ ] Verificar velocidad de carga
- [ ] Verificar SEO básico

### Configuración Pre-Deploy
- [ ] Actualizar favicon (favicon.ico)
- [ ] Verificar meta tags en HTML
- [ ] Configurar robots.txt (si aplica)
- [ ] Configurar sitemap.xml (si aplica)
- [ ] Revisar Open Graph tags para redes sociales

## 📍 Deployment

Plataforma elegida: ________________

### Si es Netlify:
- [ ] Conectar repositorio GitHub
- [ ] Configurar build command: `sass sass/:css/`
- [ ] Configurar publish directory: `.`
- [ ] Deploy!

### Si es Vercel:
- [ ] Conectar repositorio GitHub
- [ ] Vercel detecta automático
- [ ] Deploy!

### Si es GitHub Pages:
- [ ] Crear rama `gh-pages`
- [ ] Pushear código compilado
- [ ] Activar en Settings → GitHub Pages

### Si es Hostinger/Tradicional:
- [ ] Compilar SCSS localmente
- [ ] Comprimir carpeta
- [ ] Subir vía FTP o File Manager
- [ ] Probar en vivo

## 📊 Post-Deployment

- [ ] Verificar que el sitio está online
- [ ] Probar todos los links
- [ ] Probar formulario de contacto (enviarte email de prueba)
- [ ] Verificar imágenes cargan
- [ ] Verificar jQuery/CDN scripts cargan
- [ ] Verificar en mobile
- [ ] Configurar Google Analytics (opcional)

## 📝 Documentación & Notas

Cosas a recordar:
- Las credenciales de email están en: ________________
- El dominio es: ________________
- El hosting es: ________________
- Backups se hacen: ________________

## 🎓 Actualización Futura

Para actualizar el portfolio después del launch:

1. Agregar nuevos proyectos a `pages/trabajos.html`
2. Actualizar sección "Sobre mí" en `pages/sobre-mi.html`
3. Cambiar colores en `_variables.scss`
4. Cambiar imágenes directamente
5. Recompilar SCSS si cambias estilos
6. Pushear cambios a GitHub/servidor

---

## ✨ Notas Finales

- **Usa checklist regularmente** durante desarrollo
- **Toma screenshots** después de cada cambio grande
- **Backupea antes de cambios grandes**
- **Prueba en incógnito** para ver cambios sin cache
- **Pide feedback** a otros usuarios antes de publicar

Última actualización: _________
Completado por: _________
