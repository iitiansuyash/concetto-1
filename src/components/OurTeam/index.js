import React, { Component } from "react";
import Header from "../Header";
import { CoreTeam } from "../../data/CoreTeam";
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
            |{" "}
            <a
              className="title"
              style={{ color: "black" }}
              onClick={this.scrollToDevRef}
            >
              {" "}
              DEVELOPERS
            </a>{" "}
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
          <div class="row  mt-2 mb-2">
            {CoreTeam.map(person => (
              <div class="col-sm-6 col-lg-3 my-auto" id={person.name}>
                <div class="box shadow-sm p-4">
                  <div class="image-wrapper mb-3">
                    <img class="img-fluid" src={person.pic} alt={person.name} />
                  </div>
                  <div class="box-desc">
                    <h5>{person.name}</h5>
                    <p>
                      {person.post}
                      <br />
                      <a href={"tel:+91" + person.phone} className="phone-link">
                        <i className="fa fa-phone" />
                        &nbsp;{person.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="row mt-4" ref={this.devRef}>
            {DeveloperTeam.map(person => (
              <div class="col-sm-6 col-lg-3 my-auto" id={person.name}>
                <div class="box shadow-sm p-4">
                  <div class="image-wrapper mb-3">
                    <img class="img-fluid" src={person.pic} alt={person.name} />
                  </div>
                  <div class="box-desc">
                    <h5>{person.name}</h5>
                    <p>{person.post}</p>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href={person.fb}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={person.git}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-linkedin "></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
