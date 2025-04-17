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

Documentación oficial de Vite [Aquí](https://vite.dev/)

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

| Comando         | Descripción                              |
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
Poner en la barra de búsqueda de tu navegador

```bash
http://localhost:5173
```
Tip: Vite usa el puerto 5173 por defecto. Si necesitas cambiarlo, modifica vite.config.ts.

## 🎨 Material UI (MUI) - Biblioteca de componentes React

[Material UI](https://mui.com/) es una de las bibliotecas de componentes UI más populares para React, implementando los principios de Material Design de Google.

## 📚 Documentación oficial

Documentación principal de MUI [Visitar](https://mui.com/)

Componentes disponibles [Visitar]([https://mui.com](https://mui.com/material-ui/all-components/)/)

Sistema de temas [Visitar]([https://mui.com/](https://mui.com/material-ui/customization/theming/))

Guía de estilado [Visitar]([https://mui.com/](https://mui.com/material-ui/customization/how-to-customize/))

 ### Principales características
- ✅ Más de 50 componentes listos para usar

- 🎨 Sistema de temas personalizable

- 📱 Diseño responsive por defecto

- 🌈 Variantes para cada componente (contained, outlined, text)

- ⚡ Optimizado para performance

### 📦 Instalación

1. **Instalar paquetes principales**:
```bash
npm install @mui/material @emotion/react @emotion/styled
```

2. **Instalar íconos (opcional pero recomendado)**:
```bash
npm install @mui/icons-material
```

2. **Instalar íconos (opcional pero recomendado)**:
```bash
npm install @mui/icons-material
```

### 🚀 Uso básico

1. **Instalar íconos (opcional pero recomendado)**:
```bash
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
```

2. **Ejemplo de componente**:
```bash
<Button 
  variant="contained" 
  color="primary"
  startIcon={<DeleteIcon />}
>
  Eliminar
</Button>
```

### 🖌️ Personalización con temas

Crear tema personalizado:

```bash
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Tu aplicación aquí */}
    </ThemeProvider>
  );
}
```

# 🧭 React Router DOM

React Router DOM es una librería estándar de enrutamiento para aplicaciones React. Permite manejar la navegación entre componentes de manera dinámica, sin necesidad de recargar la página.

---

## 📚 Documentación Oficial

[👉 Ir a la documentación oficial de React Router](https://reactrouter.com/en/main)

---

## 🚀 Instalación

```bash
npm install react-router-dom
```

## 🛠️ Uso Básico

1. Enrutador principal

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

2. Navegación con Links

```
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
}
```
3. Navegación programática
```
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return <button onClick={goToAbout}>Ir a Acerca de</button>;
}
```

### 🧩 Componentes clave

| Componente         | Descripción                                 |
|-----------------   |---------------------------------------------|
| <BrowserRouter>    | Inicia servidor de desarrollo (localhost)   |
| <Routes>           | Contenedor de rutas                         |
| <Route>            | Define una ruta y su componente asociado    |
| <Link>             | Navegación declarativa                      |
| useNavigate()      | Navegación imperativa                       |
| useParams()        | Accede a los parámetros dinámicos de la URL |
| useLocation()      | Accede al objeto de ubicación               |

### ✅ Ejemplo con rutas anidadas

```
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

### 🔐 Rutas protegidas (ejemplo simple)

```
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // tu lógica de auth real va aquí

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
```

###Uso
  
```
  <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

# 📡 Axios

Axios es una librería basada en Promesas para hacer solicitudes HTTP. Es ampliamente usada en proyectos frontend por su sencillez y soporte para interceptores, cancelaciones, manejo de errores, entre otros.

---

## 📚 Documentación Oficial

[👉 Ir a la documentación oficial de Axios](https://axios-http.com/)

---

## 🚀 Instalación

```bash
npm install axios
```

## 🛠️ Uso Básico

1. Hacer una petición GET

```bash
import axios from 'axios';
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

2. Enviar datos con POST

```bash
axios.post('/api/login', {
  username: 'admin',
  password: '123456',
})
.then((res) => console.log(res.data))
.catch((err) => console.error(err));
```

### 🧩 Métodos disponibles

| Componente            | Descripción                                 |
|-----------------------|---------------------------------------------|
| axios.get(url)        | Solicitud GET                               |
| axios.post(url, data) | Solicitud POST                              |
| axios.put(url, data)  | Actualización PUT                           |
| axios.delete(url)     | Eliminación DELETE                          |
| axios.patch(url, data)| Actualización parcial PATCH                 |

### ⚙️ Configuración global

```
import axios from 'axios';

axios.defaults.baseURL = 'https://api.miapp.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```

### 🔄 Interceptores

```
axios.interceptors.request.use((config) => {
  console.log('Solicitud:', config);
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);
```

# 🐻 Zustand

Zustand es una librería ligera y rápida para manejar el estado global en aplicaciones React. Tiene una API simple, sin boilerplate y sin necesidad de usar contextos manualmente.

---

## 📚 Documentación Oficial

[👉 Ir a la documentación oficial de Zustand](https://zustand-demo.pmnd.rs/)

---

## 🚀 Instalación

```bash
npm install zustand
```

### 🛠️ Uso Básico

1. Crear un store
```bash
import { create } from 'zustand';

interface BearState {
  bears: number;
  increase: () => void;
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
```

2. Usar el store en un componente

```bash
import React from 'react';
import useBearStore from './store/useBearStore';

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  return (
    <div>
      <h2>Osos: {bears}</h2>
      <button onClick={increase}>Aumentar</button>
    </div>
  );
}
```

### 🧩 API Básica

| Función       | Descripción                                       |
|---------------|---------------------------------------------------|
| create()      | Crea un nuevo store                               |
| set()         | Modifica el estado actual                         |
| get()         | Obtiene el estado actual                          |
| subscribe()   | Se suscribe a cambios de estado                   |
| persist       | Middleware para persistencia (localStorage, etc.) |
| devtools      | 	Middleware para integrar con Redux DevTools    |

### 💾 Middleware (Persistencia)

```bash
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useBearStore = create(
  persist(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 })),
    }),
    {
      name: 'bear-storage', // nombre en localStorage
    }
  )
);
```

### 🧠 Tips de uso

```bash
const useStore = create((set) => ({
  count: 0,
  name: 'John',
  increase: () => set((state) => ({ count: state.count + 1 })),
  setName: (name: string) => set({ name }),
}));
```

# 📝 Formik + ✅ Yup

Formik es una librería para construir formularios en React de forma sencilla y eficiente. Se complementa muy bien con Yup, una librería para validación de esquemas, ideal para manejar validaciones complejas y errores del lado del cliente.

---

## 📚 Documentación Oficial

- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)

---

## 🚀 Instalación

```bash
npm install formik yup
```

### 🛠️ Uso Básico

```bash
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Email inválido').required('Campo requerido'),
});

export function SignupForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <label>Nombre</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />

          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
}
```

### ⚙️ Principales funciones

| Elemento/Formik      | Descripción                                       |
|----------------------|---------------------------------------------------|
| <Formik>             | Componente principal que encapsula el formulario  |
| initialValues        | Objeto con los valores iniciales del formulario   |
| onSubmit             | Función que se ejecuta al enviar el formulario    |
| validationSchema     | Esquema Yup para validar los campos               |
| <Form>               | Reemplazo del <form> estándar                     |
| <Field>              | Campo de entrada conectado a Formik               |
| <ErrorMessage>       | Muestra errores de validación automáticamente     |

### 🧠 Validaciones con Yup

```
const schema = Yup.object({
  username: Yup.string()
    .min(4, 'Mínimo 4 caracteres')
    .max(15, 'Máximo 15 caracteres')
    .required('Requerido'),
  age: Yup.number()
    .min(18, 'Debes ser mayor de edad')
    .required('Edad requerida'),
  email: Yup.string().email('Email inválido').required(),
});
```
### 🔁 Validación personalizada

```
const schema = Yup.object({
  password: Yup.string()
    .required()
    .test('includes-number', 'Debe incluir un número', (val) =>
      /\d/.test(val || '')
    ),
});
```

### 🧪 Acceso a valores y errores

```
<Formik
  initialValues={{ email: '' }}
  validationSchema={Yup.object({
    email: Yup.string().email().required(),
  })}
  onSubmit={handleSubmit}
>
  {({ values, errors, touched, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <button type="submit">Enviar</button>
    </form>
  )}
</Formik>
```

### 🛠️ Integración con Material UI

```
import { TextField, Button } from '@mui/material';

<Field
  name="email"
  as={TextField}
  label="Email"
  fullWidth
  error={Boolean(touched.email && errors.email)}
  helperText={touched.email && errors.email}
/>

<Button type="submit" variant="contained">Enviar</Button>

```







