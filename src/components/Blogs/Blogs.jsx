import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // bookmark handling function
  const handleBookmark = (read_time) => {
    setTime(read_time + time);
    console.log(totalTime);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 py-8 gap-8">
      <div className="md:col-span-4">
        {blogs.map((blog) => (
          <SingleBlog
            handleBookmark={handleBookmark}
            key={blog.id}
            blog={blog}
          ></SingleBlog>
        ))}
      </div>
      <div className="col-span-2 py-2 md:py-4  md:relative">
        <Bookmark totalTime={time}></Bookmark>
      </div>
    </div>
  );
};

export default Blogs;
