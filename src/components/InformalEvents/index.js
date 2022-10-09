import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Header";
class InformalEvents extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { Informals } = this.props;
    return (
      <div>
        <Helmet>
          <title>Concetto Informals</title>
          <meta
            name="description"
            content="Concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of workshops with the best in the business so that our participants feel lucid while competing with technical brilliance."
          />
          <meta
            name="keywords"
            content="informals iit ism dhanbad techfest, iit dhanbad techfest, iit dhanbad informals, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px"
          }}
          className="title"
        >
          INFORMAL EVENTS
        </h1>
        <div className="container">
          {Informals.map((event, id) => {
            return (
              <div className="cards">
                <div className="card-item" key={event.name}>
                  <Link
                    to={`informal-events/${event.name
                      .split(" ")
                      .join("-")}/about`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card-image">
                      <img
                        src={`${event.img}`}
                        alt={event.name}
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500"
                        height="500"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      />
                    </div>
                    <div className="card-info">
                      <h2
                        className="card-title"
                        style={{ textTransform: "uppercase" }}
                      >
                        {event.name}
                      </h2>
                      <p style={{ color: "green", marginBottom: "10px" }}>
                        {event.prizes}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default InformalEvents;
