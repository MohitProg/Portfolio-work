import React from "react";
import image from "../images/WhatsApp Image 2023-12-27 at 2.21.49 PM.jpeg";

const IntroSection = () => {
  const url =
    "https://plus.unsplash.com/premium_photo-1673697240011-76f7f9220300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <section>
        <div
          className="w-full min-h-[60vh] sm:min-h-[80vh] bg-cover bg-center bg-fixed bg-red-300  p-3 grid  sm:grid-cols-2"
          style={{
            backgroundImage: `linear-gradient(7deg, rgba(41,52,80,0.2) 0%, rgba(0,0,0,0.7) 32%), url(${url})`,
          }}
        >
          <div className=" flex flex-col  items-center justify-center text-white    p-3">
            <div className="flex w-full lg:w-2/3 flex-col gap-3 text-center sm:text-start  ">
              <h1 className="font-bold text-4xl sm:text-5xl">
                Mohit <span className="text-blue-600">Sharma</span>
              </h1>
              <span className="font-semibold text-4xl sm:text-5xl shadow">
                MERN Stack Developer..
              </span>
              <a
                href="https://drive.google.com/uc?export=download&id=1AANEyH2dc4t0sXachfS5pqJUr74XT3sv"
                className="bg-blue-500 text-xl sm:text-3xl  sm:px-4 mx-auto sm:mx-0 py-2 w-[200px] rounded-sm shadow-sm border-none"
              >
                RESUME
                <i className="bi ml-2 bi-download"></i>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center  ">
            <div className="    sm:flex  rounded-[50%] bg-red-300      shadow-sm border-[5px] border-blue-500  items-center justify-center h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] " style={{backgroundImage:`url(${image})`,backgroundPosition:"top",backgroundSize:"cover"}}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
