import { Order } from './orderInterface';

export interface OrderSubject {
    subscribe(observer: OrderObserver): void;
    unsubscribe(observer: OrderObserver): void;
    notify(): void;
}

export interface OrderObserver {
    update(orders: Order[]): void;
}