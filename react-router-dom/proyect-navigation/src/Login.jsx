import React from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
    
    const auth = useAuth();
    
    const [userName, setValue] = React.useState('')
    const handleLogin = (e) => {
        e.preventDefault();
        auth.login({userName})
    }
    
    if( auth.user ) {
        return <Navigate to={'/profile'} />
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Ingresa tu nombre</label>
                <input value={userName} onChange={e => setValue(e.target.value)} type="text"/>
                <button type={'submit'}>Login</button>
            </form>
        </>
    );
};

export {Login};