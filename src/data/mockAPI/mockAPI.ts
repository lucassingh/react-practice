import usersData from './users.json';

const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));

export const mockApi = {
    getUsers: async () => {
        await simulateNetworkDelay();
        return [...usersData];
    },

    createUser: async (user: Omit<typeof usersData[0], 'id'>) => {
        await simulateNetworkDelay();
        const newUser = { ...user, id: Date.now() };
        usersData.push(newUser);
        return newUser;
    },

    updateUser: async (user: typeof usersData[0]) => {
        await simulateNetworkDelay();
        const index = usersData.findIndex(u => u.id === user.id);
        if (index !== -1) {
            usersData[index] = user;
        }
        return user;
    },

    deleteUser: async (id: number) => {
        await simulateNetworkDelay();
        const index = usersData.findIndex(u => u.id === id);
        if (index !== -1) {
            usersData.splice(index, 1);
        }
        return id;
    }
};