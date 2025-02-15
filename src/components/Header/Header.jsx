import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../privater/AuthPrivater";


const Header = () => {
     const { user, logOut } = useContext(AuthContext);

     // const { emailVerified, email } = user;

     const handelLogOut = () => {
          logOut();
     }
     const navLinks = <>

          {user && user.emailVerified ?
               <>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/login"}>Login</NavLink></li>
                    <li><NavLink to={"/register"}>Register</NavLink></li>
                    <li><NavLink to={"/orders"}>Orders</NavLink></li>
                    <li><NavLink to={"/profile"}>Profile</NavLink></li>
                    <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
               </> : <>

                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/login"}>Login</NavLink></li>
                    <li><NavLink to={"/register"}>Register</NavLink></li>
                    <li><NavLink to={"/orders"}>Orders</NavLink></li>
               </>
          }
     </>
     return (
          <div className="navbar w-11/12 bg-base-100 justify-around ">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                              </svg>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              {navLinks}
                         </ul>
                    </div>
                    <a className=" text-xl font-bold text-red-500">Auth Integration</a>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {navLinks}
                    </ul>
               </div>
               <div>
                    {
                         user && user.emailVerified ? <>
                              <span className="text-lg text-green-300 pr-2 pl-4">{user.email}</span>
                              <button onClick={handelLogOut} className="btn btn-warning">Sign Out</button>
                         </> :
                              <Link to={"/logIn"} className="btn btn-success">Login</Link>
                    }

               </div>
          </div>
     );
};

export default Header;