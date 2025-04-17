import { MarsPhotosParams, MarsPhotosResponse, NasaApiResponse } from "../interfaces/MarsPhoto";
import nasaApi from "../../utils/nasaApi";

export const getMarsPhotos = async (params: MarsPhotosParams): Promise<NasaApiResponse<MarsPhotosResponse>> => {
    try {
        const response = await nasaApi.get('', { params });

        if (!response.data?.photos) {
            console.error('Estructura de respuesta inesperada:', response.data);
            throw new Error('Formato de datos inválido del servidor');
        }

        return {
            data: response.data,
            status: response.status,
        };
    } catch (error) {
        console.error('Error fetching Mars photos:', error);
        throw error;
    }
};