# 🚀 DEPLOYMENT - Publica Tu Portfolio en Internet

## ¿Para qué? 

Después de terminar tu portafolio localmente, necesitas **subirlo a internet** para que otros lo vean. Este documento muestra cómo hacerlo **gratis** en minutos.

---

## Plataformas Recomendadas

### Opción 1: Netlify ⭐ (LA MÁS FÁCIL)

**Ventajas:**
- Gratis para sitios estáticos
- Deploy en 1 clic
- SSL automático (https://)
- Dominio gratis (tuportfolio.netlify.app)
- Integración GitHub automática

**Costo:** Gratis (incluso para dominios personalizados)

#### Pasos:

1. **Crear cuenta GitHub** (si no tienes):
   - https://github.com
   - Sign Up
   - Verifica email

2. **Subir tu proyecto a GitHub**:
   ```bash
   # En tu carpeta del proyecto
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/portfolio-agus.git
   git push -u origin main
   ```

3. **Conectar con Netlify**:
   - https://netlify.com
   - Sign up → Conecta con GitHub
   - "New site from Git"
   - Selecciona tu repositorio `portfolio-agus`
   - Deploy!

4. **Listo!** Tu sitio está en: `https://tuportfolio.netlify.app`

### Opción 2: Vercel

**Ventajas:**
- Similar a Netlify, muy rápido
- Perfecto para Next.js (si decides escalar)
- Deploy automático en cada push

#### Pasos:

1. https://vercel.com
2. Sign up → Conecta GitHub
3. Import project
4. Deploy!

### Opción 3: GitHub Pages (Más Manual)

**Ventajas:**
- Gratis
- Integrado con GitHub
- Dominio: tuusuario.github.io

**Desventaja:** Más pasos

#### Pasos:

1. En GitHub, ve a Settings del repositorio
2. GitHub Pages → Source
3. Selecciona branch `main`
4. Guarda
5. Tu sitio está en: `https://tuusuario.github.io`

### Opción 4: Hosting Tradicional (Hostinger, Bluehost, etc.)

**Cuándo:** Si ya tienes hosting

**Pasos:**
1. Compila SCSS: `sass sass/:assets/css/`
2. Comprime tu proyecto en ZIP
3. Sube vía FTP o File Manager
4. Listo!

---

## Comparación

| Plataforma | Costo | Facilidad | Recomendado |
|------------|-------|-----------|-------------|
| **Netlify** | Gratis | ⭐⭐⭐⭐⭐ | ✅ Mejor |
| **Vercel** | Gratis | ⭐⭐⭐⭐⭐ | ✅ Muy bueno |
| **GitHub Pages** | Gratis | ⭐⭐⭐ | Bueno |
| **Hosting Pago** | $3-10/mes | ⭐⭐ | Si necesitas PHP/MySQL |

---

## Guía Detallada: Netlify (La Más Popular)

### Paso 1: Preparar Git (Primera vez)

Si **NUNCA** has usado Git:

```bash
# 1. Instalar Git: https://git-scm.com

# 2. Configurar (una sola vez)
git config --global user.name "Tu Nombre"
git config --global user.email "licenciada.azamora@gmail.com"

# 3. En tu carpeta del proyecto
cd C:\Users\licen\OneDrive\Escritorio\portfolio-agus

# 4. Inicializar repositorio
git init
```

### Paso 2: Subir Código a GitHub

```bash
# En tu carpeta del proyecto

# 1. Añadir todos los archivos
git add .

# 2. Crear "commit" (snapshot del código)
git commit -m "Portfolio inicial - listo para publicar"

# 3. Cambiar nombre de rama a main (Netlify lo prefiere)
git branch -M main

# 4. Conectar con tu repositorio en GitHub
# (Reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/portfolio-agus.git

# 5. Subir el código
git push -u origin main

# 6. Verifica en GitHub.com que tu código está ahí
```

Si da error de autenticación:
```bash
# En Windows, usa token de acceso
# 1. https://github.com/settings/tokens
# 2. Generate new token
# 3. Cuando pida contraseña, pega el token
```

### Paso 3: Crear Cuenta Netlify

1. Abre https://netlify.com
2. Haz clic "Sign up"
3. Elige "Sign up with GitHub"
4. Autoriza Netlify
5. ¡Listo! Estás registrado

### Paso 4: Deploy

1. En Netlify, haz clic "New site from Git"
2. Selecciona "GitHub"
3. Busca `portfolio-agus`
4. Haz clic para conectar
5. Netlify te pregunta:
   - **Build command:** (déjalo vacío, no necesitas compilar en servidor)
   - **Publish directory:** `.` (raíz, o `docs` si en GitHub Pages)
6. Haz clic "Deploy site"
7. **¡Esperaaaa...** Netlify sube tu código (1-2 minutos)
8. ✅ Tu sitio está online!

**URL de tu sitio:**
```
https://[nombre-aleatorio].netlify.app
```

### Paso 5: Cambiar Nombre (Opcional)

Por defecto Netlify da un nombre aleatorio como `zesty-tiger-a1b2c3.netlify.app`

Para cambiar:

1. En Netlify dashboard, abre tu sitio
2. Site settings → General
3. Change site name → `portfolio-agus`
4. Ahora es: https://portfolio-agus.netlify.app

### Paso 6: Dominio Personalizado (Opcional, De Pago)

Si quieres `www.agustinazamora.com`:

1. Compra dominio en:
   - Namecheap
   - GoDaddy
   - Google Domains
   - (Costo: $10-15/año)

2. En Netlify:
   - Site settings → Domain management
   - Agrega tu dominio
   - Sigue instrucciones de DNS

3. Listo! Accedes a: agustinazamora.com

---

## Actualizar el Sitio (Después del Deploy)

### Si estás usando Git + Netlify:

```bash
# 1. Haz tus cambios en los archivos HTML/CSS/JS

# 2. Comitea los cambios
git add .
git commit -m "Agregué nuevos proyectos"

# 3. Sube a GitHub
git push

# 4. Netlify detecta automáticamente y deploya!
# (Sin hacer clic en nada)
```

Verás el progreso en:
- Netlify dashboard → Deploys
- En 30-60 segundos está online el cambio

### Si usas hosting tradicional:

```bash
# 1. Compila SCSS localmente
sass sass/:assets/css/

# 2. Descarga tus cambios
# 3. Sube vía FTP al servidor
```

---

## Pre-Deployment Checklist

Antes de publicar, verifica:

### ✅ Contenido
- [ ] Cambié mi nombre y bio
- [ ] Agregué todas mis imágenes
- [ ] Actualizé mis redes sociales
- [ ] Email de contacto es correcto
- [ ] Teléfono/WhatsApp es correcto

### ✅ Funcionamiento
- [ ] Todos los links internos funcionan
- [ ] Formulario de contacto funciona (Formspree configurado)
- [ ] No hay imágenes rotas
- [ ] No hay errores en Console (F12)

### ✅ Responsivo
- [ ] Se ve bien en mobile (360px)
- [ ] Se ve bien en tablet (768px)
- [ ] Se ve bien en desktop (1920px)

### ✅ Performance
- [ ] Imágenes están optimizadas (<500KB cada una)
- [ ] Video no es más de 5MB
- [ ] Página carga en menos de 3 segundos

### ✅ Seguridad
- [ ] No hay credenciales en el código
- [ ] SSL habilitado (https://)

---

## Después del Deploy

### Test 1: Abre en Navegador
```
https://portfolio-agus.netlify.app
```

### Test 2: Móvil
- Abre en teléfono
- Prueba menú, scroll, efectos

### Test 3: Diferentes Navegadores
- Chrome ✅
- Firefox ✅
- Safari (si tienes Mac) ✅
- Edge ✅

### Test 4: Formulario
- Llena contacto
- Envía
- Revisa email (spam si no la ves)

### Test 5: Analytics (Opcional)
En Netlify:
- Analytics → Activa
- Verás visitantes en tiempo real

---

## Problemas Comunes

### "Netlify dice 'Site not found'"
- Espera 1-2 minutos, a veces tarda
- Recarga la página

### "La imagen no se ve en el sitio online"
- Verifica el path en HTML
- Debe ser relativo: `assets/foto.jpg` (no `/assets/foto.jpg`)

### "El CSS no se aplicó en Netlify"
- Verifica que `stylesass.css` existe en tu git push
- Recarga con Ctrl+Shift+Del (limpiar cache)

### "El formulario da error"
- Verifica que Formspree está configurado
- Revisa Console (F12) por CORS errors
- Usa `action="https://formspree.io/f/ID"` con method="POST"

### "¿Por qué Netlify no autocompila SCSS?"
- Netlify no compila SCSS automáticamente
- **Solución:** Compila localmente: `sass sass/:assets/css/`
- Luego sube el CSS compilado al git

---

## Optimización Post-Deploy

### Performance:
1. **Lazy load images**:
   ```html
   <img src="assets/foto.jpg" loading="lazy">
   ```

2. **Minificar CSS** (opcional):
   ```bash
   sass --style=compressed sass/style.scss assets/css/stylesass.css
   ```

3. **Optimize images**:
   - https://tinypng.com
   - https://imageoptimizer.com

### SEO:
1. Agrega `sitemap.xml`
2. Agrega `robots.txt`
3. Google Search Console

---

## Siguiente Nivel: Dominio Personalizado

### Pasos:

1. **Compra dominio** (opcional):
   - Namecheap: https://namecheap.com
   - Costo: $8-15/año
   - Recomendado: `minonbumario.com` o `agustinazamora.dev`

2. **Conecta a Netlify**:
   - Netlify → Site settings → Domain
   - Agrega dominio comprado
   - Cambia DNS en Namecheap/registrador

3. **Acceso**: ahora en tu dominio personalizado

---

## Resumen Rápido

```
1. Git init + push a GitHub (5 minutos)
2. Conecta GitHub a Netlify (2 minutos)
3. Deploy automático (1 minuto)
4. ✅ ¡Online!

Tiempo total: ~10 minutos
Costo: Gratis
```

---

## Preguntas Frecuentes

**¿Pierde mi código si cierro Netlify?**
No. Tu código está en GitHub. Si necesitas, puedo recrear desde GitHub.

**¿Puedo cambiar el diseño después?**
Sí. Haz cambios locales, commit+push a GitHub, Netlify actualiza automático.

**¿Me cuesta dinero?**
Netlify gratis para sitios estáticos. Dominio personalizado cuesta ($8-15/año).

**¿Qué pasa si tengo 1000 visitantes?**
Sin problema. Netlify aguanta millones de visitantes.

**¿Puedo borrar GitHub?**
No recomendado. GitHub es tu backup Si pierdes tu PC, recuperas desde GitHub.

---

## Próximas Mejoras (Futuro)

Después de tener el sitio online, considera:

1. **Google Analytics**
   - Trackea cuántas personas visitan
   - De dónde vienen

2. **Formulario Email Mejorado**
   - Integra con CRM (Airtable, Notion)
   - Auto-responder

3. **Blog de Artículos**
   - Postea sobre diseño/desarrollo
   - Attract SEO traffic

4. **Newsletter**
   - Recolecta emails
   - Manda newsletter mensual

---

## Recursos Finales

- **Netlify Docs:** https://docs.netlify.com/
- **GitHub Docs:** https://docs.github.com/
- **Dominio:** https://namecheap.com
- **Optimización:** https://pagespeed.web.dev/

---

**¿Preguntas? Revisa el QUICK_START.md o README.md**

**Última actualización:** Febrero 2026
Tiempo de lectura: 10 minutos
Tiempo de implementación: 15 minutos
