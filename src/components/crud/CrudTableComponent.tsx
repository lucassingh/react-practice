import { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    Box,
    Typography,
    Alert
} from '@mui/material';
import {
    Add as AddIcon,
    Visibility as VisibilityIcon,
    Edit as EditIcon,
    Delete as DeleteIcon
} from '@mui/icons-material';
import { useToast } from '../../hooks/useToast';
import { IUser } from '../../data/interfaces/User';
import { useApi } from '../../hooks/useMockAPI';
import { LoaderComponent, UserFormComponent, DeleteConfirmationComponent, UserDetailComponent } from '../../components';

export const CrudTableComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const { showToast, Toast } = useToast();
    const { loading, error, getUsers, createUser, updateUser, deleteUser } = useApi();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                showToast('Error al cargar los usuarios', 'error');
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = () => {
        setSelectedUser(null);
        setIsFormOpen(true);
    };

    const handleEditUser = (user: IUser) => {
        setSelectedUser(user);
        setIsFormOpen(true);
    };

    const handleViewUser = (user: IUser) => {
        setSelectedUser(user);
        setIsDetailsOpen(true);
    };

    const handleDeleteUser = (user: IUser) => {
        setSelectedUser(user);
        setIsDeleteDialogOpen(true);
    };

    const handleSubmit = async (user: IUser) => {
        try {
            if (user.id) {
                const updatedUser = await updateUser(user);
                setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
                showToast('Usuario actualizado correctamente');
            } else {
                const newUser = await createUser(user);
                setUsers([...users, newUser]);
                showToast('Usuario agregado correctamente');
            }
            setIsFormOpen(false);
        } catch (err) {
            showToast('Error al guardar el usuario', 'error');
        }
    };

    const handleConfirmDelete = async () => {
        if (selectedUser) {
            try {
                await deleteUser(selectedUser.id);
                setUsers(users.filter(user => user.id !== selectedUser.id));
                showToast('Usuario eliminado correctamente');
                setIsDeleteDialogOpen(false);
            } catch (err) {
                showToast('Error al eliminar el usuario', 'error');
            }
        }
    };

    return (
        <Box sx={{ p: 3, position: 'relative' }}>
            <LoaderComponent open={loading} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4">Gestión de Usuarios</Typography>
                <Button
                    onClick={handleAddUser}
                    variant="contained"
                    startIcon={<AddIcon />}
                    disabled={loading}
                >
                    Agregar Usuario
                </Button>
            </Box>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Teléfono</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        onClick={() => handleViewUser(user)}
                                        color="primary"
                                        disabled={loading}
                                    >
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => handleEditUser(user)}
                                        color="primary"
                                        disabled={loading}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => handleDeleteUser(user)}
                                        color="primary"
                                        disabled={loading}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {users.length === 0 && !loading && (
                <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                    No hay usuarios registrados
                </Typography>
            )}

            <UserFormComponent
                initialData={selectedUser}
                onSubmit={handleSubmit}
                onCancel={() => setIsFormOpen(false)}
                isOpen={isFormOpen}
                isLoading={loading}
            />

            <UserDetailComponent
                user={selectedUser || { id: 0, name: '', lastName: '', email: '', phone: '' }}
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
            />

            <DeleteConfirmationComponent
                user={selectedUser || { id: 0, name: '', lastName: '', email: '', phone: '' }}
                isOpen={isDeleteDialogOpen}
                onConfirm={handleConfirmDelete}
                onCancel={() => setIsDeleteDialogOpen(false)}
                isLoading={loading}
            />

            <Toast />
        </Box>
    );
};