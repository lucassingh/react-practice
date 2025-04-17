## 📦 Prerrequisitos

- Node.js (v18+ recomendado)
- npm (viene con Node.js) o yarn (opcional)
- Editor de código (VS Code recomendado)

## 🚀 Paso 1: Instalación de Node.js

1. Descargar la versión LTS desde [nodejs.org](https://nodejs.org/)
2. Ejecutar el instalador con configuración predeterminada
3. Verificar instalación:

```bash
node -v
npm -v
npm create vite@latest mi-proyecto-react -- --template react-ts
cd mi-proyecto-react
npm install
npm run dev

npm install react-router-dom @types/react-router-dom

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

mi-proyecto-react/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts