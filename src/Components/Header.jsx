import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation();
  const paths = path.pathname;
  console.log(paths);

  return (
    <>
      <header className="bg-gray-300 ">
        <nav className="flex gap-2  min-h-[60px] justify-between items-center p-2">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-500">Web</span>tech
          </h1>
          <div>
            <ul className="flex gap-5 text-lg font-semibold ">
              <Link
                // className={paths === "/" ? "bg-blue-500 p-1" : "text-black p-1"}
                className={`flex rounded items-center p-1 justify-center gap-2 ${
                  paths === "/" ? "bg-blue-500" : "text-black"
                }`}
                to="/"
              >
                <span className="hidden sm:block">Home</span>
                <i className="bi text-2xl sm:text-xl  bi-house"></i>
              </Link>
              <Link
                className={`flex rounded items-center p-1 justify-center gap-2 ${
                  paths === "/blogs" ? "bg-blue-500" : "text-black"
                }`}
                to="/blogs"
              >
                <span className="hidden sm:block">Blogs</span>
                <i className="bi text-2xl sm:text-xl  bi-book"></i>
              </Link>
              <Link
                className={`flex  rounded items-center p-1 justify-center gap-2 ${
                  paths === "/service" ? "bg-blue-500" : "text-black"
                }`}
                to="/service"
              >
                <span className="hidden sm:block">Service</span>
                <i className="bi text-2xl sm:text-xl  bi-person-raised-hand"></i>
              </Link>
              <Link
                className={`flex rounded items-center p-1 justify-center gap-2 ${
                  paths === "/aboutus" ? "bg-blue-500" : "text-black"
                }`}
                to="aboutus"
              >
                <span className="hidden sm:block">About us </span>
                <i className="bi  text-2xl sm:text-xl bi-file-earmark-person"></i>
              </Link>
            </ul>
          </div>
          <div className=" items-center gap-2 hidden lg:flex">
            <input
              type="search"
              className="appearance-none p-1 rounded ring-1"
              placeholder="Search"
              name=""
              id=""
            />

            <Link
              to="/profile"
              className="bg-blue-500 px-2 py-1 rounded text-xl font-semibold text-white"
            >
              <i className="bi bi-person-circle"></i>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
