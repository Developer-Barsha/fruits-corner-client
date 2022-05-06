import React, { useEffect, useState } from 'react';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <section>
            <h2>Our Blogs</h2>
            <div className='blogs'>
                {
                    blogs.map(blog =>
                        <div key={blog._id} className='blog'>
                            <h3>{blog.question}</h3>
                            <p>{blog.answer}</p>
                        </div>)
                }
            </div>
        </section>

    );
};

export default Blogs;