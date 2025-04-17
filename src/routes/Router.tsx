import { RouteObject, Navigate } from 'react-router-dom'
import { AboutScreen, HomeScreen, ProductsScreen, LoginScreen } from '../pages'
import App from '../App'
import { ReactNode } from 'react';
import { useAuthStore } from '../data/store/authStore';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAuthStore();
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <ProtectedRoute><HomeScreen /></ProtectedRoute>
            },
            {
                path: 'about',
                element: <ProtectedRoute><AboutScreen /></ProtectedRoute>
            },
            {
                path: 'products',
                element: <ProtectedRoute><ProductsScreen /></ProtectedRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginScreen />
    },
    {
        path: '*',
        element: <Navigate to="/" replace />
    }
]

export default routes;