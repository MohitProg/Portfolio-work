import React from 'react'
import Blogitem from '../Components/Blogitem'


const Yourblog = () => {
  return (
<>

<section className='p-2'>

  <h1 className='text-center font-semibold text-xl mt-2'>Your Blog</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2'>
    
<Blogitem/>
<Blogitem/>
<Blogitem/>
<Blogitem/>
<Blogitem/>
<Blogitem/>
  </div>
</section>




</>
  )
}

export default Yourblog