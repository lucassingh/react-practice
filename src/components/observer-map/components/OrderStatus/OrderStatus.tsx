import React from 'react';
import { Card, CardContent, Box, Typography, LinearProgress } from '@mui/material';
import { OrderState } from '../../types/Order';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import HomeIcon from '@mui/icons-material/Home';

const statusIcons = {
    PENDING: <AccessTimeIcon color="disabled" fontSize="large" />,
    TAKEN: <CheckCircleIcon color="primary" fontSize="large" />,
    PREPARING: <LocalDiningIcon color="secondary" fontSize="large" />,
    DELIVERY: <DeliveryDiningIcon color="warning" fontSize="large" />,
    DELIVERED: <HomeIcon color="success" fontSize="large" />
};

const statusColors = {
    PENDING: 'text.disabled',
    TAKEN: 'primary.main',
    PREPARING: 'secondary.main',
    DELIVERY: 'warning.main',
    DELIVERED: 'success.main'
};

interface OrderStatusProps {
    state: OrderState;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ state }) => {
    return (
        <Card sx={{ mb: 3, boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                        {statusIcons[state.status]}
                    </Box>
                    <Box>
                        <Typography variant="h6" component="div" color={statusColors[state.status]}>
                            {state.message}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {state.timestamp.toLocaleTimeString()}
                        </Typography>
                    </Box>
                </Box>
                <LinearProgress
                    variant="determinate"
                    value={state.progress}
                    sx={{ height: 10, borderRadius: 5 }}
                    color={
                        state.progress < 25 ? 'inherit' :
                            state.progress < 50 ? 'primary' :
                                state.progress < 75 ? 'secondary' :
                                    state.progress < 100 ? 'warning' : 'success'
                    }
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Progreso del pedido: {state.progress}%
                </Typography>
            </CardContent>
        </Card>
    );
};

export default OrderStatus;