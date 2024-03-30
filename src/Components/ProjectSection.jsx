import React from "react";
import Projectitem from "./Projectitem";

const ProjectSection = () => {
  return (
    <>
      <section className="p-2  mx-auto shadow-sm border rounded-sm bg-gray-200 mt-3">
        <h1 className="text-3xl text-gray-800 font-bold text-center">PROJECT WORK</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 ">
          <div className="min-h-[100px] ">
            <Projectitem/>
          </div>
          <div className="min-h-[100px] ">
            <Projectitem/>
          </div>
          <div className="min-h-[100px] ">
            <Projectitem/>
          </div>

          <div className="min-h-[100px] ">
            <Projectitem/>
          </div>
          <div className="min-h-[100px] ">
            <Projectitem/>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
