import { useEffect, useState, useCallback } from 'react';
import { LatLngLiteral } from '../types/Map';

const RESTAURANT_LOCATION: LatLngLiteral = {
    lat: -34.776908,
    lng: -58.388911
};

const DESTINATION_LOCATION: LatLngLiteral = {
    lat: -34.789861,
    lng: -58.372822
};

export const ROUTE_POINTS: LatLngLiteral[] = [
    { lat: -34.778, lng: -58.387 },
    { lat: -34.780, lng: -58.385 },
    { lat: -34.782, lng: -58.383 },
    { lat: -34.784, lng: -58.380 },
    { lat: -34.786, lng: -58.377 },
    { lat: -34.788, lng: -58.375 },
    DESTINATION_LOCATION
];

export const useDeliverySimulation = (active: boolean, onDeliveryComplete: () => void) => {
    const [currentPosition, setCurrentPosition] = useState<LatLngLiteral>(RESTAURANT_LOCATION);
    const [routeProgress, setRouteProgress] = useState<number>(0);
    const [isActive, setIsActive] = useState(active);
    const [currentIndex, setCurrentIndex] = useState(0);

    const startDeliverySimulation = useCallback(() => {
        setIsActive(true);
        setCurrentIndex(0);
    }, []);

    useEffect(() => {
        if (!isActive) {
            setCurrentPosition(RESTAURANT_LOCATION);
            setRouteProgress(0);
            return;
        }

        const interval = setInterval(() => {
            if (currentIndex < ROUTE_POINTS.length - 1) {
                const newIndex = currentIndex + 1;
                setCurrentIndex(newIndex);
                setCurrentPosition(ROUTE_POINTS[newIndex]);
                setRouteProgress((newIndex + 1) / ROUTE_POINTS.length * 100);
            } else {
                clearInterval(interval);
                setRouteProgress(100);
                onDeliveryComplete();
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [isActive, currentIndex, onDeliveryComplete]);

    return {
        currentPosition,
        routeProgress,
        startDeliverySimulation,
        isDeliveryComplete: routeProgress >= 100
    };
};