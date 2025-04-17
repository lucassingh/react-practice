import { useState, useEffect } from 'react';
import { getMarsPhotos } from '../services/marsPhotoService';
import { MarsPhoto } from '../interfaces/MarsPhoto';

export const useMarsPhotosHandler = () => {
    const [photos, setPhotos] = useState<MarsPhoto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [currentParams, setCurrentParams] = useState({
        sol: 200,
        page: 1,
    });

    const refreshPhotos = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const updateParams = (newParams: { sol?: number; page?: number; camera?: string }) => {
        setCurrentParams(prev => ({
            ...prev,
            ...newParams,
            sol: newParams.sol ?? prev.sol
        }));
        setRefreshTrigger(prev => prev + 1);
    };

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            try {
                const response = await getMarsPhotos(currentParams);
                const data = Array.isArray(response?.data?.photos)
                    ? response.data.photos
                    : [];

                setPhotos(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching Mars photos:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch photos');
                setPhotos([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, [refreshTrigger, currentParams]);

    return {
        photos,
        loading,
        error,
        currentParams,
        refreshPhotos,
        updateParams,
        setSol: (sol: number) => updateParams({ sol, page: 1 }),
    };
};