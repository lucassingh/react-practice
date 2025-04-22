import { useState } from 'react';
import { IUser } from '../data/interfaces/User';
import { mockApi } from '../data/mockAPI/mockAPI';

export const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRequest = async <T,>(request: () => Promise<T>) => {
        setLoading(true);
        setError(null);
        try {
            const result = await request();
            return result;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocurrió un error');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        getUsers: () => handleRequest(() => mockApi.getUsers()),
        createUser: (user: Omit<IUser, 'id'>) => handleRequest(() => mockApi.createUser(user)),
        updateUser: (user: IUser) => handleRequest(() => mockApi.updateUser(user)),
        deleteUser: (id: number) => handleRequest(() => mockApi.deleteUser(id)),
    };
};