import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation();
  const paths = path.pathname;
  console.log(paths);

  const [navfun, setnavfun] = useState(true);

  const Navtogglefun = () => {
    setnavfun(!navfun);
  };

  console.log(navfun);

  return (
    <>
      <header className="bg-gray-300 relative ">

        <nav className="flex gap-2  min-h-[60px] justify-between items-center p-2 ">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-500">Web</span>tech
          </h1>
          <div>
            <ul className="hidden gap-5 text-lg font-semibold lg:flex ">
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
          <div
            className="text-3xl  lg:hidden transition-all duration-75ms cursor-pointer px-2 bg-blue-500 rounded-sm text-white"
            onClick={Navtogglefun}
          >
            {navfun === true ? (
              <i className="bi bi-list"></i>
            ) : (
              <i className="bi bi-x-lg"></i>
            )}
          </div>
        </nav>

{/*  shorter menu */}
        <div className={`${navfun===true?"hidden":"block"}  lg:hidden  gap-4`}>
        <ul className=" gap-5  text-lg font-semibold flex flex-col w-1/3 p-3 ">
              <Link
                 onClick={Navtogglefun}
                className={`flex rounded items-center p-1  gap-2 ${
                  paths === "/" ? "bg-blue-500" : "text-black"
                }`}
                to="/"
              >
                <i className="bi text-2xl sm:text-xl  bi-house"></i>
                <span >Home</span>
              </Link>
              <Link
                onClick={Navtogglefun}
                className={`flex rounded items-center p-1  gap-2 ${
                  paths === "/blogs" ? "bg-blue-500" : "text-black"
                }`}
                to="/blogs"
              >
                <i className="bi text-2xl sm:text-xl  bi-book"></i>
                <span >Blogs</span>
              </Link>
              <Link
                onClick={Navtogglefun}
                className={`flex  rounded items-center p-1  gap-2 ${
                  paths === "/service" ? "bg-blue-500" : "text-black"
                }`}
                to="/service"
              >
                <i className="bi text-2xl sm:text-xl  bi-person-raised-hand"></i>
                <span >Service</span>
              </Link>
              <Link
                onClick={Navtogglefun}
                className={`flex rounded items-center p-1  gap-2 ${
                  paths === "/aboutus" ? "bg-blue-500" : "text-black"
                }`}
                to="aboutus"
              >
                <i className="bi  text-2xl sm:text-xl bi-file-earmark-person"></i>
                <span >About us </span>
              </Link>

              <Link
                onClick={Navtogglefun}
              to="/profile"
              className={`flex rounded items-center p-1  gap-2 ${
                paths === "/profile" ? "bg-blue-500" : "text-black"
              }`}
            >
              <i className="bi bi-person-circle"></i>
              <span >Profile </span>
            </Link>

            <Link
              to="/login"
              className="bg-gray-500  text-center px-1 py-1 rounded-sm "
           
            >

              <span className="text-xl font-semibold" >Login </span>
            </Link>
            </ul>

        </div>
      </header>
    </>
  );
};

export default Header;
