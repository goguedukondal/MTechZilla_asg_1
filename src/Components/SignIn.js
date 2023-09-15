import React from "react";
import { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SignIn(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        console.log(userCredential)
        navigate('/timer')
        // props.setIsloggedIn(true)
    }).catch(()=>{
       alert("enter proper credentils")
    })
  };
  return (
    <div className="container">
      <form onSubmit={SignIn} className="form">
        <h1>Log Into your Account</h1>
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
        <button type="submit" className="btn">Log In</button>
        <p>If you dont have account ? please <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default SignIn;
