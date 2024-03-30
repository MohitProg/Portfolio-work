import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:w-3/4 mx-auto  mt-3 sm:gap-3 bg-gray-200 p-3 rounded-sm shadow-sm">
      <div className="flex items-center justify-center flex-col gap-3  p-2">
        <h1 className="text-4xl font-semibold">Resume</h1>
        <a
          href="https://drive.google.com/uc?export=download&id=1AANEyH2dc4t0sXachfS5pqJUr74XT3sv"
          className="bg-blue-300 text-4xl px-4 py-2 mx-auto rounded-sm shadow-sm border-none"
        >
          DOWNLOAD
        </a>
      </div>

      <div className="col-span-2  flex items-center justify-center ">
        {/*  resume preview */}
        <iframe
          src="https://drive.google.com/file/d/1AANEyH2dc4t0sXachfS5pqJUr74XT3sv/preview"
          className=" w-[400px] h-[600px] sm:w-[700px] sm:h-[600px]"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
