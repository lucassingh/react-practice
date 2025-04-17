import { Link } from 'react-router-dom';
import {
    AppBar,
    Avatar,
    Button,
    Container,
    Toolbar,
    Typography,
    Box,
    Stack
} from '@mui/material';
import { useAuthStore } from '../data/store/authStore';

export function NavigationComponent() {

    const { isAuthenticated, user, logout } = useAuthStore();

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
                        Mars images
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
                            to="/about"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            About
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/products"
                            sx={{
                                my: 2,
                                display: 'block',
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' }
                            }}
                        >
                            Products
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {isAuthenticated ? (
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar sx={{
                                    bgcolor: 'secondary.main',
                                    width: 32,
                                    height: 32,
                                    fontSize: '0.875rem'
                                }}>
                                    {user?.charAt(0).toUpperCase()}
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