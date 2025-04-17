import { create } from 'zustand';
import { getMarsPhotos } from '../services/marsPhotoService';
import { MarsPhoto } from '../interfaces/MarsPhoto';

interface MarsPhotosState {
    photos: MarsPhoto[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    fetchPhotos: (params?: { sol?: number; page?: number; camera?: string }) => Promise<void>;
    reset: () => void;
}

const useMarsPhotosStore = create<MarsPhotosState>((set) => ({
    photos: [],
    loading: false,
    error: null,
    currentPage: 1,

    fetchPhotos: async (params = {}) => {
        set({ loading: true, error: null });
        try {
            const response = await getMarsPhotos({
                sol: 1000,
                page: params.page || 1,
                camera: params.camera,
            });

            set({
                photos: response.data.photos,
                loading: false,
                currentPage: params.page || 1,
            });
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to fetch photos',
            });
        }
    },

    reset: () => set({ photos: [], loading: false, error: null, currentPage: 1 }),
}));

export default useMarsPhotosStore;