import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // bookmark handling function
  const handleBookmark = (time) => {
    console.log(time);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 py-8 gap-8">
      <div className="md:col-span-4">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
      <div className="col-span-2 py-2 md:py-4 space-y-3 md:space-y-6">
        <div className="border rounded-md p-2 bg-[#6047EC]/10 border-[#6047EC]">
          <h4 className="text-[#6047EC] font-semibold">
            Spent time on read : 177 min
          </h4>
        </div>
        <div className="bg-[#f3f3f3] rounded-md p-3 space-y-4">
          <h3 className="#111111 font-semibold text-lg ">
            Bookmarked Blogs : 8
          </h3>
          <div className="bg-[#fff] rounded-md p-2">
            <h4 className="font-semibold">
              Master Microsoft Power Platform and Become an In-Demand!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
