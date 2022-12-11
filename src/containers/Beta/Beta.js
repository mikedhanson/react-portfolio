import React, { Component } from "react";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/Contact";
import { StyleProvider } from "../../contexts/StyleContext";
import "./Beta.css";

function Content() {
  return (
    <div className="main">
      <div className="test-body">
        <div class="test-card">
          <h1>Title - Card 1</h1>
          <p>Medium length description. Let's add a few more words here.</p>
          <div class="test-visual"></div>
        </div>
        <div class="test-card">
          <h1>Title - Card 2</h1>
          <p>
            Long Description. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sed est error repellat veritatis.
          </p>
          <div class="test-visual"></div>
        </div>
        <div class="test-card">
          <h1>Title - Card 3</h1>
          <p>Short Description.</p>
          <div class="test-visual"></div>
        </div>
      </div>

      <div className="parent">
        <div class="child">
          <h1>Title - Card 1</h1>
          <p>Medium length description. Let's add a few more words here.</p>
          <div class="test-visual"></div>
        </div>
        <div class="child">
          <h1>Title - Card 2</h1>
          <p>
            Long Description. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sed est error repellat veritatis.
          </p>
          <div class="test-visual"></div>
        </div>
        <div class="child">
          <h1>Title - Card 3</h1>
          <p>Short Description.</p>
          <div class="test-visual"></div>
        </div>
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
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <SubHeader />
          <Content />
          <Contact />
          <contactInfo />
          <Footer />
        </StyleProvider>
      </div>
    );
  }
}
