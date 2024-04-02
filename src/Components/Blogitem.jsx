import React from 'react'
import { Link } from 'react-router-dom'

const Blogitem = () => {
  return (
    <Link to="/singleblog">
    <div className='bg-gray-200 transition ease-in-out  border-[4px] hover:border-blue-500 rounded p-1 shadow-lg'>
        <div >
            <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyfGVufDB8fDB8fHww" className='object-fit' alt="" />
        </div>
        <div className='p-2'>
            <h1 className='text-xl font-bold'>Best Phone in this World is Iphone </h1>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates aspernatur dolorum </p>

            
        </div>
    </div>
    </Link>
  )
}

export default Blogitem