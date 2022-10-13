import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

const Menu = () => {
    
    const auth = useAuth();
    
    //if( !auth.user )
    
    const routes = [
        {to: '/', text: 'home', private: false},
        {to: '/blog', text: 'Blog', private: false},
        {to: '/profile', text: 'profile', private: true},
        {to: '/login', text: 'login', private: false, publicOnline: true},
        {to: '/logout', text: 'logout', private: true},
    ]
    
    return (
        <nav>
            <ul>
                {
                    routes.map(route => {
                        if (route.publicOnline && auth.user) return null
                        if (route.private && !auth.user) return null
                        return(
                            <li key={route.text}>
                                <NavLink
                                    style={({isActive}) => ({color: isActive ? 'red': 'blue'})}
                                    to={route.to} end>
                                    {route.text}
                                </NavLink>
                            </li>
                        )
                    })
                }
                {/*<li>*/}
                {/*    <Link to={'/'}>Home</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to={'/blog'}>Blog</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to={'/profile'}>Profile</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink*/}
                {/*        style={({isActive}) => ({color: isActive ? 'red': 'blue'})}*/}
                {/*        to={'/'} end>*/}
                {/*        Home*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink*/}
                {/*        style={({isActive}) => ({color: isActive ? 'red': 'blue'})}*/}
                {/*        to={'/blog'} end>*/}
                {/*        blog*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink*/}
                {/*        style={({isActive}) => ({color: isActive ? 'red': 'blue'})}*/}
                {/*        to={'/profile'} end>*/}
                {/*        procfile*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export {Menu};