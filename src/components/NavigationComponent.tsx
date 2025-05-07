import { Link } from 'react-router-dom';
import {
    AppBar,
    Avatar,
    Button,
    Container,
    Toolbar,
    Typography,
    Box,
    Stack,
    Switch,
    FormControlLabel,
} from '@mui/material';
import { useAuthStore } from '../data/store/authStore';
import { useTheme } from '../context/ThemeContext';

export function NavigationComponent() {
    const { isAuthenticated, user, logout } = useAuthStore();
    const { darkMode, toggleTheme } = useTheme();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: { xs: 1, md: 0 }
                        }}
                    >
                        REACT APP
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            justifyContent: 'center',
                            gap: 2
                        }}
                    >
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/react-basics"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            React Basics
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/react-crud"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            React CRUD
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/react-advanced"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            React Advanced
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/react-observer"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            React Observer
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/react-observer-map"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            React Observer map
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={darkMode}
                                    onChange={toggleTheme}
                                    color="secondary"
                                />
                            }
                            label={darkMode ? 'Modo Oscuro' : 'Modo Claro'}
                            sx={{ color: 'inherit', mr: 1 }}
                        />

                        {isAuthenticated ? (
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar sx={{
                                    bgcolor: 'secondary.main',
                                    width: 32,
                                    height: 32,
                                    fontSize: '0.875rem'
                                }}>
                                    {user}
                                </Avatar>
                                <Typography variant="subtitle1" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    {user}
                                </Typography>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={logout}
                                    sx={{
                                        ml: 1,
                                        color: '#fff',
                                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                                    }}
                                >
                                    Logout
                                </Button>
                            </Stack>
                        ) : (
                            <Button
                                variant='contained'
                                color='secondary'
                                sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' } }}
                                component={Link}
                                to="/login"
                            >
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}