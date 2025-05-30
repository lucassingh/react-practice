import { RouteObject, Navigate } from 'react-router-dom'
import { CrudScreen, HomeScreen, LoginScreen, ObserverMapScreen, ObserverPage, ReactAdvancedScreen, ReactBasicsScreen } from '../pages'
import App from '../App'
import { ReactNode } from 'react';
import { useAuthStore } from '../data/store/authStore';
import { ErrorPage } from '../pages/ErrorPage';

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
                element: <ProtectedRoute>
                    <HomeScreen />
                </ProtectedRoute>
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
            },
            {
                path: 'react-observer',
                element: <ProtectedRoute><ObserverPage /></ProtectedRoute>
            },
            {
                path: 'react-observer-map',
                element: <ProtectedRoute><ObserverMapScreen /></ProtectedRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginScreen />
    },
    {
        path: '*',
        element: <ProtectedRoute><ErrorPage /></ProtectedRoute>
    }
]

export default routes;