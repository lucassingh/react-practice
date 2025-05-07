import React from 'react';
import { FormControlLabel, Checkbox, Typography, Box } from '@mui/material';
import { OrderStatus } from '../../types/Order';

interface StatusCheckboxProps {
    status: OrderStatus;
    label: string;
    checked: boolean;
    disabled: boolean;
    onChange: (status: OrderStatus) => void;
}

const statusDescriptions = {
    PENDING: 'El pedido ha sido recibido y está esperando confirmación',
    TAKEN: 'El restaurante ha aceptado el pedido y comenzará a prepararlo',
    PREPARING: 'El restaurante está preparando tu pedido',
    DELIVERY: 'El repartidor está en camino con tu pedido',
    DELIVERED: 'El pedido ha sido entregado satisfactoriamente'
};

const StatusCheckbox: React.FC<StatusCheckboxProps> = ({
    status,
    label,
    checked,
    disabled,
    onChange
}) => {
    return (
        <Box sx={{ mb: 2 }}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={() => onChange(status)}
                        disabled={disabled}
                        color={
                            status === 'PENDING' ? 'default' :
                                status === 'TAKEN' ? 'primary' :
                                    status === 'PREPARING' ? 'secondary' :
                                        status === 'DELIVERY' ? 'warning' : 'success'
                        }
                    />
                }
                label={
                    <Box>
                        <Typography variant="body1" component="span">
                            {label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ display: 'block' }}>
                            {statusDescriptions[status]}
                        </Typography>
                    </Box>
                }
            />
        </Box>
    );
};

export default StatusCheckbox;