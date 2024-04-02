import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from 'react';

const Texteditor = () => {
    const [value, setValue] = useState('');
   
    
      return  <>
      
      <ReactQuill theme="snow" value={value} onChange={setValue} />
</>
}
      

export default Texteditor