import { useContext } from "react";
import { AuthContext } from "../privater/AuthPrivater";
import PropTypes from 'prop-types'; // ES6
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     if (loading) {
          return <div className="text-center">
               <span className="loading loading-spinner  text-secondary"></span>
          </div>
     }
     if (user) {
          return children;
     }
     return (
          <div>
               <Navigate to={"/login"}></Navigate>
          </div>
     );
};

export default PrivetRoute;

PrivetRoute.propTypes = {
     children: PropTypes.node,
}