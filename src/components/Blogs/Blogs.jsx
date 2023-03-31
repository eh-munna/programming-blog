import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import SingleBlog from '../SingleBlog/SingleBlog';

import { toast } from 'react-toastify';
import Question from '../Question/Question';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  const [bookmark, setBookmark] = useState(0);
  const [blogID, setBlogID] = useState([]);
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // bookmark handling functions
  const handleTime = (read_time) => setTime(read_time + time);

  const handleBookmark = (blog_title, id) => {
    setBookmark(bookmark + 1);
    const newText = [...text, blog_title];
    setText(newText);

    if (blogID.includes(id)) {
      toast.warn('This blog is already bookmarked!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      const newBlogID = [...blogID, id];
      setBlogID(newBlogID);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 py-8 md:gap-8 order-1 md:relative">
      <div className="md:col-span-8">
        {blogs.map((blog) => (
          <SingleBlog
            handleTime={handleTime}
            handleBookmark={handleBookmark}
            key={blog.id}
            blog={blog}
          ></SingleBlog>
        ))}
      </div>
      <div className="md:col-span-4 py-2 md:py-4 order-last md:order-2">
        <Bookmark totalTime={time} blogCount={bookmark} text={text}></Bookmark>
      </div>
      <div className="space-y-2 md:space-y-3 py-4 md:col-span-8 order-2 md:order-last">
        <Question></Question>
      </div>
    </div>
  );
};

export default Blogs;
