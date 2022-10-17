import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      // document.body.style.position = "fixed";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflowY = "scroll";
      // document.body.style.position = "relative";
      document.body.style.touchAction = "auto";
    }
  }
  render() {
    const { isMenuOpen } = this.state;
    return (
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="header fixed-top"
      >
        <nav className="navbar navbar-expand-md navbar-dark">
          <NavLink to="home" exact strict>
            <a className="navbar-brand">
              <span className="helper"></span>
              <img
                src="../images/concettoLogo.webp"
                className="logo-header"
                alt={"CONCETTO"}
              />
            </a>
          </NavLink>
          <div id="menuToggle">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onClick={this.toggleMenu}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <br />
              <li>
                <NavLink
                  className="nav-link header-link"
                  to="/home"
                  onClick={this.toggleMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link header-link"
                  to="/about-us"
                  onClick={this.toggleMenu}
                >
                  ABOUT US
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/exhibitions"
                  onClick={this.toggleMenu}
                >
                  EXHIBITIONS
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/workshops"
                  onClick={this.toggleMenu}
                >
                  WORKSHOPS
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/informal-events"
                  onClick={this.toggleMenu}
                >
                  INFORMAL EVENTS
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/club-events"
                  onClick={this.toggleMenu}
                >
                  EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/sponsors"
                  onClick={this.toggleMenu}
                >
                  SPONSORS
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/department-events"
                  onClick={this.toggleMenu}
                >
                  DEPARTMENTAL EVENTS
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/login"
                  onClick={this.toggleMenu}
                >
                  LOGIN
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  className="nav-link header-link "
                  to="/coming-soon"
                  onClick={this.toggleMenu}
                >
                  CAP
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/our-team"
                  onClick={this.toggleMenu}
                >
                  OUR TEAM
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link header-link "
                  to="/guest-talks"
                  onClick={this.toggleMenu}
                >
                  GUEST TALKS
                </NavLink>
              </li>
              <li>
                <a
                  className="nav-link header-link "
                  href="https://docs.google.com/forms/d/e/1FAIpQLScodg_UYACMBMLkUaN-FwXrmQDDGuq9K0-KPRl3AKRS7FoPoQ/viewform?usp=sf_link"
                  onClick={this.toggleMenu}
                >
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav role="navigation"></nav>
      </div>
    );
  }
}

export default Header;
