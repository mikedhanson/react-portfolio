import React, { Component } from "react";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/Contact";
import { StyleProvider } from "../../contexts/StyleContext";
import { Fade } from "react-reveal";
import "./Posts.css";


function Content() {
  return (
    <div className="main">
      <div className="posts-parent">
        <div class="posts-child">
          <Fade bottom duration={1000} distance="20px">
            <div className="main" id="blogs">
              <div className="blog-header" > </div>
              <div className="blog-main-div">
                <div className="blog-text-div">
                  <h1>Title </h1>
                  <p>Coming soon</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div class="posts-child">
          <Fade right duration={1000}>

          </Fade>
        </div>
      </div>
    </div>

  );
}

export default class posts extends Component {
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
          <Content />
          <postSection/>
          <Contact />
          <contactInfo />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}