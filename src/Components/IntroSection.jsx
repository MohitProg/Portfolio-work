import React from "react";
import image from "../images/pngwing.com.png";

const IntroSection = () => {
  const url =
    "https://plus.unsplash.com/premium_photo-1673697240011-76f7f9220300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <section>
        <div
          className="w-full min-h-[60vh] sm:min-h-[80vh] bg-cover bg-center bg-fixed bg-red-300 flex items-center justify-center sm:grid  sm:grid-cols-2"
          style={{
            backgroundImage: `linear-gradient(7deg, rgba(41,52,80,0.2) 0%, rgba(0,0,0,0.7) 32%), url(${url})`,
          }}
        >
          <div className=" flex flex-col items-center justify-center text-white   p-3">
            <div className="flex w-full lg:w-2/3 flex-col gap-3 ">
              <h1 className="font-bold text-4xl sm:text-5xl">
                Mohit <span className="text-red-600">Sharma</span>
              </h1>
              <span className="font-semibold text-4xl sm:text-5xl shadow">
                Full Stack Developer..
              </span>
              <button className="bg-blue-500 rounded border-none w-1/2 py-2 px-1 text-xl font-semibold">
                JOIN US.
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center  ">
            <div className=" border-[3px] bg-gray-200 hidden sm:flex    shadow-sm rounded-[50%] sm:w-[300px] lg:w-[330px] min-h-[60%]  items-center justify-center ">
              <img src={image} className="h-[300px] " alt="please wait" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
