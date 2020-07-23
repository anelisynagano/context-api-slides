import React, { useContext } from 'react';
import BlogContext from '../contexts/blog-context';

const BlogPage = () => {
    const { posts } = useContext(BlogContext)

    return (
        <>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => <li>{post.title}</li>)}
            </ul>
        </>
    )

}

export default BlogPage