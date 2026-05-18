'use client';

import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import Switch from "react-switch";
import "./stars.scss";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => (
        <TypeAnimation
          className="title-styles"
          sequence={this.titles}
          repeat={Infinity}
          cursor={false}
        />
      ),
      () => true
    );

    return (
      <header id="home" style={{ height: "100vh", display: "block" }}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span className="header-icon" role="img" aria-label="AI model">
                🤖
              </span>
              <br />
              <h1 className="mb-0">
                <TypeAnimation sequence={name ? [name] : []} wrapper="p" repeat={1} cursor={false} />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    role="img"
                    aria-label="light mode"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 20,
                      lineHeight: "40px",
                      textAlign: "center",
                    }}
                  >
                    ☀️
                  </span>
                }
                checkedIcon={
                  <span
                    role="img"
                    aria-label="dark mode"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 20,
                      lineHeight: "40px",
                      textAlign: "center",
                    }}
                  >
                    🦉
                  </span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
