# SofIA Labs — Sitio web

Sitio corporativo de **SofIA Labs** (*Innovation & Knowledge Solutions*): servicios de Inteligencia Artificial aplicados al **marketing digital**, los **procesos de venta** y la **implementación de CRM**.

Sitio estático (HTML + CSS + JS, sin dependencias ni compilación), listo para publicarse gratis en **GitHub Pages**.

## Estructura

```
index.html              Página principal
styles.css              Estilos
script.js               Menú móvil, animaciones y formulario
assets/
  logo-sofialabs.png    Logo completo (fondo transparente)
  logo-sl.png           Monograma "SL"
  favicon.png           Ícono de pestaña
  apple-touch-icon.png  Ícono para móviles
.nojekyll               Indica a GitHub Pages que sirva los archivos tal cual
```

## Publicar en GitHub Pages

1. Crea una cuenta en <https://github.com> (si no tienes).
2. Crea un repositorio nuevo, por ejemplo `sofialabs` (público).
3. En el repositorio: **Add file → Upload files**, arrastra **todo el contenido** de esta carpeta (incluida la carpeta `assets`) y pulsa **Commit changes**.
4. Ve a **Settings → Pages**. En *Build and deployment* elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
5. En 1–2 minutos tu sitio estará en `https://TU-USUARIO.github.io/sofialabs/`.

> Si llamas al repositorio `TU-USUARIO.github.io`, el sitio quedará en `https://TU-USUARIO.github.io/`.

### Con Git (opcional)

```bash
git init
git add .
git commit -m "Sitio web SofIA Labs"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sofialabs.git
git push -u origin main
```

## Personalizar

- **Correo de contacto:** edita la línea `CONTACT_EMAIL` al inicio de `script.js`. El formulario abre el correo del visitante con el mensaje ya redactado (GitHub Pages no ejecuta servidor). Si prefieres recibir los mensajes sin que el visitante use su correo, puedes conectar el formulario a un servicio como Formspree.
- **Textos:** todo el contenido está en `index.html`, organizado por secciones comentadas.
- **Colores:** variables al inicio de `styles.css` (`--navy`, `--cyan`, `--violet`).
- **Dominio propio (ej. sofialabs.cl):** en *Settings → Pages → Custom domain*, y configura el DNS según indica GitHub.
