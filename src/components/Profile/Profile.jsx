import { useContext } from "react";
import { AuthContext } from "../../privater/AuthPrivater";
import PropTypes from 'prop-types'; // ES6


const Profile = ({ children }) => {
     const { user } = useContext(AuthContext)
     // console.log(user)
     const { email, displayName, emailVerified } = user;
     return (
          <div className="">
               <h2 className="text-xl text-center">This Is A Private Profile</h2>

               <div className="flex h-96 justify-center items-center ">
                    <div className="">
                         <h1 className="text-2xl  font-bold text-white"  >Your Name: <span className="text-xl font-bold text-lime-400">{displayName || '-------'}</span></h1>


                         <h1 className="text-2xl  font-bold text-white">Your Email: <span className="text-xl font-bold text-lime-400">{email}</span></h1>

                         <h1 className="text-2xl  font-bold text-white">Email Verified: <span className="text-xl font-bold text-lime-400">  {emailVerified ? "Yes" : "No"}
                         </span>
                         </h1>



                    </div>
               </div>

          </div>
     );
};

export default Profile;

Profile.propTypes = {
     children: PropTypes.node,
}