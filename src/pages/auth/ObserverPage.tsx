import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { OrderListSubject } from '../../components/observer-pattern/services/OrderSubject';
import { fetchOrders } from '../../components/observer-pattern/services/orderService';
import { StatusChanger } from '../../components/observer-pattern/components/StatusChangeer';
import { OrdersTable } from '../../components/observer-pattern/components/OrdersTable';
import { HeaderComponent } from '../../components';


export const ObserverPage = () => {
    const [subject, setSubject] = useState<OrderListSubject | null>(null);

    useEffect(() => {
        const initialize = async () => {
            const orders = await fetchOrders();
            setSubject(new OrderListSubject(orders));
        };

        initialize();
    }, []);

    if (!subject) {
        return <div>Cargando órdenes...</div>;
    }

    return (
        <>
            <HeaderComponent
                title="Mesa de Órdenes - Patrón Observer"
                subTitle='Esta aplicación demuestra el patrón Observer. El componente de tabla se suscribe a cambios
                    en el estado de las órdenes y se actualiza automáticamente cuando cambia el estado.'
                bgColor="#76f3a4"
                colorSubTitle=''
                height={200}
                colorTitle="#1c1c1c"
                showButton={false}
            />
            <Container sx={{ marginTop: '60px' }}>
                <StatusChanger subject={subject} />
                <OrdersTable subject={subject} />
            </Container>
        </>
    );
};