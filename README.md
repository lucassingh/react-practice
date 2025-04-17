# Capacitación React

## 🛠️ Instalación de Node con NVM y uso de NVM

NVM (Node Version Manager) es una herramienta que permite instalar y gestionar múltiples versiones de Node.js en tu sistema. Es especialmente útil para proyectos que pueden requerir diferentes versiones de Node.

### ¿Por qué usar NVM?
- Permite cambiar fácilmente entre versiones de Node.js
- Facilita la instalación de nuevas versiones
- No requiere permisos de administrador para instalar paquetes globales
- Aisla las versiones de Node por proyecto

### Pasos para instalar NVM

1. **Para Linux/macOS**:
   `bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   `
2. **O usando wget:**:
   `bash
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   `
2. **Para Windows:**:
   Descargar el instalador de windows [Aquí](https://github.com/coreybutler/nvm-windows/releases)

### Comandos básicos NVM

1. **Instalar una versión específica de Node**:

`nvm install 18.16.0`

2. **Usar una versión específica:**:

`nvm use 18.16.0`

3. **Listar versiones instaladas::**:

`nvm ls`

4. **Establecer versión por defecto:**

`nvm alias default 18.16.0`

### Configuración post-instalación

Después de instalar Node con NVM, verifica que todo funcione correctamente:

`node --version`
`npm --version`

## ⚛️ Crear un proyecto React con Vite + TypeScript

Vite es un build tool moderno que ofrece:
- ⚡ Velocidad
- 🛠️ Configuración mínima requerida
- 📦 Soporte nativo para TypeScript

### 🚀 Comandos para crear e iniciar el proyecto

1. **Crear nuevo proyecto** (elige React + TypeScript):
```bash
npm create vite@latest nombre-de-tu-proyecto -- --template react-ts
```

2. **Navegar al directorio del proyecto:
```bash
cd nombre-de-tu-proyecto
```

3. **Instalar dependencias:
```bash
npm install
```

4. **Iniciar servidor de desarrollo:
```bash
npm run dev
```

### 📂 Estructura de archivos generada

tu-proyecto/
├── node_modules/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes/iconos
│   ├── App.css      # Estilos principales
│   ├── App.tsx      # Componente App
│   ├── main.tsx     # Punto de entrada
│   └── vite-env.d.ts # Tipos de Vite
├── index.html       # HTML principal
├── package.json     # Dependencias y scripts
├── tsconfig.json    # Config TypeScript
└── vite.config.ts   # Config Vite

### 🛠️ Scripts importantes en package.json

| Comando         | Descripcón                               |
|-----------------|------------------------------------------|
| npm run dev     | Inicia servidor de desarrollo (localhost)|
| npm run build   | Crea versión optimizada para producción  |
| npm run preview | Prueba localmente el build de producción |
| npm run lint    | Ejecuta el linter (ESLint)               |

### 🔧 Configuración recomendada adicional

1. **Instalar ESLint (para validar código):
```bash
npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

2. **Configurar Prettier (para formateo automático)::
```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

### 🌐 Acceso al proyecto

```bash
npm run dev
```
```bash
http://localhost:5173
```





















