import "./About.css";
import {Fade} from "react-reveal";
//import StyleContext from "../../contexts/StyleContext";
import {StyleProvider} from "../../contexts/StyleContext";
import React from "react";
import Footer from "../../components/footer/Footer";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Header from "../../components/header/Header";


function Content() {
  return (
    <div className="main">
      <div className="about-parent">
        <div class="about-child">
          <Fade left duration={1000}>
            <h1>About Me.</h1>
            <p>
              I recently took a new position with the State of South Dakota as an Endpoint Architect with the Service Delivery team. 
              In my free time I spend a lot of time managing and changing up my home network. 
              Between building my own docker images to controlling IOT things around the house to self-hosting my own react portfolio, 
              it keeps me quite busy.
              </p>

            <p>
              I am passionate about technology and tinkering with hardware. 
              I enjoy coffee more than I should and like to spend time outdoors either camping or on the water.
            </p>
            <div class="test-visual"></div>
            <img className="about-img-size" alt="hiking" src={ require("../../assets/images/hiking.jpg") }></img>
          </Fade>
        </div>
        <div class="about-child">
          <Fade right duration={1000}>
            <h1>The Homelab.</h1>
            <img className="about-img-size" alt="server" src={ require("../../assets/images/homelab.jpg") } ></img>
            <div class="test-visual"></div>
            <p> Eventually I'll do a writeup on my homelab but for now heres a picture and some details on what I'm running.</p>
            <div>
              <li> Media Server:  Unraid</li>
              <li> Switch:        Juniper </li>
              <li> Access Points:  Unifi </li>
              <li> Battery Backup: APC </li>
            </div>
          </Fade>
        </div>
      </div>
    </div>

  );
}

const About = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          <>
            <Header />
            <Content/>
            <Footer />
          </>
      </StyleProvider>
    </div>
  );
};

export default About;


/**
<div className="main">
      <div className="about-parent">
        <div class="about-child">
          <Fade left duration={1000}>
            <h1>About Me.</h1>
            <p>
              I recently took a new position with the State of South Dakota as
              an Endpoint Architect with the Service Delivery team. In my free
              time I spend a lot of time managing and changing up my home
              network. Between building my own docker images to controlling IOT
              things around the house to self-hosting my own react portfolio, it
              keeps me quite busy.
            </p>

            <p>
              I am passionate about technology and tinkering with hardware. I
              enjoy coffee more than I should and like to spend time outdoors
              either camping or on the water.
            </p>
            <div class="test-visual"></div>
            <img
              className="about-img-size"
              alt="hiking"
              src={require("../../assets/images/hiking.jpg")}
            ></img>
          </Fade>
        </div>
        <div class="about-child">
          <Fade right duration={1000}>
            <h1>The Homelab.</h1>
            <img
              className="about-img-size"
              alt="server"
              src={require("../../assets/images/server.jpg")}
            ></img>
            <div class="test-visual"></div>
            <p>
              {" "}
              Eventually I'll do a writeup on my homelab but for now heres a
              picture and some details on what I'm running.
            </p>
            <div>
              <li> Media Server: Unraid</li>
              <li> Switch: Juniper </li>
              <li> Access Points: Unifi </li>
              <li> Battery Backup: APC </li>
            </div>
          </Fade>
        </div>
      </div>
    </div>

     */
