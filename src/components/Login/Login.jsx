import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../privater/AuthPrivater";
import { sendEmailVerification } from "firebase/auth";

const Login = () => {
     const { signInUser, googleLogin } = useContext(AuthContext);
     const navigate = useNavigate();
     const handelLogin = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          // console.log(email, password)

          // sign in user with firebase

          signInUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user)


                    if (user.emailVerified) {
                         alert("Login successfully");
                         navigate("/");
                    } else {

                         alert("Plz  verification your Email address")

                    }
                    e.target.reset();
               })
               .catch(error => {
                    console.error(error.message)
               })


     };
     const handelGoogleLogin = () => {
          googleLogin()
               .then(result => {
                    const user = result.user;
                    console.log(user)
               })
               .catch(error => {
                    console.error(error.message)
               })
     }

     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col">
                    <div className="text-center  ">
                         <h1 className="text-5xl font-bold text-red-400">Login now!</h1>
                         <p className="py-6 text-xl ">
                              This is a Auth Integration and Private Router Login Now!!!!
                         </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelLogin} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Login</button>
                              </div>
                         </form>

                         <p className="text-center text-lg">
                              New Here? Please <Link className="btn btn-link" to={"/register"}>Register</Link>
                         </p>
                         <p className="text-center text-lg">
                              Google Login <button onClick={handelGoogleLogin} className="btn btn-ghost" >Google</button>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Login;