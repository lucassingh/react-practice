export type OrderStatus = 'pendiente' | 'tomada' | 'preparacion' | 'entregado';

export interface Order {
    id: number;
    customerName: string;
    dishes: string[];
    status: OrderStatus;
    createdAt: string;
}