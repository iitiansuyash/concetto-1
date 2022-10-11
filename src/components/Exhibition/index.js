import React, { Component } from "react";
import Header from "../Header";
import "./style.css";
import { Exhibitions } from "../../data/Exhibitions";
import { Helmet } from "react-helmet";

class Exhibition extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="bg-gradient">
        <Helmet>
          <title>Concetto Exhibitions</title>
          <meta
            name="description"
            content="Concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of Exhibitions with the best in the business so that our participants feel lucid while competing with technical brilliance."
          />
          <meta
            name="keywords"
            content="wingfotech, iit ism dhanbad techfest, iit dhanbad techfest, iit dhanbad Exhibitions, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Exhibitions,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "60px",
            color: "white",
            fontSize: "52px",
            fontFamily: "'Montserrat', sans-serif"
          }}
          className="title"
        >
          Exhibitions
        </h1> ̰
        <div className="container">
          {Exhibitions.map((Exhibition, id) => (
            <React.Fragment key={id.toString()}>
              <hr
                class="featurette-divider"
                style={id !== 0 ? { margin: "2rem" } : null}
              />
              <div class="row featurette">
                <div
                  class={"col-md-5 " + (id % 2 === 0 ? "order-md-2" : "")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                  <img
                    src={Exhibition.img}
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded shadow"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    aria-label="Placeholder: 500x500"
                    alt={Exhibition.name}
                  ></img>
                </div>
                <div class={"col-md-7 glassCard " + (id % 2 === 0 ? "order-md-1" : "")}>
                  <h2
                    class="featurette-heading"
                    align="center"
                  >
                    {Exhibition.name}
                    {/* <br />
                    <span class="text-muted">Manthan</span> */}
                  </h2>
                  {Exhibition.details.split(";").map(sentence => (
                    <p className="featurette-text">{sentence}</p>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
          <br />
        </div>
      </div>
    );
  }
}

export default Exhibition;
