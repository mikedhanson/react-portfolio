import React, { Component } from "react";
//import marked from "marked";
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

    const blog = require("./2019/11/2019-11-11-wordpress-and-unraid/index.md");

    /*
    fetch(blog)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          markdown: marked(text),
        });
      });
      */
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    const { markdown } = this.state;
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <SubHeader />

          {/**<section>
            <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
          </section> */}


          <Contact />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}

//export default Main;
