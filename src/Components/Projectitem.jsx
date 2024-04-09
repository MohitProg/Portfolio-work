import React from 'react'

const Projectitem = () => {
  return (
    <div className=' bg-gray-300 p-1  shadow-sm rounded-lg transition border-[2px]  ease-in-out hover:border-blue-500'>
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" className='object-cover h-[200px] w-full' alt="" />
      
        <div className='  flex flex-col gap-2 items-center justify-center  bg-gray-300 p-2 '>
            <h1 className='text-2xl font-semibold '>MERN BLOG APP</h1>
            <button className='bg-blue-500 px-4   text-white text-xl rounded-lg border-none  py-2'>Preview</button>

        </div>  
    </div>
  )
}

export default Projectitem