export type OrderStatus =
    | 'PENDING'
    | 'TAKEN'
    | 'PREPARING'
    | 'DELIVERY'
    | 'DELIVERED';

export interface OrderState {
    status: OrderStatus;
    message: string;
    timestamp: Date;
    progress: number;
    showMap?: boolean;
}

export interface OrderSubject {
    subscribe(observer: OrderObserver): void;
    unsubscribe(observer: OrderObserver): void;
    notify(state: OrderState): void;
}

export interface OrderObserver {
    update(state: OrderState): void;
}