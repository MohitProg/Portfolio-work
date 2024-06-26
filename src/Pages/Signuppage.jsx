import React from 'react'
import { Link } from 'react-router-dom'
const Signuppage = () => {
  return (
<>
<div className="min-h-[100vh] flex items-center justify-center bg-blue-500 p-2">
        <form
          action=""
          className=" w-full flex flex-col p-2 sm:p-6 justify-center gap-3 bg-gray-200 sm:w-[60%] lg:w-[40%] min-h-[400px] rounded-sm shadow-sm"
        >
          <h1 className="text-3xl text-center font-semibold">
            WebTech Login here
          </h1>


          <label htmlFor="" className="text-xl font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="p-2 ring-1"
            placeholder="Enter Name here"
            required
          />
          <label htmlFor="" className="text-xl font-semibold">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="p-2 ring-1"
            placeholder="Enter Email here"
            required
          />
          <label htmlFor="" className="text-xl font-semibold">
            Password
          </label>
          <input
            type="text"
            name="email"
            className="p-2 ring-1"
            placeholder="Enter password here"
          />

          <button className="text-xl px-2 py-1 rounded-sm shadow-sm bg-blue-500 mt-3 font-bold text-white w-1/2 mx-auto">
            Create Acount
          </button>
        <span className="text-blue-500">
              have account ? <Link to="/login">login</Link>
            </span>
        </form>
      </div>

</>
  )
}

export default Signuppage