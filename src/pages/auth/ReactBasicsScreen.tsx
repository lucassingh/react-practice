import React, { createContext, useContext } from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    TextField,
    Chip,
    Container,
    Checkbox,
    List,
    ListItem,
    IconButton,
    ListItemText,
    Alert,
    CircularProgress
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HeaderComponent } from '../../components';
import { GridDeleteIcon } from '@mui/x-data-grid';

export const ReactBasicsScreen = () => {
    return (
        <>
            <HeaderComponent
                title="React Basics"
                bgColor="#e9de70"
                height={200}
                colorTitle="#1c1c1c"
                showButton={false}
            />
            <Container>
                <Box sx={{ p: 4, margin: '0 auto' }}>

                    {/* Sección de Hooks */}
                    <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                        React Hooks
                    </Typography>

                    {/* useState */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">useState</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <StateExample />
                        </AccordionDetails>
                    </Accordion>

                    {/* useEffect */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">useEffect</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <EffectExample />
                        </AccordionDetails>
                    </Accordion>

                    {/* Renderizado condicional */}
                    <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                        Conditional Rendering
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Example</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ConditionalRenderingExample />
                        </AccordionDetails>
                    </Accordion>

                    {/* Forms */}
                    <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                        Forms
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Example</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormExample />
                        </AccordionDetails>
                    </Accordion>

                    {/* Listas */}
                    <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                        Lists
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Example</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListExample />
                        </AccordionDetails>
                    </Accordion>

                    {/* Api calls fetch */}
                    <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                        API Calls with fetch
                    </Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Example</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ApiExample />
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </>
    );
};

const StateExample = () => {
    const [count, setCount] = React.useState(0);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <Box>
            <Typography paragraph>
                <strong>useState</strong> permite añadir estado a componentes funcionales.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Typography>Contador: {count}</Typography>
                <Button variant="contained" onClick={() => setCount(count + 1)}>
                    Incrementar
                </Button>
                <Button variant="outlined" onClick={() => setCount(count - 1)}>
                    Decrementar
                </Button>
                <Button variant="text" onClick={() => setCount(0)}>
                    Resetear
                </Button>
            </Box>

            <Typography paragraph>
                También puede manejar inputs de formularios:
            </Typography>

            <TextField
                label="Escribe algo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Typography>Valor actual: {inputValue || '(vacío)'}</Typography>
        </Box>
    );
};

const EffectExample = () => {
    const [count, setCount] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        document.title = `Contador: ${count}`;
        return () => {
            document.title = 'React App';
        };
    }, [count]);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box>
            <Typography paragraph>
                <strong>useEffect</strong> maneja efectos secundarios en componentes funcionales.
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Typography paragraph>
                    El título de la pestaña cambia con el contador (mira arriba):
                </Typography>
                <Button variant="contained" onClick={() => setCount(count + 1)}>
                    Incrementar ({count})
                </Button>
            </Box>

            <Box>
                <Typography paragraph>
                    Ancho de la ventana (prueba redimensionar):
                </Typography>
                <Chip label={`${windowWidth}px`} color="primary" />
            </Box>
        </Box>
    );
};

const ConditionalRenderingExample = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [userRole, setUserRole] = React.useState('user');

    return (
        <Box>
            <Typography paragraph>
                <strong>Renderizado Condicional</strong> muestra diferentes componentes basados en condiciones.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button
                    variant="contained"
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    color={isLoggedIn ? 'success' : 'error'}
                >
                    {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
                </Button>

                <Button
                    variant="outlined"
                    onClick={() => setUserRole(userRole === 'admin' ? 'user' : 'admin')}
                >
                    Cambiar a {userRole === 'admin' ? 'Usuario' : 'Admin'}
                </Button>
            </Box>

            {isLoggedIn ? (
                <Typography paragraph color="success.main">
                    Bienvenido usuario
                </Typography>
            ) : (
                <Typography paragraph color="error.main">
                    Por favor inicia sesión
                </Typography>
            )}

            {isLoggedIn && (
                <Box sx={{ mt: 2 }}>
                    <Typography paragraph>
                        Contenido exclusivo para usuarios logueados
                    </Typography>

                    {/* Ejemplo 3: switch case equivalente */}
                    {userRole === 'admin' ? (
                        <Box sx={{ p: 2, bgcolor: 'warning.light' }}>
                            <Typography>Panel de administrador</Typography>
                            <Button variant="contained" color="warning">
                                Eliminar usuarios
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ p: 2, bgcolor: 'info.light' }}>
                            <Typography>Panel de usuario normal</Typography>
                            <Button variant="contained">
                                Ver perfil
                            </Button>
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    );
};

const FormExample = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        subscribe: false
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Formulario enviado: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Manejo de Formularios</Typography>

            <TextField
                fullWidth
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Contraseña"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
            />

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Checkbox
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                />
                <Typography>Suscribirse al newsletter</Typography>
            </Box>

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Enviar
            </Button>

            <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100' }}>
                <Typography variant="body2">Estado actual:</Typography>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </Box>
        </Box>
    );
};

const ListExample = () => {
    const [items, setItems] = React.useState([
        { id: 1, text: 'Primer elemento' },
        { id: 2, text: 'Segundo elemento' },
        { id: 3, text: 'Tercer elemento' }
    ]);
    const [newItem, setNewItem] = React.useState('');

    const addItem = () => {
        if (newItem.trim()) {
            setItems([...items, {
                id: Date.now(),
                text: newItem
            }]);
            setNewItem('');
        }
    };

    const removeItem = (id: any) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Listas y Keys</Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    label="Nuevo elemento"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    size="small"
                />
                <Button onClick={addItem} variant="outlined">
                    Agregar
                </Button>
            </Box>

            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                {items.map(item => (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <IconButton edge="end" onClick={() => removeItem(item.id)}>
                                <GridDeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="body2" sx={{ mt: 1 }}>
                Total elementos: {items.length}
            </Typography>
        </Box>
    );
};

const ApiExample = () => {
    const [data, setData] = React.useState<{ title: string; body: string } | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [hasFetched, setHasFetched] = React.useState(false);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!response.ok) throw new Error('Error en la respuesta');
            const json = await response.json();
            setData(json);
            setHasFetched(true);
            console.log(json);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ mt: 3 }}>
            <Button
                onClick={fetchData}
                variant="contained"
                disabled={loading}
                sx={{ mb: 2 }}
            >
                {loading ? 'Loading...' : hasFetched ? 'Reload' : 'Get Data'}
            </Button>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <CircularProgress />
                </Box>
            )}

            {data && hasFetched && !loading && (
                <Box sx={{
                    p: 2,
                    borderRadius: 1,
                    animation: 'fadeIn 0.5s ease-in',
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 }
                    }
                }}>
                    <Typography variant="subtitle1" gutterBottom>
                        <strong>Title:</strong> {data.title}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Content:</strong> {data.body}
                    </Typography>
                </Box>
            )}

            {!hasFetched && !loading && !error && (
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                    Push button to get Data
                </Typography>
            )}
        </Box>
    );
};

export default ReactBasicsScreen;