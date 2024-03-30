import React from 'react'

const Projectitem = () => {
  return (
    <div className=' bg-gray-300 p-1 shadow-sm rounded '>
        <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover h-[300px] w-full' alt="" />
      
        <div className='  flex flex-col gap-2 items-center justify-center '>
            <h1 className='text-2xl font-bold '>MERN BLOG APP</h1>
            <button className='bg-blue-500 px-4 font-semibold text-white text-xl rounded border-none  py-1'>Preview</button>

        </div>  
    </div>
  )
}

export default Projectitem