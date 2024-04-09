import React from 'react'

const Addprojects = () => {
  return (
   <>
<section>


  <div className='p-3'>
    <h1 className='text-xl font-semibold'>Add Your Project</h1>

    <form action="" className='min-h-[300px] flex flex-col gap-3 mt-4' >


      <label htmlFor="">Project Title</label>
      <input type="text" className='p-2 ring-1 appearance-none outline-none rounded-sm' placeholder='Enter the title' />
      <label htmlFor="">Project Url</label>
      <input type="text" className='p-2 ring-1 appearance-none outline-none rounded-sm' placeholder='Enter the url' />
      <label htmlFor="">Project Description</label>
      <input type="text" className='p-2 ring-1 appearance-none  outline-none rounded-sm' placeholder='Enter the deescription' name="" id="" />
      <label htmlFor="">Project Image</label>
      <input type="file" className='ring-1 p-2 rounded-sm outline-none'  placeholder='image ' />
      <button className='px-2 py-2 bg-blue-500 w-1/5 text-xl text-white  rounded-lg mt-3'>Add Project</button>
    </form>
  </div>
</section>
   
   
   </>
  )
}

export default Addprojects