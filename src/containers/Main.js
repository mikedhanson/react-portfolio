import React, { Component } from "react";
import HeaderMain from "../components/header/HeaderMain";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import BigProjects from "./BigProjects/BigProjects";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";
import Achievement from "./achievement/Achievement";

//import Top from "./topbutton/Top";
//import Contact from "./contact/Contact";
//import { educationInfo } from "../portfolio";

export default class Main extends Component {
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
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <HeaderMain />
          <Greeting />
          <Skills />
          <StackProgress />
          <WorkExperience />
          <BigProjects />
          <Education />
          <Projects />
          {/* <Achievement /> */}
          <Blogs />
          <Profile />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}
