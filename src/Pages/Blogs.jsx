import React from "react";
import Blogitem from "../Components/Blogitem";

const Blogs = () => {
  return (
    <section>
   
      <div className="grid min-h-[80vh] grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-3 ">
        <div className="h-[400px] p-3 flex flex-col  sm:mt-4 gap-3 bg-gray-200 rounded-sm">
          {/*  search category here  */}
          <div className="flex items-center flex-col  gap-2 mt-5 ">
            <h1 className="text-2xl font-semibold">Search Blogs</h1>
            <input
              type="Search"
              className="p-2 ring-1 rounded w-3/4"
              placeholder="search.."
            />
          </div>
          <div className="min-h-[200px] bg-gray-400 flex items-center justify-center">
            Add Section
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            <div className="min-h-[100px] bg-gray-200">
              <Blogitem />
            </div>
            <div className="min-h-[100px] bg-gray-200">
              <Blogitem />
            </div>
            <div className="min-h-[100px] bg-gray-200">
              <Blogitem />
            </div>
            <div className="min-h-[100px] bg-gray-200">
              <Blogitem />
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default Blogs;
