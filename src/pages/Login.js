import React from "react";
import {auth,provider} from '../firebase-config'
import{signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
const Login = ({setIsAuth}) => {
  const navigate=useNavigate()
  const signinWithGoogle=()=>{
   signInWithPopup(auth,provider).then((res)=>{
     localStorage.setItem("isAuth",true);
   setIsAuth(true);
   console.log(res);
   navigate('/')
   }); 
  }
  return (
    <>
      <div className="button-container ">
        <button type="button" class="btn btn-primary" onClick={signinWithGoogle}>
          <i class="fa-brands fa-google"></i>
          Sign in with Google
        </button>
      </div>
    </>
  );
};

export default Login;
