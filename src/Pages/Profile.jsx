import React from "react";
import { Link, Route, Routes,useLocation } from "react-router-dom";
import Addprojects from "./Addprojects";
import { Outlet } from "react-router-dom";


const Profile = (children) => {
  const Location=useLocation()
const path=Location.pathname;


  
  return (
    <>
      <section className=" min-h-[100vh]">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 ">
          <div className="lg:min-h-[100vh] p-2  ">
            <div className="h-[200px] w-[200px] mx-auto mt-6 rounded-[50%] overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className=" object-cover  h-[200px] w-[200px]"
                alt=""
              />
            </div>

            <div className="p-2 w-full">
              <h1 className="text-center text-2xl font-bold mt-2">Mohit Sharma</h1>
              <p className="font-semibold mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                porro libero cumque. Recusandae libero quos,.
              </p>
            </div>

            <div className="bg-gray-300 min-h-[200px] mt-3 rounded-lg  ">
              <h1 className="text-center text-2xl  font-semibold">Your Data</h1>
              <ul className="flex flex-col gap-1 text-lg font-semibold mt-2">
                <Link
                  to="/profile/editprofile"
                  className={` flex gap-2 items-center p-2 ${path==="/profile/editprofile"?"bg-gray-500":""}`}
                  
                
                >
                  <span>
                    <i className="bi bi-book"></i>
                  </span>
                  Edit Profile
                </Link>
                <Link
                  to="/profile/addproject"
                  className={` flex gap-2 items-center p-2 ${path==="/profile/addproject"?"bg-gray-500":""}`}
                >
                  <span>
                    <i className="bi bi-plus-circle-fill"></i>
                  </span>
                  Add Project
                </Link>
                <Link
                  to="/profile/addblog"
                  className={` flex gap-2 items-center p-2 ${path==="/profile/addblog"?"bg-gray-500":""}`}
                >
                  <span>
                    <i className="bi bi-book"></i>
                  </span>
                  Add Blogs
                </Link>

                {/* <Link to="/profile" className=" flex gap-2 items-center ">
                  <span>
                    <i className="bi bi-grid"></i>
                  </span>
                  See blogs
                </Link> */}
              </ul>
            </div>
          </div>
          <div className="min-h-[100vh] sm:col-span-2 lg:col-span-3 ">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
