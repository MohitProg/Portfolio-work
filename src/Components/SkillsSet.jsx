import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import bootsrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import react from "../images/react.png";
import nodejs from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import cprogramming from "../images/cprogramming.png";
import wordpress from "../images/wordpress.png";
const SkillsSet = () => {
  return (
    <section>
      <div className="min-h-[200px] bg-gray-200 rounded mt-3 p-2">
        <h1 className="text-center text-4xl font-semibold">SKILLS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-2">
          <div className="min-h-[50px] flex rounded-sm shadow-sm  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={html} className="h-[50px] object-fit w-[50px]" alt="" />
            <h1 className="text-xl font-semibold">HTML</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={css} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">CSS</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={javascript} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">JavaScript</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={bootsrap} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">Bootsrap</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={tailwind} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">Tailwind</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={react} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">React JS</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={nodejs} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">Node JS</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={mongodb} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">MongoDB</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={cprogramming} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">C Pro</h1>
          </div>
          <div className="min-h-[50px] flex  jsutify-center gap-3 items-center p-1 border-[2px] border-blue-500">
            <img src={wordpress} className="h-[50px] w-[40px]" alt="" />
            <h1 className="text-xl font-semibold">Wordpress</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSet;
