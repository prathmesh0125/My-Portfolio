import React,{useState} from "react";
import "../Styles/Contact.css";
import { Button,Typography } from "@mui/material";
const Contact = () => {
  const [name,setname] =useState("");
  const [email,setemail] =useState("");
  const [message,setmessage] =useState("");
  
 
  const contactFormHandeler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="contactUs">
      <div className="contactRightbar"></div>
      <div className="contactcontainer">
        <form action="" className="formcontainer" onSubmit={contactFormHandeler}>
          <Typography variant="h4">Contact us</Typography>
          <input type="text" placeholder="Name" required value={name} onChange={(e) => setname(e.target.value)}/>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}  required/>
          <textarea placeholder="Message" cols="30" rows="10" value={message} onChange={(e) => setmessage(e.target.value)} required></textarea>
          <Button vatiant="contained" type="submit">send</Button>
        </form>
      </div>
    </div> 
  );
};

export default Contact;
