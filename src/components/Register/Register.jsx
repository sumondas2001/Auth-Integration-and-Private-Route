import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../privater/AuthPrivater";


const Register = () => {
     const { createUser } = useContext(AuthContext);
     const navigate = useNavigate()
     // console.log(createUser)
     const handelRegister = e => {

          e.preventDefault();
          // const name = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.password.value;
          // console.log(name, email, password)

          // create User 
          createUser(email, password)
               .then(result => {
                    console.log(result.user);
                    e.target.reset();
                    navigate("/");
               })
               .catch(error => {
                    console.error(error.message)
               })

     }
     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col">
                    <div className="text-center  ">
                         <h1 className="text-5xl font-bold text-red-400">Register now!</h1>
                         <p className="py-6 text-xl ">
                              This is a Auth Integration and Private Router Login Now!!!!
                         </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelRegister} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                              </div>

                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Register</button>
                              </div>
                         </form>

                         <p className="text-center text-lg">
                              Already Account ? Please <Link className="btn btn-link" to={"/login"}>login</Link>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Register;