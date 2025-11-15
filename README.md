# 🎓 Emprende Smart - Dashboard de Curso

Dashboard web para administrar y organizar módulos y recursos del curso "Emprende Smart con Inteligencia Artificial".

## 🚀 Características

- **Vista de Estudiante**: Interfaz limpia para acceder a módulos y recursos
- **Vista de Administración**: Panel completo para gestionar contenido (protegido con contraseña)
- **Autenticación**: Acceso protegido con contraseña para evitar modificaciones no autorizadas
- **Soporte para PDFs**: Sube y gestiona PDFs (talleres, retos, actividades)
- **Gestión de Módulos**: Crear, editar, eliminar y reordenar módulos
- **Gestión de Recursos**: Agregar, editar, eliminar y reordenar recursos dentro de cada módulo
- **Drag and Drop**: Reordenar recursos arrastrando y soltando
- **Persistencia Local**: Los datos se guardan automáticamente en el navegador (localStorage)
- **Diseño Responsive**: Funciona perfectamente en desktop, tablet y móvil

## 📁 Estructura de Archivos

```
emprende-smart/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño
├── script.js       # Lógica y funcionalidad
├── pdfs/           # Carpeta para PDFs (talleres, retos, actividades)
│   └── .gitkeep   # Mantiene la carpeta en Git
└── README.md       # Este archivo
```

## 🎯 Uso

### Vista de Estudiante

1. Abre `index.html` en tu navegador
2. Por defecto verás la vista de estudiante
3. Navega por los módulos y haz clic en los recursos para acceder

### Vista de Administración

1. Haz clic en el botón **"Administración"** en la barra superior
2. Ingresa la contraseña: **123456\***
3. Gestiona módulos y recursos desde el panel
4. Usa el botón **"Cerrar Sesión"** cuando termines

#### Crear un Módulo

1. Haz clic en **"Nuevo Módulo"**
2. Completa el formulario:
   - **Nombre**: Nombre del módulo
   - **Descripción**: Descripción opcional
   - **Orden**: Número de orden (1, 2, 3...)
3. Haz clic en **"Guardar"**

#### Editar un Módulo

1. En la vista de administración, haz clic en **"Editar"** del módulo
2. Modifica los campos necesarios
3. Guarda los cambios

#### Agregar un Recurso

1. En la vista de administración, haz clic en **"Recurso"** dentro del módulo
2. Completa el formulario:
   - **Título**: Nombre del recurso
   - **URL o Ruta**: Enlace al recurso o ruta del archivo
   - **Tipo**: Tipo de recurso (Enlace, PDF, Video, Documento, Plataforma, Otro)
   - **Descripción**: Descripción opcional
   - **Orden**: Orden dentro del módulo
3. Guarda el recurso

#### Agregar PDFs (Talleres, Retos, Actividades)

**⚠️ IMPORTANTE: Los PDFs locales NO funcionan en producción**

Los PDFs que subes desde tu disco duro solo funcionan en tu navegador local. Para que funcionen en GitHub Pages, debes subirlos al repositorio.

**Opción 1: Subir a GitHub (RECOMENDADO) ⭐**
1. Sube tu archivo PDF a la carpeta `pdfs/` en tu repositorio de GitHub
2. Al agregar el recurso, selecciona tipo **"PDF"**
3. En el campo URL, ingresa la ruta relativa: `pdfs/nombre-archivo.pdf`
4. Los estudiantes podrán descargar el PDF directamente

**Opción 2: Google Drive (Alternativa)**
1. Sube el PDF a Google Drive
2. Comparte con "Cualquier persona con el enlace"
3. Convierte el enlace a formato de descarga directa
4. Usa esa URL en el campo URL del recurso

**Opción 3: Carga Local (Solo para pruebas locales)**
1. Al agregar el recurso, selecciona tipo **"PDF"**
2. Aparecerá un campo para subir archivo
3. Selecciona tu PDF y se guardará localmente en el navegador
4. ⚠️ **Estos PDFs NO funcionarán en GitHub Pages**, solo en tu navegador local

📖 **Ver `GUIA_PDFS.md` para instrucciones detalladas**

#### Reordenar Recursos

1. En la vista de administración, arrastra un recurso usando el icono de agarre (⋮⋮)
2. Suelta el recurso en la posición deseada
3. El orden se guarda automáticamente

## 💾 Almacenamiento de Datos

Los datos se guardan automáticamente en el **localStorage** del navegador. Esto significa:

- ✅ Los datos persisten entre sesiones
- ✅ No necesitas servidor ni base de datos
- ⚠️ Los datos son específicos del navegador
- ⚠️ Si limpias el caché del navegador, se perderán los datos

### Exportar/Importar Datos (Opcional)

Para hacer backup de tus datos, puedes:

1. Abrir la consola del navegador (F12)
2. Ejecutar: `localStorage.getItem('emprendeSmartData')`
3. Copiar el JSON resultante
4. Para restaurar: `localStorage.setItem('emprendeSmartData', 'TU_JSON_AQUI')`

## 🌐 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube los archivos (`index.html`, `styles.css`, `script.js`)
3. Ve a **Settings** > **Pages**
4. Selecciona la rama `main` y la carpeta `/root`
5. Tu sitio estará disponible en: `https://tuusuario.github.io/nombre-repositorio/`

## 📝 Datos Iniciales

El sistema viene preconfigurado con:

- **Módulo 1**: Ingeniería de Prompts
  - **Recurso**: Plataforma de Entrenamiento PER-T-CO-F (https://artifextsp.github.io/pertcof/)

Puedes editar o eliminar estos datos desde la vista de administración.

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Color principal */
    --success-color: #10b981;     /* Color de éxito */
    --danger-color: #ef4444;     /* Color de peligro */
    /* ... más variables */
}
```

### Cambiar Título

Edita el título en `index.html`:

```html
<h1 class="logo">🎓 Emprende Smart</h1>
```

## 🔐 Seguridad

- **Contraseña de Administración**: `123456*`
- La autenticación se guarda en `sessionStorage` (se pierde al cerrar el navegador)
- Los estudiantes no pueden acceder al panel de administración sin la contraseña
- Para cambiar la contraseña, edita la constante `ADMIN_PASSWORD` en `script.js`

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y Flexbox/Grid)
- JavaScript Vanilla (ES6+)
- Font Awesome (iconos)
- localStorage API (para datos del curso)
- sessionStorage API (para autenticación)

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles modernos

## 🆘 Solución de Problemas

### Los datos no se guardan
- Verifica que tu navegador permita localStorage
- No uses modo incógnito si tienes restricciones

### El drag and drop no funciona
- Asegúrate de usar un navegador moderno
- Verifica que JavaScript esté habilitado

### Los estilos no se cargan
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Verifica la conexión a internet (para Font Awesome)

## 📄 Licencia

Este proyecto es de uso libre para el curso Emprende Smart.

---

**Desarrollado para Emprende Smart con Inteligencia Artificial** 🚀

