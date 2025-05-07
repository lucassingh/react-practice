import { useState } from 'react';
import { HeaderComponent } from '../../components';
import { Box, Container, Typography, Paper } from '@mui/material';
import { useOrderObserver } from '../../components/observer-map/hooks/useOrderObserver';
import { ROUTE_POINTS, useDeliverySimulation } from '../../components/observer-map/hooks/useDeliverySimulation';
import OrderStatus from '../../components/observer-map/components/OrderStatus/OrderStatus';
import StatusCheckbox from '../../components/observer-map/components/StatusCheckbox/StatusCheckbox';
import DeliveryMap from '../../components/observer-map/components/DeliveryMap/DeliveryMap';
import { OrderService } from '../../components/observer-map/services/OrderService';

export const ObserverMapScreen = () => {
    const [orderService] = useState(() => new OrderService());
    const orderState = useOrderObserver(orderService);
    const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>({
        PENDING: true,
        TAKEN: false,
        PREPARING: false,
        DELIVERY: false,
        DELIVERED: false
    });

    const {
        currentPosition,
        routeProgress,
        startDeliverySimulation
    } = useDeliverySimulation(
        orderState.status === 'DELIVERY',
        () => orderService.updateStatus('DELIVERED')
    );

    const handleStatusChange = (status: string) => {
        setCheckedStates(prev => ({ ...prev, [status]: true }));
        orderService.updateStatus(status as any);
        if (status === 'DELIVERY') {
            startDeliverySimulation();
        }
    };

    const isDisabled = (status: string) => {
        const statusOrder = ['PENDING', 'TAKEN', 'PREPARING', 'DELIVERY', 'DELIVERED'];
        const currentIndex = statusOrder.indexOf(orderState.status);
        const targetIndex = statusOrder.indexOf(status);

        if (orderState.status === 'DELIVERY' && routeProgress < 100 && targetIndex > currentIndex) {
            return true;
        }

        return targetIndex > currentIndex + 1 || targetIndex < currentIndex;
    };

    return (
        <>
            <HeaderComponent
                title="Map - Patrón Observer"
                bgColor="#76f3a4"
                colorSubTitle=''
                height={150}
                colorTitle="#1c1c1c"
                showButton={false}
            />

            <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                        Sistema de Seguimiento de Pedidos
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                        Esta aplicación demuestra el patrón Observer en acción. Cada cambio de estado notifica a los componentes suscritos para actualizar la interfaz.
                    </Typography>

                    <OrderStatus state={orderState} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Simular estados del pedido:
                        </Typography>

                        <StatusCheckbox
                            status="PENDING"
                            label="Pedido Recibido"
                            checked={checkedStates.PENDING}
                            disabled={isDisabled('PENDING')}
                            onChange={handleStatusChange}
                        />

                        <StatusCheckbox
                            status="TAKEN"
                            label="Pedido Aceptado"
                            checked={checkedStates.TAKEN}
                            disabled={isDisabled('TAKEN')}
                            onChange={handleStatusChange}
                        />

                        <StatusCheckbox
                            status="PREPARING"
                            label="En Preparación"
                            checked={checkedStates.PREPARING}
                            disabled={isDisabled('PREPARING')}
                            onChange={handleStatusChange}
                        />

                        <StatusCheckbox
                            status="DELIVERY"
                            label="En Camino"
                            checked={checkedStates.DELIVERY}
                            disabled={isDisabled('DELIVERY')}
                            onChange={handleStatusChange}
                        />

                        <StatusCheckbox
                            status="DELIVERED"
                            label="Pedido Entregado"
                            checked={checkedStates.DELIVERED}
                            disabled={isDisabled('DELIVERED')}
                            onChange={handleStatusChange}
                        />
                    </Box>

                    {orderState.showMap && (
                        <DeliveryMap
                            restaurantLocation={{ lat: -34.776908, lng: -58.388911 }}
                            destinationLocation={{ lat: -34.789861, lng: -58.372822 }}
                            deliveryPosition={currentPosition}
                            routeProgress={routeProgress}
                            routePoints={ROUTE_POINTS}
                        />
                    )}

                    {orderState.status === 'DELIVERED' && (
                        <Paper elevation={2} sx={{ p: 3, mt: 3, bgcolor: '#e8f5e9', textAlign: 'center' }}>
                            <Typography variant="h5" color="success.main" sx={{ fontWeight: 'bold' }}>
                                ¡Pedido entregado correctamente!
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Gracias por usar nuestro servicio de delivery.
                            </Typography>
                        </Paper>
                    )}
                </Paper>
            </Container>
        </>
    );
};