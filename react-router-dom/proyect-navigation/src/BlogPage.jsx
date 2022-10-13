import React from 'react';
import { BlogLink } from './BlogLink';
import {blogdata}from './BlogData';

const BlogPage = () => {
    
    return (
        <>
            <h1>BlogPage</h1>
            {blogdata.map(post => (
                <BlogLink key={post.title} post={post}/>
            ))}
        </>
    );
};

export {BlogPage};