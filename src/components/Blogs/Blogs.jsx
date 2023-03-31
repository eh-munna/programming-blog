import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  const [bookmark, setBookmark] = useState(0);
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // bookmark handling functions
  const handleTime = (read_time) => setTime(read_time + time);

  const handleBookmark = (blog_title) => {
    setBookmark(bookmark + 1);
    const newText = [...text, blog_title];
    setText(newText);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 py-8 md:gap-8">
      <div className="md:col-span-4">
        {blogs.map((blog) => (
          <SingleBlog
            handleTime={handleTime}
            handleBookmark={handleBookmark}
            key={blog.id}
            blog={blog}
          ></SingleBlog>
        ))}
      </div>
      <div className="col-span-2 py-2 md:py-4  md:relative">
        <Bookmark totalTime={time} blogCount={bookmark} text={text}></Bookmark>
      </div>
    </div>
  );
};

export default Blogs;
