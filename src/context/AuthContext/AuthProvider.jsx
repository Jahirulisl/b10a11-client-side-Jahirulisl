import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../fairebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);

    //for password authinticaton start>

 const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
 }
   //for observer this ching this register user start>
 useEffect( ()=>{
  const unsubscribe =onAuthStateChanged(auth,currentUser =>{
     setUser(currentUser);
     console.log('state captured',currentUser)
     setLoading(false);
   }) 
   return () =>{
    unsubscribe();
   }
 } , [])
   //for observer this ching this  user register end>

   //for observer this ching this user signin start>
  const signInUser =  (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  };
    //for observer this ching this user signin end>
 const SignOutUser = () =>{
  setLoading(true);
  return signOut(auth);
 }
      //for observer this ching this user signOut start>
     
       //for observer this ching this user signOut end>

    const authInfo = {
           user,
           loading,
           createUser,
           signInUser,
           SignOutUser 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;