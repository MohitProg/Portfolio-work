import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Header from "./Components/Header";
import Services from "./Pages/Services";
import SingleBlogPage from "./Pages/SingleBlogPage";
import LoginPage from "./Pages/LoginPage";
import Signuppage from "./Pages/Signuppage";
import Profile from "./Pages/Profile";
import Addblog from "./Pages/Addblog";
import Addprojects from "./Pages/Addprojects";
import Yourblog from "./Pages/Yourblog";
import Editprofile from "./Pages/Editprofile";

function App() {
  const Layout = (children) => {
    return (
      <>
        <div>
          <Header />
          <div>
            <Outlet>{children}</Outlet>
          </div>
        </div>
      </>
    );
  };
  
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
        },

        {
          path: "/profile",
          element: <Profile />,
          children:[{
            path:"/profile/addblog",
            element:<Addblog/>
          },
        
          {
            path:"/profile/addproject",
            element:<Addprojects/>
          },
          {
            path:"/profile",
            element:<Yourblog/>
          },
          {
            path:"/profile/editprofile",
            element:<Editprofile/>
          }
        
        ]
          
        },
        {
          path: "/addproject",
          element: <Addprojects />,
        },
        {
          path: "/addblog",
          element: <Addblog />,
        },

        {
          path: "/userblog",
          element: <Yourblog />,
        },
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
      <RouterProvider router={route} />
    </>
  );
}

export default App;
