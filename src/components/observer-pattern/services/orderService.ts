import { Order } from "../interfaces/orderInterface";

export const fetchOrders = (): Promise<Order[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    customerName: 'Juan Pérez',
                    dishes: ['Pizza Margarita', 'Ensalada César'],
                    status: 'pendiente',
                    createdAt: '2023-05-01T10:30:00'
                },
                {
                    id: 2,
                    customerName: 'María García',
                    dishes: ['Pasta Carbonara', 'Sopa del día'],
                    status: 'tomada',
                    createdAt: '2023-05-01T10:35:00'
                },
                {
                    id: 3,
                    customerName: 'Carlos López',
                    dishes: ['Hamburguesa con queso', 'Papas fritas'],
                    status: 'preparacion',
                    createdAt: '2023-05-01T10:40:00'
                },
                {
                    id: 4,
                    customerName: 'Ana Martínez',
                    dishes: ['Filete de salmón', 'Puré de patatas'],
                    status: 'entregado',
                    createdAt: '2023-05-01T10:45:00'
                },
                {
                    id: 5,
                    customerName: 'Luis Rodríguez',
                    dishes: ['Ensalada griega', 'Sándwich club'],
                    status: 'pendiente',
                    createdAt: '2023-05-01T10:50:00'
                }
            ]);
        }, 500);
    });
};