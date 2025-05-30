import { CircularProgress, Backdrop } from '@mui/material';

interface LoaderProps {
    open: boolean;
}

export const LoaderComponent = ({ open }: LoaderProps) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};