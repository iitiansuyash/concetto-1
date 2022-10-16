import React, { Component } from "react";
import Header from "../Header";
import { CoreTeam } from "../../data/CoreTeam";
import Card from "./Card/Card";
import { DeveloperTeam } from "../../data/DeveloperTeam";
import "./styles.css";
import { Helmet } from "react-helmet";

class OurTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    this.devRef = React.createRef();
    this.scrollToDevRef = this.scrollToDevRef.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  scrollToDevRef = () => window.scrollTo(0, this.devRef.current.offsetTop);

  render() {
    const { width } = this.state;
    return (
      <div className="team-page">
        <Helmet>
          <title>Concetto Team</title>
          <meta
            name="description"
            content="Concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Meet the core-team and developers of Concetto here."
          />
          <meta
            name="keywords"
            content="iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto core-team, Concetto developers, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <br />
        {width > 486 ? (
          <h2 align="center" style={{ color: "black" }}>
            <a
              href="#"
              className="title highlighted"
              style={{ borderBottom: "2px solid black", color: "black" }}
            >
              {" "}
              CORE TEAM{" "}
            </a>
          </h2>
        ) : (
          <h2 align="center" style={{ color: "black" }}>
            <a
              href="#"
              className="highlighted"
              style={{ borderBottom: "2px solid black", color: "black" }}
            >
              {" "}
              OUR TEAM{" "}
            </a>
          </h2>
        )}
        <br />
        <div class="container team">
          <div class="row mt-2 mb-2 justify-content-center">
            {CoreTeam.map(person => (
              <Card member={person}></Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
