import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>ROUTE NOT FOUND</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader:({params}) => fetch(`http://localhost:3000/aplications/${params.id}`)
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'signin',
            element:<SignIn></SignIn>,
        }
       
      ]
    },
  ]);
  export default router;