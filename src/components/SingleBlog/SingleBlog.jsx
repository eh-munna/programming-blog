import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const SingleBlog = ({ blog }) => {
  const {
    blog_picture,
    blog_title,
    author_image,
    author_name,
    read_time,
    published_in,
    tags,
  } = blog;
  console.log(blog);
  const tagArr = [];
  for (const tag in tags) {
    tagArr.push(tags[tag]);
  }

  return (
    <div>
      {/* Card */}
      <div className="py-2 md:py-4 space-y-3 md:space-y-6">
        <div>
          <img className="rounded-md max-w-full" src={blog_picture} alt="" />
        </div>
        {/* blog-intro */}
        <div className="flex justify-between items-center my-2 md:my-4">
          {/* author and publication */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <img
                src={author_image}
                className="w-8 h-8 md:w-16 md:h-16 rounded-full"
                alt=""
              />
            </div>
            <div>
              <p className="font-semibold text-lg">{author_name}</p>
              <p className="text-[#707070]">{published_in}</p>
            </div>
          </div>
          {/* time and bookmark */}
          <div className="flex items-center gap-2 text-[#707070]">
            <p className="text-[#707070]">{read_time} min read</p>
            <button>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg md:text-2xl">{blog_title}</h2>
        </div>
        <div>
          <span className="text-[#707070]">{tagArr.join(', ')}</span>
        </div>
        <a
          className="underline text-[#6047EC] font-semibold underlined"
          href="http://"
        >
          Mark as read
        </a>
      </div>
      <hr />
    </div>
  );
};

export default SingleBlog;
