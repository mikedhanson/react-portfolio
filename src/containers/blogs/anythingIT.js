import React, { Component, useState, useEffect } from "react";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/Contact";
import { StyleProvider } from "../../contexts/StyleContext";
import "../Main.css";


export default class AnythingIT extends Component {
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
        <StyleProvider value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}>
          <SubHeader />
          
          coming soon
          
          <Contact />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}

//export default Main;
