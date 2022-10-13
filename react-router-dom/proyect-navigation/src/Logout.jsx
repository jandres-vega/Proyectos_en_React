import React from 'react';
import { useAuth } from './auth';

const Logout = () => {
    const auth = useAuth()
    const handleLogout = (e) => {
        e.preventDefault();
        auth.logout();
    }
    return (
        <>
            <h1>Logout</h1>
            <form onSubmit={handleLogout}>
                <label>Segura de que quieres salir</label>
                <button type={'submit'}>Logout</button>
            </form>
        </>
    );
};

export {Logout};