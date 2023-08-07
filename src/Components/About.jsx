import React from "react";
import "../Styles/About.css";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div className="aboutcontainer1">
        <Typography>
          Hey,My Name is Prathmesh Bidve, I am FullStack Developer.
        </Typography>
      </div>
      <div className="aboutcontainer2">
        <div>
          {/* <img src="../bg2.jpg" alt="" srcset="" /> */}
          <Typography style={{margin:"1vmax 0",color:"black",paddingTop:"5vmax"}}>Prathmesh Bidve</Typography>
          <Typography>A Fullstack Developer</Typography>
          <Typography style={{margin:"1vmax 0"}}>A Mentor</Typography>
        </div>
        <div>
        <Typography variant="h3" style={{paddingTop:"5vmax"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
          
        </div>
      </div>
    </div>
  );
};

export default About;
