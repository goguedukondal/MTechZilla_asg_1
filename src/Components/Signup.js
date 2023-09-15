import React from "react";
import { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword (auth,email,password).then((userCredential)=>{
        console.log(userCredential)
        navigate('/timer')
        // props.setIsloggedIn(true)
    }).catch((error)=>{
       console.log(error)
    })
  };
  return (
    <div className="container">
      <form onSubmit={SignUp} className="form">
        <h1>Create your Account</h1>
        <input className="email"
          type="email"
          placeholder="eneter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="password"
          type="password"
          placeholder="eneter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
