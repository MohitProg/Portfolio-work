import React from 'react'
import Texteditor from '../utilities/Texteditor'
const Addblog = () => {
  return (
    <section>


  <div className='p-3'>
    <h1 className='text-xl font-semibold'>Add Your Blog</h1>

    <form action="" className='min-h-[300px] flex flex-col gap-3 mt-4' >


      <label htmlFor="">Blog Title</label>
      <input type="text" className='p-2 ring-2 appearance-none rounded-sm' placeholder='Enter the title' />

      <label htmlFor="">Blog Category</label>
      <input type="text" className='p-2 ring-2 appearance-none rounded-sm' placeholder='Enter the caregory' name="" id="" />

      <label htmlFor="">Blog Summary</label>
      <input type="text" className='p-2 ring-2 appearance-none rounded-sm' placeholder='Enter the summary' name="" id="" />

      <label htmlFor="">Blog Image</label>
      <input type="file" className='ring-2 p-2 rounded-sm'  placeholder='image ' />

      <Texteditor/>
      <button className='px-2 py-1 bg-blue-500 w-[200px] text-xl text-white font-semibold rounded mt-3'>Add Blog</button>
    </form>
  </div>
</section>
  )
}

export default Addblog