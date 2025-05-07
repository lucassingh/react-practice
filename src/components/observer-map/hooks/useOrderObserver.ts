import { useEffect, useState } from 'react';
import { OrderService } from '../services/OrderService';
import { OrderObserver, OrderState } from '../types/Order';


export const useOrderObserver = (orderService: OrderService) => {
    const [orderState, setOrderState] = useState<OrderState>(orderService.getCurrentStatus());

    useEffect(() => {
        const observer: OrderObserver = {
            update: (state: OrderState) => {
                setOrderState(state);
            }
        };

        orderService.subscribe(observer);
        return () => {
            orderService.unsubscribe(observer);
        };
    }, [orderService]);

    return orderState;
};