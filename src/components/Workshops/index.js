import React, { Component } from "react";
import Header from "../Header";
import { Workshop_list } from "../../data/Workshops";
import { Helmet } from "react-helmet";


class Workshops extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Concetto Workshops</title>
          <meta
            name="description"
            content="Concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of workshops with the best in the business so that our participants feel lucid while competing with technical brilliance."
          />
          <meta
            name="keywords"
            content="iit ism dhanbad techfest, iit dhanbad techfest, iit dhanbad workshops, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
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
          WORKSHOPS
        </h1>
        <div className="container">
          {Workshop_list.map((workshop, id) => (
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
                    src={workshop.img}
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    aria-label="Placeholder: 500x500"
                    alt={workshop.name}
                  ></img>
                </div>
                <div class={"col-md-7 " + (id % 2 === 0 ? "order-md-1" : "")}>
                  <h2
                    class="featurette-heading"
                    align="center"
                    style={{ color: "lightblue" }}
                  >
                    {workshop.name}
                    {/* <br />
                    <span class="text-muted">Manthan</span> */}
                  </h2>
                  {workshop.details.split(";").map(sentence => (
                    <p>{sentence}</p>
                  ))}
                  <p>
                    <a
                      href={workshop.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "lightblue" }}
                    >
                      Know more..
                    </a>
                  </p>
                  <p align="center">
                    <a
                      href={workshop.reg_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-primary text-center"
                      // style={{ marginLeft: "50%" }}
                      >
                        Register <i class="fa fa-arrow-circle-right"></i>
                      </button>
                    </a>
                  </p>
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

export default Workshops;
