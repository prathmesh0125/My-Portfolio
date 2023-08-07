import React from 'react'
import "../Styles/Skill2.css"
// import {EarthCanvas} from './canvas';

function Skill2() {

  const skill=[
    {
      id:1,
      src:"tech/html.png",
      alt:"loading",
      name:"Html",
    },
    {
      id:2,
      src:"tech/css.png",
      alt:"loading",
      name:"Css",
    },
    {
      id:3,
      src:"tech/javascript.png",
      alt:"loading",
      name:"javascript",
    },
    {
      id:4,
      src:"tech/reactjs.png",
      alt:"loading",
      name:"ReactJs",
    },
    {
      id:5,
      src:"tech/nodejs.png",
      alt:"loading",
      name:"Nodejs",
    },
    {
      id:6,
      src:"tech/mongodb.png",
      alt:"loading",
      name:"MongoDb",
    },
    {
      id:7,
      src:"tech/redux.png",
      alt:"loading",
      name:"Redux",
    },
    {
      id:8,
      src:"tech/tailwind.png",
      alt:"loading",
      name:"Tailwind",
    },
    {
      id:9,
      src:"tech/figma.png",
      alt:"loading",
      name:"figma",
    },
    {
      id:10,
      src:"tech/git.png",
      alt:"loading",
      name:"Git",
    },
    {
      id:11,
      src:"tech/docker.png",
      alt:"loading",
      name:"Docker",
    },
    {
      id:12,
      src:"tech/bootstrap.png",
      alt:"loading",
      name:"Bootstrap",
    },
    {
      id:13,
      src:"tech/typescript.png",
      alt:"loading",
      name:"Typescript",
    },
  ]
  return (
    <div>
       <div className="container">
      <div className="card_container" style={{boxShadow:" 0px 0px 15px white"}}>
        {
         skill.map(({id,src,alt,name})=>(

           <div  key={id}  className="card" style={{boxShadow:" 0px 0px 15px 3px orange"}} >
          <img src={src} alt={alt}  />
          <h2>{name}</h2>
        </div>
            ))
        }

<div className='earth' style={
  {
    opacity:"99",
    width:"100%"

  }

}></div>
{/* <EarthCanvas /> */}

        {/* <div className="card">
          <img src="tech/css.png" alt="" srcset="" />
          <h2>CSS</h2>
        </div>
        <div className="card">
          <img src="tech/javascript.png" alt="" srcset="" />
          <h2>Javascript</h2>
        </div>
        <div className="card">
          <img src="tech/reactjs.png" alt="" />
          <h2>React Js</h2>
        </div>
        <div className="card">
          <img src="tech/nodejs.png" alt="" />
          <h2>Node Js</h2>
        </div>
        <div className="card">
          <img src="tech/mongodb.png" alt="" />
          <h2>Mongo Db</h2>
        </div>
        <div className="card">
          <img src="tech/redux.png" alt="" />
          <h2>Redux</h2>
        </div>
        <div className="card">
          <img src="tech/tailwind.png" alt="" />
          <h2>TailWind</h2>
        </div>
        <div className="card">
          <img src="tech/figma.png" alt="" />
          <h2>Figma</h2>
        </div>
        <div className="card">
          <img src="tech/git.png" alt="" />
          <h2>Figma</h2>
        </div>
        <div className="card">
          <img src="tech/docker.png" alt="" />
          <h2>Docker</h2>
        </div>
        <div className="card">
          <img src="tech/bootstrap.png" alt="" />
          <h2>Docker</h2>
        </div>
        <div className="card">
          <img src="tech/typescript.png" alt="" />
          <h2>Docker</h2>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default Skill2

