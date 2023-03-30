import React from 'react';

const SingleBlog = ({ blog }) => {
  const { blog_picture, blog_title, author_image, author_name } = blog;
  console.log(blog);
  return (
    <div>
      {/* Card */}
      <div className="py-2 md:py-4">
        <div>
          <img className="rounded-md max-w-full" src={blog_picture} alt="" />
        </div>
        {/* blog-intro */}
        <div className="flex justify-between items-center">
          {/* author and publication */}
          <div className="flex">
            <div>
              <p>author_image</p>
              <p>author_name</p>
            </div>
            <div>
              <p>published_in</p>
            </div>
          </div>
          {/* time and bookmark */}
          <div className="flex">
            <p>time</p>
            <button>Bookmark</button>
          </div>
        </div>
        <div>
          <h2>{blog_title}</h2>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleBlog;
