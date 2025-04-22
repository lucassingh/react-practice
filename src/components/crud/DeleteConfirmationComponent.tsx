import { Modal, Box, Typography, Button, CircularProgress } from '@mui/material';
import { DeleteConfirmationProps } from '../../data/interfaces/User';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    borderRadius: 1
};

export const DeleteConfirmationComponent = ({ user, isOpen, onConfirm, onCancel, isLoading = false }: DeleteConfirmationProps) => {
    return (
        <Modal open={isOpen} onClose={onCancel}>
            <Box sx={style}>
                <Typography variant="h6" gutterBottom>
                    Confirmar Eliminación
                </Typography>
                <Typography variant="body1">
                    ¿Está seguro que desea eliminar al usuario "{user.name} {user.lastName}" con ID: {user.id}?
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Button
                        onClick={onCancel}
                        variant="outlined"
                        disabled={isLoading}
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={onConfirm}
                        variant="contained"
                        color="error"
                        disabled={isLoading}
                        endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                        {isLoading ? 'Eliminando...' : 'Eliminar'}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};