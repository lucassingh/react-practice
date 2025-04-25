import {
    Container,
    Typography,
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    useTheme,
    IconButton,
    Collapse,
    Alert,
    Button
} from "@mui/material";
import {
    Bolt as BoltIcon,
    Code as CodeIcon,
    Palette as PaletteIcon,
    Psychology as PsychologyIcon,
    Public as PublicIcon,
    Description as DescriptionIcon,
    CheckCircle as CheckCircleIcon,
    ExpandMore as ExpandMoreIcon,
    Storage as StorageIcon,
    Build as BuildIcon,
    Send as SendIcon,
    Lock as LockIcon,
    CheckCircleOutline,
    ContentCopy as CopyIcon
} from "@mui/icons-material";
import { HeaderComponent } from "../../components";
import { useState } from "react";

export const HomeScreen = () => {

    const theme = useTheme();
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleCopy = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const codeBlocks = [
        {
            id: 'install',
            title: 'Instalar dependencias',
            description: 'Ejecuta uno de estos comandos en tu terminal:',
            commands: [
                {
                    id: 'npm',
                    language: 'bash',
                    code: 'npm install -D vitest @vitest/coverage-v8 @testing-library/react @testing-library/jest-dom jsdom @types/node'
                },
                {
                    id: 'yarn',
                    language: 'bash',
                    code: 'yarn add -D vitest @vitest/coverage-v8 @testing-library/react @testing-library/jest-dom jsdom @types/node'
                }
            ]
        },
        {
            id: 'vite-config',
            title: 'Configurar Vitest',
            description: 'Crea o modifica el archivo vite.config.ts:',
            commands: [
                {
                    id: 'vite',
                    language: 'typescript',
                    code: `import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'
      
      export default defineConfig({
        plugins: [react()],
        test: {
          globals: true,
          environment: 'jsdom',
          setupFiles: './src/test/setup.ts',
          coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
          },
        },
      })`
                }
            ]
        }
    ];

    return (
        <>
            <HeaderComponent
                title="🚀 Proyecto de Capacitación en React + TypeScript"
                subTitle="Este repositorio fue creado como parte de una capacitación con React y desarrollo front-end. El objetivo es aprender a crear aplicaciones modernas usando herramientas reales del ecosistema frontend."
                bgColor="#e2ebe1"
                height={200}
                colorTitle="#1c1c1c"
                colorSubTitle="#1c1c1c"
                showButton={false}
            />
            <Container sx={{ padding: 4 }} maxWidth="lg">
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold', mt: 3 }}>
                        🧱 Tecnologías utilizadas
                    </Typography>

                    <List>
                        <ListItem>
                            <ListItemIcon><BoltIcon color="primary" /></ListItemIcon>
                            <ListItemText
                                primary="Vite como entorno de desarrollo rápido"
                                secondary={<Link href="https://vitejs.dev/" target="_blank">https://vitejs.dev/</Link>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                            <ListItemText
                                primary="React con TypeScript"
                                secondary={<Link href="https://reactjs.org/" target="_blank">https://reactjs.org/</Link>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><PaletteIcon color="primary" /></ListItemIcon>
                            <ListItemText
                                primary="Material UI para componentes de UI"
                                secondary={<Link href="https://mui.com/" target="_blank">https://mui.com/</Link>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><PsychologyIcon color="primary" /></ListItemIcon>
                            <ListItemText
                                primary="Zustand para manejo de estado global"
                                secondary={<Link href="https://docs.pmnd.rs/zustand/introduction" target="_blank">https://docs.pmnd.rs/zustand/introduction</Link>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><PublicIcon color="primary" /></ListItemIcon>
                            <ListItemText
                                primary="Axios para consumir APIs"
                                secondary={<Link href="https://axios-http.com/" target="_blank">https://axios-http.com/</Link>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><DescriptionIcon color="primary" /></ListItemIcon>
                            <ListItemText
                                primary="Formik + Yup para formularios con validación"
                                secondary={
                                    <>
                                        <Link href="https://formik.org/" target="_blank">Formik</Link>,{' '}
                                        <Link href="https://github.com/jquense/yup" target="_blank">Yup</Link>
                                    </>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><StorageIcon color="primary" /></ListItemIcon>
                            <ListItemText
                                primary="NASA API - Mars Rover Photos como fuente de datos real"
                                secondary={<Link href="https://api.nasa.gov/" target="_blank">https://api.nasa.gov/</Link>}
                            />
                        </ListItem>
                    </List>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        🔑 API de la NASA
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Estamos utilizando la API pública de la NASA para obtener fotos del Rover Curiosity de Marte.
                        La idea de utilizar esta API es poder observar como se trabaja con la consumisión de datos reales.
                    </Typography>

                    <Box sx={{ p: 2, borderRadius: 1, my: 2 }}>
                        <Typography variant="subtitle1">Endpoint usado:</Typography>
                        <Link href="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos" target="_blank">
                            https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos
                        </Link>

                        <Typography variant="subtitle1" sx={{ mt: 2 }}>Documentación oficial:</Typography>
                        <Link href="https://api.nasa.gov/" target="_blank">👉 NASA API Docs</Link>
                    </Box>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 2 }}>
                        Cómo obtener una API KEY
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Ir a https://api.nasa.gov" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Completar el formulario con tu nombre y correo" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Te llegará una API Key por correo o la verás en pantalla" />
                        </ListItem>
                    </List>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        🔐 Variables de Entorno
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Debes crear un archivo <code>.env</code> en la raíz del proyecto con las siguientes variables:
                    </Typography>

                    <Box component="pre" sx={{
                        backgroundColor: '#263238',
                        color: '#eceff1',
                        p: 2,
                        borderRadius: 1,
                        overflowX: 'auto'
                    }}>
                        <code>
                            VITE_URL=https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos<br />
                            VITE_API_KEY=tu_api_key_aqui
                        </code>
                    </Box>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3 }}>
                        🔐 Login Simulado
                    </Typography>
                    <Typography variant="body1" paragraph>
                        El proyecto incluye un login simulado como práctica para formularios con validación.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                        <Chip icon={<LockIcon />} label="Usuario: admin" color="info" variant="outlined" />
                        <Chip icon={<LockIcon />} label="Contraseña: 1234" color="info" variant="outlined" />
                    </Box>
                </Paper>

                {/* Sección de estructura del proyecto */}
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        📁 Estructura del Proyecto
                    </Typography>

                    <Box component="pre" sx={{
                        p: 2,
                        borderRadius: 1,
                        overflowX: 'auto'
                    }}>
                        <code>
                            src/<br />
                            ├── assets         # Imágenes y recursos estáticos<br />
                            ├── components     # Componentes reutilizables (botones, tablas, etc.)<br />
                            ├── data           # Lógica de negocio organizada por capas<br />
                            │   ├── handlers     # Conectores entre el store y los componentes<br />
                            │   ├── interfaces   # Tipos y estructuras de datos TypeScript<br />
                            │   ├── services     # Llamadas a la API (Axios)<br />
                            │   └── store        # Gestión del estado con Zustand<br />
                            ├── pages          # Páginas del sitio (Login, Home, etc.)<br />
                            ├── routes         # Definición de rutas y navegación<br />
                            └── utils          # Funciones utilitarias auxiliares
                        </code>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        🧠 Patrón de Arquitectura: Interface - Service - Store - Handler
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Este patrón organiza la lógica de negocio de forma clara y escalable:
                    </Typography>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold' }}>📐 Interfaces (interfaces/)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" paragraph>
                                Define las estructuras de datos y tipos que usaremos en toda la app.
                            </Typography>

                            <Box component="pre" sx={{
                                backgroundColor: '#f5f5f5',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>
                                    export interface MarsPhoto {'{'}<br />
                                    &nbsp;&nbsp;id: number;<br />
                                    &nbsp;&nbsp;sol: number;<br />
                                    &nbsp;&nbsp;camera: MarsCamera;<br />
                                    &nbsp;&nbsp;img_src: string;<br />
                                    &nbsp;&nbsp;earth_date: string;<br />
                                    &nbsp;&nbsp;rover: MarsRover;<br />
                                    {'}'}
                                </code>
                            </Box>

                            <Typography variant="h6" sx={{ mt: 2 }}>✅ Beneficios:</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Seguridad de tipos" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Autocompletado" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Documentación automática" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Evita errores en tiempo de compilación" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold' }}>🌍 Services (services/)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" paragraph>
                                Encapsula la comunicación con APIs externas (Axios).
                            </Typography>

                            <Box component="pre" sx={{
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>
                                    export const getMarsPhotos = async (params: MarsPhotosParams) =&gt; {'{'}<br />
                                    &nbsp;&nbsp;const response = await nasaApi.get('', {'{'} params {'}'});<br />
                                    &nbsp;&nbsp;return response.data.photos;<br />
                                    {'}'};
                                </code>
                            </Box>

                            <Typography variant="h6" sx={{ mt: 2 }}>✅ Beneficios:</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Aísla la lógica de red" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Centraliza errores y headers" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Reutilizable desde cualquier parte" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold' }}>📦 Store (store/)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" paragraph>
                                Gestiona el estado global con Zustand.
                            </Typography>

                            <Box component="pre" sx={{
                                backgroundColor: '#f5f5f5',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>
                                    const useMarsPhotosStore = create&lt;MarsPhotosState&gt;((set) =&gt; ({'{'}<br />
                                    &nbsp;&nbsp;photos: [],<br />
                                    &nbsp;&nbsp;loading: false,<br />
                                    &nbsp;&nbsp;fetchPhotos: async () =&gt; {'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;set({'{'} loading: true {'}'});<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;const photos = await getMarsPhotos();<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;set({'{'} photos, loading: false {'}'});<br />
                                    &nbsp;&nbsp;{'}'}<br />
                                    {'}'}));
                                </code>
                            </Box>

                            <Typography variant="h6" sx={{ mt: 2 }}>✅ Beneficios:</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Estado centralizado" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="No más prop drilling" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Reutilización y persistencia del estado" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold' }}>🧩 Handler (handlers/)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" paragraph>
                                Conecta el store con los componentes. Ideal para mantener los componentes "tontos".
                            </Typography>

                            <Box component="pre" sx={{
                                backgroundColor: '#f5f5f5',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>
                                    export const useMarsPhotosHandler = () =&gt; {'{'}<br />
                                    &nbsp;&nbsp;const {'{'} photos, fetchPhotos {'}'} = useMarsPhotosStore();<br />
                                    &nbsp;&nbsp;<br />
                                    &nbsp;&nbsp;useEffect(() =&gt; {'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;fetchPhotos();<br />
                                    &nbsp;&nbsp;{'}'}, []);<br />
                                    &nbsp;&nbsp;<br />
                                    &nbsp;&nbsp;return {'{'} photos {'}'};<br />
                                    {'}'};
                                </code>
                            </Box>

                            <Typography variant="h6" sx={{ mt: 2 }}>✅ Beneficios:</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Limpia la lógica de los componentes" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Facilita testeo y mantenimiento" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                                    <ListItemText primary="Permite lógica UI compleja sin ensuciar el store" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3, fontWeight: 'bold' }}>
                        🧭 Diagrama de Flujo
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Componente UI → Handler → Store → Service → API Externa<br />
                        ↑_________↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑_________↓
                    </Typography>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3, fontWeight: 'bold' }}>
                        🎯 Beneficios de este patrón
                    </Typography>

                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>🔁 Reusabilidad</TableCell>
                                    <TableCell>Services y Stores reutilizables en toda la app</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>🧹 Separación</TableCell>
                                    <TableCell>Cada capa tiene una responsabilidad clara</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>🧪 Testeabilidad</TableCell>
                                    <TableCell>Fácil de testear por separado cada parte</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>⚙️ Mantenibilidad</TableCell>
                                    <TableCell>Cambios localizados sin afectar toda la app</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>🚀 Escalabilidad</TableCell>
                                    <TableCell>Se adapta a proyectos grandes sin perder control</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3, fontWeight: 'bold' }}>
                        📊 Vista de Datos: Tabla
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Los datos obtenidos desde la API de la NASA se renderizan en una tabla con Material UI, mostrando información como:
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="ID de la foto" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Fecha en la Tierra" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Nombre del Rover" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Imagen capturada" />
                        </ListItem>
                    </List>

                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                        <Paper elevation={3} sx={{ p: 1 }}>
                            <Typography variant="caption" color="text.secondary">
                                [Imagen de ejemplo de la tabla con datos de la NASA]
                            </Typography>
                        </Paper>
                    </Box>
                </Paper>

                {/* Sección de inicialización del proyecto */}
                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        # Inicializar El proyecto
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Antes de clonar el repositorio tenemos que tener instalado Node y npm en nuestra pc.
                        Para este caso vamos instalar Node por medio de nvm y eligiremos una version de la 18 en adelante.
                    </Typography>

                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold', mt: 3 }}>
                        🛠️ Instalación de Node con NVM y uso de NVM
                    </Typography>
                    <Typography variant="body1" paragraph>
                        NVM (Node Version Manager) es una herramienta que permite instalar y gestionar múltiples versiones de Node.js en tu sistema.
                        Es especialmente útil para proyectos que pueden requerir diferentes versiones de Node.
                    </Typography>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 2 }}>
                        ¿Por qué usar NVM?
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Permite cambiar fácilmente entre versiones de Node.js" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Facilita la instalación de nuevas versiones" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="No requiere permisos de administrador para instalar paquetes globales" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="Aisla las versiones de Node por proyecto" />
                        </ListItem>
                    </List>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3 }}>
                        Pasos para instalar NVM
                    </Typography>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>1. Para Linux/macOS</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash</code>
                            </Box>
                            <Typography variant="subtitle2" sx={{ mt: 1 }}>O usando wget:</Typography>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash</code>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>2. Para Windows</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Descargar el instalador de windows <Link href="https://github.com/coreybutler/nvm-windows/releases" target="_blank">Aquí</Link>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3 }}>
                        Comandos básicos NVM
                    </Typography>

                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>1. Instalar una versión específica de Node</TableCell>
                                    <TableCell>
                                        <Box component="pre" sx={{ m: 0 }}>
                                            <code>nvm install 18.16.0</code>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>2. Usar una versión específica</TableCell>
                                    <TableCell>
                                        <Box component="pre" sx={{ m: 0 }}>
                                            <code>nvm use 18.16.0</code>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>3. Listar versiones instaladas</TableCell>
                                    <TableCell>
                                        <Box component="pre" sx={{ m: 0 }}>
                                            <code>nvm ls</code>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>4. Establecer versión por defecto</TableCell>
                                    <TableCell>
                                        <Box component="pre" sx={{ m: 0 }}>
                                            <code>nvm alias default 18.16.0</code>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="h6" gutterBottom component="div">
                        Configuración post-instalación
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Después de instalar Node con NVM, verifica que todo funcione correctamente:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Chip label="node --version" color="primary" variant="outlined" />
                        <Chip label="npm --version" color="primary" variant="outlined" />
                    </Box>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3 }}>
                        Levantar el proyecto
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Abrir una consola cmd o powershell y clonar el repositorio
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                        <Chip
                            icon={<SendIcon />}
                            label="git clone https://github.com/lucassingh/react-practice.git"
                            color="secondary"
                            variant="outlined"
                            sx={{ justifyContent: 'flex-start' }}
                        />
                        <Chip
                            icon={<SendIcon />}
                            label="cd react-practice"
                            color="secondary"
                            variant="outlined"
                            sx={{ justifyContent: 'flex-start' }}
                        />
                        <Chip
                            icon={<SendIcon />}
                            label="npm install"
                            color="secondary"
                            variant="outlined"
                            sx={{ justifyContent: 'flex-start' }}
                        />
                        <Chip
                            icon={<SendIcon />}
                            label="npm run dev"
                            color="secondary"
                            variant="outlined"
                            sx={{ justifyContent: 'flex-start' }}
                        />
                    </Box>

                    <Typography variant="body1">
                        Abrir en navegador: <Link href="http://localhost:5173/" target="_blank">http://localhost:5173/</Link>
                    </Typography>
                </Paper>

                {/* Sección de creación de proyecto desde 0 */}
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        ⚛️ Crear un proyecto React con Vite + TypeScript desde 0 (opcional)
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Documentación oficial de Vite <Link href="https://vite.dev/" target="_blank">Aquí</Link>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Vite es un build tool moderno que ofrece:
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon><BoltIcon color="primary" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="⚡ Velocidad" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><BuildIcon color="primary" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="🛠️ Configuración mínima requerida" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CodeIcon color="primary" fontSize="small" /></ListItemIcon>
                            <ListItemText primary="📦 Soporte nativo para TypeScript" />
                        </ListItem>
                    </List>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3, fontWeight: 'bold' }}>
                        🚀 Comandos para crear e iniciar el proyecto
                    </Typography>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>1. Crear nuevo proyecto (elige React + TypeScript)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>npm create vite@latest nombre-de-tu-proyecto -- --template react-ts</code>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>2. Navegar al directorio del proyecto</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>cd nombre-de-tu-proyecto</code>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>3. Instalar dependencias</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>npm install</code>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>4. Iniciar servidor de desarrollo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>npm run dev</code>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Typography variant="h6" gutterBottom component="div" sx={{ mt: 3, fontWeight: 'bold' }}>
                        📂 Estructura de archivos generada
                    </Typography>

                    <Box component="pre" sx={{
                        p: 2,
                        borderRadius: 1,
                        overflowX: 'auto',
                        mb: 3
                    }}>
                        <code>
                            tu-proyecto/<br />
                            ├── node_modules/<br />
                            ├── public/          # Archivos estáticos<br />
                            ├── src/<br />
                            │   ├── assets/      # Imágenes/iconos<br />
                            │   ├── App.css      # Estilos principales<br />
                            │   ├── App.tsx      # Componente App<br />
                            │   ├── main.tsx     # Punto de entrada<br />
                            │   └── vite-env.d.ts # Tipos de Vite<br />
                            ├── index.html       # HTML principal<br />
                            ├── package.json     # Dependencias y scripts<br />
                            ├── tsconfig.json    # Config TypeScript<br />
                            └── vite.config.ts   # Config Vite
                        </code>
                    </Box>

                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        🛠️ Scripts importantes en package.json
                    </Typography>

                    <TableContainer component={Paper} sx={{ mb: 3 }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>npm run dev</TableCell>
                                    <TableCell>Inicia servidor de desarrollo (localhost)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>npm run build</TableCell>
                                    <TableCell>Crea versión optimizada para producción</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>npm run preview</TableCell>
                                    <TableCell>Prueba localmente el build de producción</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>npm run lint</TableCell>
                                    <TableCell>Ejecuta el linter (ESLint)</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        🔧 Configuración recomendada adicional
                    </Typography>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>1. Instalar ESLint (para validar código)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev</code>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>2. Configurar Prettier (para formateo automático)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box component="pre" sx={{
                                backgroundColor: '#263238',
                                color: '#eceff1',
                                p: 2,
                                borderRadius: 1,
                                overflowX: 'auto'
                            }}>
                                <code>npm</code>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
                <Box sx={{ maxWidth: 800, mx: 'auto', p: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        mb: 4,
                        pb: 2,
                        borderBottom: `1px solid ${theme.palette.divider}`
                    }}>
                        Configuración de Vitest para React + TypeScript
                    </Typography>

                    {codeBlocks.map((block, index) => (
                        <Accordion
                            key={block.id}
                            expanded={expanded === `panel${index + 1}`}
                            onChange={handleChange(`panel${index + 1}`)}
                            sx={{ mb: 2 }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                    {index + 1}. {block.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography paragraph sx={{ mb: 2 }}>
                                    {block.description}
                                </Typography>

                                {block.commands.map((command) => (
                                    <Box key={command.id} sx={{ mb: 3 }}>
                                        <Paper
                                            elevation={2}
                                            sx={{
                                                position: 'relative',
                                                backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : '#f5f5f5',
                                                p: 2,
                                                borderRadius: theme.shape.borderRadius,
                                                fontFamily: 'monospace',
                                                whiteSpace: 'pre-wrap',
                                                wordBreak: 'break-word'
                                            }}
                                        >
                                            {command.code}
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 8,
                                                    right: 8,
                                                    color: theme.palette.text.secondary
                                                }}
                                                onClick={() => handleCopy(command.code, command.id)}
                                            >
                                                {copiedId === command.id ? <CheckCircleOutline fontSize="small" /> : <CopyIcon fontSize="small" />}
                                            </IconButton>
                                        </Paper>

                                        <Collapse in={copiedId === command.id}>
                                            <Alert
                                                severity="success"
                                                sx={{ mt: 1, width: 'fit-content' }}
                                                icon={<CheckCircleOutline fontSize="small" />}
                                            >
                                                Código copiado al portapapeles
                                            </Alert>
                                        </Collapse>
                                    </Box>
                                ))}
                            </AccordionDetails>
                            <Divider />
                        </Accordion>
                    ))}

                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setExpanded(expanded === false ? 'panel1' : false)}
                            sx={{ textTransform: 'none' }}
                        >
                            {expanded ? 'Colapsar todo' : 'Expandir todo'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}