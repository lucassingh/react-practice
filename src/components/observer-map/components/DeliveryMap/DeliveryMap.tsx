import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { Box, Typography, CircularProgress } from '@mui/material';
import home from '../../../../assets/home.png'
import restaurant from '../../../../assets/restaurant.png'
import delivery from '../../../../assets/delivery.png'

const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};

const center = {
    lat: -34.783384,
    lng: -58.380866
};

interface DeliveryMapProps {
    restaurantLocation: google.maps.LatLngLiteral;
    destinationLocation: google.maps.LatLngLiteral;
    deliveryPosition: google.maps.LatLngLiteral;
    routeProgress: number;
    routePoints: google.maps.LatLngLiteral[];
}

const DeliveryMap: React.FC<DeliveryMapProps> = ({
    restaurantLocation,
    destinationLocation,
    deliveryPosition,
    routeProgress,
    routePoints
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadError, setLoadError] = useState<string | null>(null);

    const handleLoadError = () => {
        setLoadError('Error al cargar Google Maps. Verifica tu conexión o API Key.');
    };

    const handleLoadSuccess = () => {
        setIsLoaded(true);
    };

    if (loadError) {
        return (
            <Box sx={{
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px'
            }}>
                <Typography color="error">{loadError}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
                Seguimiento del repartidor
            </Typography>

            <LoadScript
                googleMapsApiKey="AIzaSyCEzKeG-F9Ux8vepy277ObuvMI80dS3FYA"
                onError={handleLoadError}
                onLoad={handleLoadSuccess}
                loadingElement={<CircularProgress />}
            >
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={14}
                        options={{
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                    >
                        <Marker
                            position={restaurantLocation}
                            icon={{
                                url: restaurant,
                                scaledSize: new window.google.maps.Size(32, 32)
                            }}
                        />

                        <Marker
                            position={destinationLocation}
                            icon={{
                                url: home,
                                scaledSize: new window.google.maps.Size(32, 32)
                            }}
                        />

                        <Marker
                            position={deliveryPosition}
                            icon={{
                                url: delivery,
                                scaledSize: new window.google.maps.Size(32, 32)
                            }}
                        />

                        <Polyline
                            path={[restaurantLocation, ...routePoints.slice(0, routePoints.findIndex(
                                point => point.lat === deliveryPosition.lat && point.lng === deliveryPosition.lng
                            ) + 1)]}
                            options={{
                                strokeColor: '#FF0000',
                                strokeOpacity: 0.8,
                                strokeWeight: 4,
                                icons: [{
                                    icon: {
                                        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                        scale: 4
                                    },
                                    offset: '100%'
                                }]
                            }}
                        />
                    </GoogleMap>
                ) : (
                    <Box sx={{
                        height: 400,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '8px'
                    }}>
                        <CircularProgress />
                    </Box>
                )}
            </LoadScript>

            <Typography variant="body2" sx={{ mt: 2 }}>
                Progreso del envío: {Math.round(routeProgress)}%
            </Typography>
        </Box>
    );
};

export default DeliveryMap;