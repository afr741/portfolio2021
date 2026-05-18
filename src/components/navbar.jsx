'use client';

import React, { Component } from "react";

const logoSrc = "/assets/images/male-new.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      reduced: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.setState({ reduced: window.pageYOffset > 50 });
  }

  toggleMenu() {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  }

  scrollTo(id) {
    this.setState({ menuOpen: false });
    const target = document.getElementById(id);
    if (!target) return;
    const nav = document.getElementById("mainNav");
    const offset = nav ? nav.offsetHeight : 60;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  render() {
    const { menuOpen, reduced } = this.state;
    const navClass = [
      "navbar navbar-b navbar-expand-md fixed-top",
      reduced ? "navbar-reduce" : "navbar-trans",
    ].join(" ");

    const links = [
      { label: "Home",       id: "home" },
      { label: "About",      id: "about" },
      { label: "Work",       id: "portfolio" },
      { label: "Experience", id: "resume" },
    ];

    return (
      <nav className={navClass} id="mainNav">
        <div className="container">
          <a
            className="navbar-brand"
            href="#home"
            onClick={(e) => { e.preventDefault(); this.scrollTo("home"); }}
          >
            <img src={logoSrc} alt="logo" style={{ maxWidth: "100px" }} />
          </a>

          <button
            className={`navbar-toggler${menuOpen ? "" : " collapsed"}`}
            type="button"
            aria-controls="navbarDefault"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={this.toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`navbar-collapse${menuOpen ? " show" : " collapse"} justify-content-end`}
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              {links.map(({ label, id }) => (
                <li className="nav-item" key={id}>
                  <a
                    className="nav-link"
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); this.scrollTo(id); }}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/drive/folders/1LvWbFJeoeYdMDqZ-rHq9VtXQocVeBLqd?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
