
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from '../firebase/Firebased.config';


export const AuthContext = createContext(null);


const provider = new GoogleAuthProvider();

const AuthPrivater = ({ children }) => {
     const [user, setUser] = useState(null);

     const [loading, setLoading] = useState(true)

     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const signInUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     };
     const googleLogin = () => {
          setLoading(true)
          signInWithPopup(auth, provider)
     }

     const logOut = () => {
          setLoading(true)
          signOut(auth)
               .then(() => {
                    console.log('LogOut successful')
               })
               .catch(error => {
                    console.error(error)
               })
     };

     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, currentUser => {
               // console.log('current value of the current user', currentUser)
               setUser(currentUser)
               setLoading(false)
          });
          return () => {
               unSubscribe();
          }
     }, []);
     const authInfo = { user, createUser, signInUser, logOut, loading, googleLogin }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};



export default AuthPrivater;

AuthPrivater.propTypes = {
     children: PropTypes.node,
}
