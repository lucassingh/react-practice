import { TextField, Button, Box, Modal, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { IUser, UserFormProps } from '../../data/interfaces/User';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1
};

export const UserFormComponent = ({ initialData, onSubmit, onCancel, isOpen, isLoading = false }: UserFormProps) => {
    const [user, setUser] = useState<IUser>(initialData || {
        id: 0,
        name: '',
        lastName: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (initialData) {
            setUser(initialData);
        } else {
            setUser({
                id: 0,
                name: '',
                lastName: '',
                email: '',
                phone: ''
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
    };

    return (
        <Modal open={isOpen} onClose={onCancel}>
            <Box sx={style}>
                <Typography variant="h6" gutterBottom>
                    {initialData ? 'Editar Usuario' : 'Agregar Usuario'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                        disabled={isLoading}
                    />
                    <TextField
                        fullWidth
                        label="Apellido"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        margin="normal"
                        required
                        disabled={isLoading}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        margin="normal"
                        required
                        disabled={isLoading}
                    />
                    <TextField
                        fullWidth
                        label="Teléfono"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        margin="normal"
                        required
                        disabled={isLoading}
                    />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Button
                            onClick={onCancel}
                            variant="outlined"
                            disabled={isLoading}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isLoading}
                            endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                        >
                            {isLoading ? 'Procesando...' : initialData ? 'Actualizar' : 'Guardar'}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};