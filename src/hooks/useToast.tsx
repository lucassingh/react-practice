import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const useToast = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');

    const showToast = (msg: string, severity: 'success' | 'error' | 'info' | 'warning' = 'success') => {
        setMessage(msg);
        setSeverity(severity);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Toast = () => (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{
                position: 'fixed',
                top: theme => theme.spacing(8),
                right: theme => theme.spacing(2),
                zIndex: theme => theme.zIndex.snackbar,
            }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{
                    width: '100%',
                    boxShadow: theme => theme.shadows[6],
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );

    return { showToast, Toast };
};