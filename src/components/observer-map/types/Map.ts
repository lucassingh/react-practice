export interface LatLngLiteral {
    lat: number;
    lng: number;
}

export interface DeliveryMapProps {
    restaurantLocation: LatLngLiteral;
    destinationLocation: LatLngLiteral;
    deliveryPosition: LatLngLiteral;
    routeProgress: number;
}