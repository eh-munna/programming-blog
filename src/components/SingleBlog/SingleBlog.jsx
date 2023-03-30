import React from 'react';

const SingleBlog = ({ blog }) => {
  const { blog_title } = blog;
  console.log(blog);
  return (
    <div>
      <h3>{blog_title}</h3>
    </div>
  );
};

export default SingleBlog;
