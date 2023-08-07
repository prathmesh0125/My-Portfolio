import React from "react";
import "../Styles/Project.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";

const projectCard=({
  url,
  projectImg,
  Projecttitle,
  description,
  tecnologies,
  isAdmin=false,

})=>{
  
  return(
    <>
    <a href={url} className="Projectcard" target="_blank">

    
    <div>
      <img src={projectImg} alt="projectImg" />
    <Typography variant="h5">{Projecttitle}</Typography>
    </div>
    <div>
    <Typography variant="h4">About Project</Typography>
    <Typography >{description}</Typography>
    <Typography variant="h6">Tech Stack: {tecnologies}</Typography>
      
    </div>
    </a>
    {
      isAdmin && (
        <Button style={{color:"rgba(40,40,40,0.7)"}}>
          <Delete/>
        </Button>
      )
    }
    </>

  )
}

const Project = () => {
  const Projects=[1,2,3];
  return (
    <div className="Projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="ProjectWrapper">
       {
        Projects.map((project,index)=>{
          <projectCard  
          url="https://github.com/prathmesh0125"
          projectImg="Project/Barebeat.png"
          Projecttitle="BareBeat"
          description="djfhfsjd dsjsdnfjsdsmd ssdnsdnjsd"
          tecnologies="Reactjs,NodeJs,Html,Css,Javascript"
          />
        })
       }
      </div>
    </div>
  );
};

export default Project;
