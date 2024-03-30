import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const path=useLocation();
const paths=path.pathname;

  return (
    <>
    <header className='bg-gray-300 '>

        <nav className='flex gap-2  min-h-[60px] justify-between items-center p-2'>
        <h1 className='text-2xl font-bold'><span className='text-red-500'>Web</span>tech</h1>
        <div className='hidden sm:block' >
            <ul className='flex gap-5 text-lg font-semibold '>
                <Link className={paths==="/"?"text-red-500":"text-black"} to="/">Home</Link> 
                 <Link className={paths==="/blogs"?"text-red-500":"text-black"} to="/blogs">Blogs</Link>
                 <Link className={paths==="/service"?"text-red-500":"text-black"} to="/service">Service</Link>
                 <Link  className={paths==="/aboutus"?"text-red-500":"text-black"} to="aboutus">About us</Link>

            </ul>
        </div>
        <div className=' items-center gap-2 hidden lg:flex'>
            <input type="search" className='appearance-none p-1 rounded ring-1' placeholder='Search' name="" id="" />
            <button className='bg-blue-500 px-2 py-1 rounded text-xl font-semibold text-white'>Login</button>
        </div>
        </nav>
    </header>
    
    
    
    </>
  )
}

export default Header