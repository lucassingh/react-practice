import React, { useState } from 'react';
import {
    Box,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import { OrderListSubject as OrderSubject } from '../services/OrderSubject';
import { OrderStatus } from '../interfaces/orderInterface';

interface StatusChangerProps {
    subject: OrderSubject;
}

export const StatusChanger: React.FC<StatusChangerProps> = ({ subject }) => {
    const [selectedOrder, setSelectedOrder] = useState<number | ''>('');
    const [newStatus, setNewStatus] = useState<OrderStatus>('pendiente');

    const handleStatusChange = () => {
        if (selectedOrder) {
            subject.updateOrderStatus(selectedOrder, newStatus);
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Orden</InputLabel>
                <Select
                    value={selectedOrder}
                    onChange={(e) => setSelectedOrder(e.target.value as number)}
                    label="Orden"
                >
                    <MenuItem value="">Seleccione</MenuItem>
                    {subject.getOrders().map(order => (
                        <MenuItem key={order.id} value={order.id}>
                            Orden #{order.id} - {order.customerName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Nuevo estado</InputLabel>
                <Select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as OrderStatus)}
                    label="Nuevo estado"
                >
                    <MenuItem value="pendiente">Pendiente</MenuItem>
                    <MenuItem value="tomada">Tomada</MenuItem>
                    <MenuItem value="preparacion">En preparación</MenuItem>
                    <MenuItem value="entregado">Entregado</MenuItem>
                </Select>
            </FormControl>

            <Button
                variant="contained"
                onClick={handleStatusChange}
                disabled={!selectedOrder}
            >
                Cambiar Estado
            </Button>
        </Box>
    );
};