import React from "react";
import "../Styles/Footer.css";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import{   BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"; 

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5"> About Me</Typography>

        {/* // if we dont give variant then by default consider p tag */}
        <Typography>
          Hey,My Name is Prathmesh Bidve ,I am FullStack Developer.
        </Typography>
        <Link to="/Home" className="footerContact">
        <Typography  ><a href="mailto:bidveprathmesh590@gmail.com">Contact Me</a></Typography>

        </Link>
      </div>
      <div className="Link">
      <Typography variant="h6"> Social Media</Typography>
      <a href="http://github.com/prathmesh0125" target="_blank" rel="noopener noreferrer">
        <BsGithub/>
      </a>
      <a href="http://github.com/prathmesh0125" target="_blank" rel="noopener noreferrer">
        <BsInstagram/>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <BsLinkedin/>
      </a>

      </div>
    </div>
  );
};

export default Footer;
