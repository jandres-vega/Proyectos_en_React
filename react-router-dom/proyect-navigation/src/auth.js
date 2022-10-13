import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider( {children} ){
    
    const adminList = ['Irisval', 'andres', 'juan']
    
    const navigate = useNavigate()
    const login = ({userName}) => {
        const isAdmin = adminList.find(admin => admin = userName);
        setUser({userName, isAdmin})
        navigate('/profile')
    }
    const logout = () => {
        setUser(null);
        navigate('/')
    }
    
    const[user, setUser] = useState(null);
    
    const auth = {user, login, logout}
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(  ){
    return useContext( AuthContext )
}

function AuthRoute( props ){
    const auth = useAuth()
    if (!auth.user){
        return <Navigate to={'/login'}/>
    }
    return props.children
}

export {
    AuthProvider,
    useAuth,
    AuthRoute
}