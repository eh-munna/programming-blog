import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 py-8 gap-8">
      <div className="md:col-span-3">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
      <div className="col-span-1">
        <h4>Bookmarked Blogs</h4>
      </div>
    </div>
  );
};

export default Blogs;
