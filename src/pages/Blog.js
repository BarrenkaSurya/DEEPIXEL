import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <div className="blog-content">
        {posts.map(post => (
          <div key={post._id} className="blog-post">
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
            <p className="blog-excerpt">{post.content.substring(0, 150)}...</p>
            <a href={`/blog/${post._id}`} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
