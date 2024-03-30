import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import Header from './Components/Header';
import Services from './Pages/Services';
import SingleBlogPage from './Pages/SingleBlogPage';

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/service' element={<Services/>} />
      <Route path='/aboutus' element={<About/>} />
      <Route path='/singleblog' element={<SingleBlogPage/>} />
    </Routes>
    
    
    </BrowserRouter>

  
    </>
  )
}

export default App;
