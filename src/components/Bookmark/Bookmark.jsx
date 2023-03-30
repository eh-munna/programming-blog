import React from 'react';

const Bookmark = ({ totalTime }) => {
  return (
    <div className="md:sticky md:top-3">
      <div className="space-y-3 md:space-y-6">
        <div className="border rounded-md p-2 bg-[#6047EC]/10 border-[#6047EC]">
          <h4 className="text-[#6047EC] font-semibold">
            Spent time on read : {totalTime} min
          </h4>
        </div>
        <div className="bg-[#f3f3f3] rounded-md p-3 space-y-4">
          <h3 className="#111111 font-semibold text-lg ">
            Bookmarked Blogs : 8
          </h3>
          <div className="bg-[#fff] rounded-md p-2">
            <h4 className="font-semibold">
              The Most Innovative Things Happening With Coding
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
