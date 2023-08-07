import React from "react";
import { ReactNavbar } from "overlay-navbar";
import {FaUserAlt} from "react-icons/fa";
function Header() {
  return (
    <div>
      <ReactNavbar
        navColor1="White"
        navColor2="#181837"
        //    navColor3="blue"
        //    navColor4="green"
        burgerColor="red"
        // burgerColor="hsl(250,100%,75%)"
        burgerColorHover="red"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link1TextColorHover="white"
        link2Text="About"
        link3Text="Project"
        link4Text="Contact"
        link5Text="Platform"
        link1Url="/"
        link2Url="/About"
        link3Url="/Project"
        link4Url="/Contact"
        link1ColorHover="white"
        link1Color="hsl(250,100%,75%)"
        link1Padding="3px"
        link1Border="1px solid white"
        link1Size="18px"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        // link1Cursor="url(hc.png),auto;"
      />
    </div>
  );
}

export default Header;
