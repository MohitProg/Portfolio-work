import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Header from "./Components/Header";
import Services from "./Pages/Services";
import SingleBlogPage from "./Pages/SingleBlogPage";
import LoginPage from "./Pages/LoginPage";
import Signuppage from "./Pages/Signuppage";

function App() {
  const Layout = (children) => {
    return (
      <>
        <div>
          <Header />
          <div>
            <Outlet>
              {children}
            </Outlet>

          </div>
        </div>
      </>
    );
  };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },

        {
          path: "/service",
          element: <Services />,
        },
        {
          path: "/aboutus",
          element: <About />,
        },
        {
          path: "/singleblog",
          element: <SingleBlogPage />,
        }
      ],
    },

    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <Signuppage />,
    },
  ]);

  return (
    <>
    <RouterProvider router={route}/>
      {/* <BrowserRouter>
    <Header/>
  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/service' element={<Services/>} />
      <Route path='/aboutus' element={<About/>} />
      <Route path='/singleblog' element={<SingleBlogPage/>} />
    </Routes>
    
    
    </BrowserRouter> */}
    </>
  );
}

export default App;
