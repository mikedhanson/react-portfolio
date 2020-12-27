import React, { Component } from "react";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/Contact";
import emoji from "react-easy-emoji";
import { StyleProvider } from "../../contexts/StyleContext";
//import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

import "./About.css";
import "../education/Education.css"
import "../skills/Skills.css"


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to grab a coffee or talk about tech?",
};


function AboutContent() {
  return (
    <div className="education-section">
      <h1>About Me!</h1>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div>
            <p>
              I am currently working for the State of South Dakota as a Technology Engineer doing patch management. In my free time I spend a lot of time managing and changing up my home network. Between building my own docker images to control things around the house to self hosting my own react portfolio, it keeps me quite busy.
          </p>
            <p>
              I am passionate about technology and tinkering with hardware. I enjoy coffee more than I should and like to spend time outdoors either camping or on the water.
          </p>
            <div className="skills-image-div">

              <img className="about-img-size" alt="hiking"
                src={require("../../assets/images/hiking.jpg")}
              ></img>
            </div>

          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="about-text-div">
            <h1>
              The Homelab
            </h1>
            <img className="about-img-size" alt="server"
              src={require("../../assets/images/server.jpg")}
            ></img>
            <p> Eventually Ill do a writeup on my homelab but for now heres a picture and some details on what I'm running.</p>
            <li> Media Server:  Unraid</li>
            <li> Switch:        Juniper </li>
            <li> Firewall:      Fortigate</li>
            <li> Acess Points:  Unifi </li>
            <li> Battery Bakup: APC </li>
          </div>

        </Fade>

      </div>

    </div>

  );
}

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };



  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }} >
          <SubHeader />
          <AboutContent />
          <Contact />
          <contactInfo />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}

//export default Main;