import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {blogdata}from './BlogData';
import { useAuth } from './auth';
const BlogPost = () => {
    
    const navigate = useNavigate()
    
    const {slug} = useParams();
    
    const auth = useAuth();
    
    const blogPost = blogdata.find(post => post.slug === slug);
    
    const canDelete = auth.user?.isAdmin || blogPost.author === auth.user?.userName;
    const returnBlog = () => {
        navigate('/blog')
    }
    
    return (
        <>
            <h2>{blogPost.title}</h2>
            <button onClick={returnBlog}>Volver al blog</button>
            <p>{blogPost.content}</p>
            <p>{blogPost.author}</p>
    
            {
                auth.user?.isAdmin &&(
                    <button>Eliminar</button>
                )
            }
        </>
    );
};

export {BlogPost};