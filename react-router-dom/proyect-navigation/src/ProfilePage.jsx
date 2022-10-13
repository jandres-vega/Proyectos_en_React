import React from 'react';
import { useAuth, AuthRoute } from './auth';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
    
    const auth = useAuth()
    
    return (
        <AuthRoute>
            <h1>Perfil</h1>
            <p>Welcome, {auth.user.userName}</p>
        </AuthRoute>
    );
};

export {ProfilePage};