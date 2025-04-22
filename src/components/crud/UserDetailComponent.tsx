import { Modal, Box, Typography, Card, CardContent, Button } from '@mui/material';
import { UserDetailsProps } from '../../data/interfaces/User';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
    borderRadius: 1
};

export const UserDetailComponent = ({ user, isOpen, onClose }: UserDetailsProps) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={style}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Detalles del Usuario
                        </Typography>
                        <Typography variant="body1"><strong>ID:</strong> {user.id}</Typography>
                        <Typography variant="body1"><strong>Nombre:</strong> {user.name}</Typography>
                        <Typography variant="body1"><strong>Apellido:</strong> {user.lastName}</Typography>
                        <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
                        <Typography variant="body1"><strong>Teléfono:</strong> {user.phone}</Typography>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={onClose} variant="contained">
                                Cerrar
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Modal>
    );
};