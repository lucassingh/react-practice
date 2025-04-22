import { RouteObject, Navigate } from 'react-router-dom'
import { CrudScreen, HomeScreen, LoginScreen, ReactAdvancedScreen, ReactBasicsScreen } from '../pages'
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
                path: 'react-basics',
                element: <ProtectedRoute><ReactBasicsScreen /></ProtectedRoute>
            },
            {
                path: 'react-advanced',
                element: <ProtectedRoute><ReactAdvancedScreen /></ProtectedRoute>
            },
            {
                path: 'react-crud',
                element: <ProtectedRoute><CrudScreen /></ProtectedRoute>
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