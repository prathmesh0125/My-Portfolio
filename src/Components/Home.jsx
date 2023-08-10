import React from "react";
import { ComputersCanvas } from "./canvas";
import {EarthCanvas} from './canvas';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "../Styles/Home.css";
import { Typography } from "@mui/material";
import TimeLine from "./TimeLine";
import Skill2 from "./Skill2";
import Coding from "./Coding";
import{   BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"; 

// import Experience from "./Experience"

function Home() {
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 1,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 1,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div 
      id="home"
    //   style={{ marginTop: "10%",
    //  height: "100vh", marginLeft: "2%" }}
    >
      <div className="mainprofile">

      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi ,I Am <br />
            <span>P</span>rathmesh <span>B</span>idve
          </motion.h1>
          {/* <video src="particles.mp4" muted autoPlay loop></video> */}
          <div
            className="typewriter"
            style={{ color: "white", marginTop: "2%",marginLeft:"6rem"}}
          >
             <Typewriter
              style={{ Color: "white" ,
            }}
              options={{
                strings: [
                  "A MERN Developer",
                  "A React Developer",
                  "",
                  "A Mentor",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriterpara",
              }}
            />
          </div>
          <div className="sociallink">
      <Typography variant="h6">Connect Me:</Typography>
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
      <div className="contact">

      <Typography><a href="mailto:bidveprathmesh590@gmail.com">Contact Me</a></Typography>
      </div>
        </div>
      </section>
      <section>
        {/* <ComputersCanvas/> */}
        </section>
      </div>

      <div className="homecontainer">
        <Typography variant="h3"> Timeline</Typography>
        <TimeLine timelines={[1, 2, 3, 4, 5]} />
      </div>

      <div className="homeskill">
        <Typography variant="h4"> Skill</Typography>

        <Skill2 />

        {/* <Experience/> */}
      </div>

      <div className="codingProfile">
        <Typography variant="h4"> Coding Profile</Typography>
        <Coding />
      {/* <EarthCanvas/> */}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
