import React from "react";

const Editprofile = () => {
  return (
    <>
      <section>
        <div className="p-3">
          <h1 className="text-xl font-semibold">Add Your Blog</h1>

          <form action="" className="min-h-[300px] flex flex-col gap-3 mt-4">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="p-2 ring-1  rounded-sm appearance-none outline-none"
              placeholder="Enter the name"
            />

            <label htmlFor="">Description</label>
            <input
              type="text"
              className="p-2 ring-1 appearance-none rounded-sm outline-none"
              placeholder="Enter the description"
            />

            <label htmlFor="">Profile Image</label>
            <input
              type="file"
              className="ring-1 p-2 rounded-sm outline-none"
              placeholder="image "
            />

            <button className="px-2 py-2  bg-blue-500 w-[100px] text-xl text-white  rounded-lg mt-3">
              Update
            </button>
            
          </form>
        </div>
      </section>
    </>
  );
};

export default Editprofile;
