import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="container mx-auto p-2 md:p-3">
        <nav className="flex justify-between items-center my-2">
          <div>
            <a
              href="http://"
              className="text-[#111111] font-semibold text-lg md:font-bold md:text-2xl"
            >
              Programming Blog
            </a>
          </div>
          <div>
            <img
              src="../../../public/users-vector-icon-png_260862.jpg"
              className="w-8 h-8 md:w-16 md:h-16 rounded-full"
              alt=""
            />
          </div>
        </nav>
        <hr />
      </div>
    </div>
  );
};

export default Header;
