import React ,{useState} from "react";
import "../Styles/Login.css"
import { FaFingerprint, FaUser,FaLock} from "react-icons/fa";


function Login() {
    const [name,setname] =useState("");
  const [password,setpassword] =useState("");
//   const [message,setmessage] =useState("");

const SubmitHandeler=(e)=>{
    e.preventDefault();
  }
  return <div className="body">
  <div className="login">

<form  onSubmit={SubmitHandeler}>
    <h2>Hello!<br/><span>Welcome Back!</span></h2>
    <div className="inpuBox">
        <input type="text" placeholder="
        Username" value={name} onChange={(e) => setname(e.target.value)}  required/>
        <i><FaUser/></i>

    </div>
    <div className="inpuBox">
        <input type="Password" placeholder="
        Password"  value={password} onChange={(e) => setpassword(e.target.value)} required/>
        <i><FaLock/></i>
    </div>
    <label >
        <input type="checkbox"  />
        Keep me logged in
    </label>
    <div className="inpuBox">
        <input type="submit"  value="Log in"  />
    </div>
</form>
{/* <h4>Or</h4>
<div className="finger">
    <div className="fingerbox">
    <FaFingerprint/>
    </div>
    <p>Login With FingerPrint</p>
</div> */}
  </div>;
  </div>
}

export default Login;
