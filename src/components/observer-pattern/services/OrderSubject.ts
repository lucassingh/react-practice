import { OrderObserver, OrderSubject } from "../interfaces/observerInterface";
import { Order, OrderStatus } from "../interfaces/orderInterface";

export class OrderListSubject implements OrderSubject {
    private observers: OrderObserver[] = [];
    private orders: Order[] = [];

    constructor(initialOrders: Order[]) {
        this.orders = initialOrders;
    }

    subscribe(observer: OrderObserver): void {
        this.observers.push(observer);
        observer.update(this.orders);
    }

    unsubscribe(observer: OrderObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(): void {
        this.observers.forEach(observer => observer.update(this.orders));
    }

    updateOrderStatus(orderId: number, newStatus: OrderStatus): void {
        const orderIndex = this.orders.findIndex(order => order.id === orderId);
        if (orderIndex !== -1) {
            this.orders[orderIndex].status = newStatus;
            this.notify();
        }
    }

    getOrders(): Order[] {
        return this.orders;
    }
}