import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import jobIcon from "../../assets/logo.png"

const Navbar = () => {
    // for user nia asa login condation start>
   const {user, SignOutUser } = useContext(AuthContext);
    // for user login condation end>

    //signoutuser use start>
   const handleSignout = () =>{
    SignOutUser()
    .then(()=>{
      console.log('successful sign out')
    })
    .catch(error =>{
      console.log('failed to sign out .stay here.doNot leave me alone',error)
    })
   }
  

  const links = (
    <>
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-12" src={jobIcon} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <>
             <button onClick={handleSignout} className="btn">SignOut</button>
          </> : <>
          <Link to="/register">Register</Link>
          
         <Link to='/signin'>
          <button className="btn">Sign In</button>
         </Link>
          </>
          
        } 
       
      </div>
    </div>
  );
};

export default Navbar;
