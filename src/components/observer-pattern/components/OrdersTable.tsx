import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from '@mui/material';
import { OrderObserver, OrderSubject } from '../interfaces/observerInterface';
import { Order, OrderStatus } from '../interfaces/orderInterface';

interface OrdersTableProps {
    subject: OrderSubject;
}

const getStatusColor = (status: OrderStatus) => {
    switch (status) {
        case 'pendiente': return 'warning';
        case 'tomada': return 'info';
        case 'preparacion': return 'secondary';
        case 'entregado': return 'success';
        default: return 'default';
    }
};

export const OrdersTable: React.FC<OrdersTableProps> = ({ subject }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const observer: OrderObserver = {
            update: (updatedOrders: Order[]) => {
                setOrders([...updatedOrders]);
            }
        };

        subject.subscribe(observer);
        return () => subject.unsubscribe(observer);
    }, [subject]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Cliente</TableCell>
                        <TableCell>Platos</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Fecha</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.customerName}</TableCell>
                            <TableCell>{order.dishes.join(', ')}</TableCell>
                            <TableCell>
                                <Chip
                                    label={order.status}
                                    color={getStatusColor(order.status)}
                                />
                            </TableCell>
                            <TableCell>{new Date(order.createdAt).toLocaleTimeString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};