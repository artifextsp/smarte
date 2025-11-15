# 📄 Guía para Manejar PDFs en Producción

## ⚠️ Problema Actual

Los PDFs que subes localmente desde tu disco duro **NO funcionarán** cuando subas la página a GitHub Pages porque:

- Los archivos locales solo existen en tu computadora
- GitHub Pages no tiene acceso a tu disco duro
- Los estudiantes no podrán descargar los PDFs

## ✅ Soluciones Recomendadas

### **Opción 1: Subir PDFs a GitHub (RECOMENDADO) ⭐**

**Ventajas:**
- ✅ Todo en un solo lugar
- ✅ Gratis e ilimitado
- ✅ Fácil de gestionar
- ✅ Los PDFs se descargan directamente

**Pasos:**

1. **Crea la carpeta `pdfs` en tu repositorio** (si no existe)
   ```
   emprende-smart/
   ├── pdfs/
   │   ├── taller-1.pdf
   │   ├── reto-1.pdf
   │   └── actividad-1.pdf
   ```

2. **Sube los PDFs a GitHub:**
   - Ve a tu repositorio en GitHub
   - Haz clic en "Add file" > "Upload files"
   - Arrastra tus PDFs a la carpeta `pdfs/`
   - Haz commit de los cambios

3. **En el dashboard, agrega el recurso:**
   - Tipo: **PDF**
   - URL: `pdfs/taller-1.pdf` (ruta relativa)
   - El sistema automáticamente los encontrará

**Ejemplo de URL en el dashboard:**
```
pdfs/reto-1.pdf
pdfs/taller-modulo-1.pdf
pdfs/actividad-practica.pdf
```

---

### **Opción 2: Google Drive (Alternativa)**

**Ventajas:**
- ✅ Fácil de compartir
- ✅ Puedes organizar en carpetas
- ✅ No ocupa espacio en GitHub

**Desventajas:**
- ⚠️ Requiere configurar permisos de acceso público
- ⚠️ Las URLs son largas y pueden cambiar

**Pasos:**

1. **Sube tu PDF a Google Drive**

2. **Obtén el enlace compartido:**
   - Haz clic derecho en el archivo
   - "Obtener enlace"
   - Cambia los permisos a "Cualquier persona con el enlace"

3. **Convierte el enlace a formato de descarga directa:**
   - El enlace de Drive es: `https://drive.google.com/file/d/ID_DEL_ARCHIVO/view`
   - Cámbialo a: `https://drive.google.com/uc?export=download&id=ID_DEL_ARCHIVO`

4. **En el dashboard, agrega el recurso:**
   - Tipo: **PDF**
   - URL: La URL de descarga directa de Drive

**Ejemplo:**
```
https://drive.google.com/uc?export=download&id=1ABC123xyz789
```

---

### **Opción 3: Otros Servicios de Almacenamiento**

También puedes usar:
- **Dropbox**: Similar a Drive, genera enlaces públicos
- **OneDrive**: Enlaces compartidos públicos
- **GitHub Releases**: Para archivos grandes
- **Cloudflare R2 / AWS S3**: Para proyectos más grandes

---

## 🎯 Recomendación Final

**Para tu caso, usa la Opción 1 (GitHub):**

1. Es la más simple
2. Todo queda en un solo repositorio
3. No dependes de servicios externos
4. Los estudiantes descargan directamente
5. Es gratis y sin límites razonables

## 📝 Pasos Rápidos para GitHub

```bash
# 1. Crea la carpeta pdfs (si no existe)
mkdir pdfs

# 2. Copia tus PDFs ahí
# (arrastra los archivos manualmente o usa git)

# 3. En GitHub, sube los archivos a la carpeta pdfs/

# 4. En el dashboard, usa rutas como:
pdfs/mi-archivo.pdf
```

## ⚡ Nota Importante

Los PDFs que subiste localmente (usando el botón "Subir PDF") **solo funcionan en tu navegador local**. Para que funcionen en producción, debes:

1. **Eliminar esos recursos** del dashboard
2. **Subir los PDFs a GitHub** (carpeta `pdfs/`)
3. **Volver a agregar los recursos** con la ruta `pdfs/nombre.pdf`

---

¿Necesitas ayuda con algún paso específico? 🚀

