import { OrderObserver, OrderState, OrderStatus, OrderSubject } from "../types/Order";


export class OrderService implements OrderSubject {
    private observers: OrderObserver[] = [];
    private currentState: OrderState = {
        status: 'PENDING',
        message: 'Pedido recibido, esperando confirmación del restaurante',
        timestamp: new Date(),
        progress: 0,
        showMap: false
    };

    subscribe(observer: OrderObserver): void {
        this.observers.push(observer);
        observer.update(this.currentState);
    }

    unsubscribe(observer: OrderObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(state: OrderState): void {
        this.currentState = state;
        this.observers.forEach(observer => observer.update(state));
    }

    updateStatus(status: OrderStatus): void {
        let newState: OrderState;

        switch (status) {
            case 'TAKEN':
                newState = {
                    status,
                    message: '¡El restaurante ha aceptado tu pedido!',
                    timestamp: new Date(),
                    progress: 25,
                    showMap: false
                };
                break;
            case 'PREPARING':
                newState = {
                    status,
                    message: 'Tu pedido está en preparación',
                    timestamp: new Date(),
                    progress: 50,
                    showMap: false
                };
                break;
            case 'DELIVERY':
                newState = {
                    status,
                    message: '¡El repartidor está en camino con tu pedido!',
                    timestamp: new Date(),
                    progress: 75,
                    showMap: true
                };
                break;
            case 'DELIVERED':
                newState = {
                    status,
                    message: '¡Pedido entregado! ¡Disfruta tu comida!',
                    timestamp: new Date(),
                    progress: 100,
                    showMap: false
                };
                break;
            default:
                newState = {
                    status: 'PENDING',
                    message: 'Pedido recibido, esperando confirmación del restaurante',
                    timestamp: new Date(),
                    progress: 0,
                    showMap: false
                };
        }

        this.notify(newState);
    }

    getCurrentStatus(): OrderState {
        return this.currentState;
    }
}