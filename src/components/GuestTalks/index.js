import React, { Component } from "react";
import { GuestTalks } from "../../data/GuestTalks";
import Header from "../Header";
import "./styles.css";
import styled from 'styled-components';
import { Helmet } from "react-helmet";

const Subtitle = styled.h3`
  text-align: center;
  margin-top: 40px;
  letter-spacing: -2px;
  color: white;
  font-size: 36px;
  font-family: "Moneterrat", sans-serif;
`
class GuestTalk extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Concetto Guest-Talks</title>
          <meta
            name="description"
            content="Concetto, the annual Techno-management fest of IIT(ISM), organizes a variety of workshops with the best in the business so that our participants feel lucid while competing with technical brilliance. Meet the guest coming for tech talks, here"
          />
          <meta
            name="keywords"
            content="Geeks-for-Geeks iit dhanbad, NASA iit dhanbad, NASA ism dhanbad, Chandrayan 2 iit ism, Chandrayan 2 iit dhanbad, Geeks-for-Geeks ism dhanbad, Geeks-for-Geeks iit ism, NASA iit ism, iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px"
          }}
          className="title"
        >
          GUEST TALKS
        </h1>
        <Subtitle>Coming Soon..</Subtitle>
        {/* <div className="container">
          {GuestTalks.map((talk, id) => (
            <div className="row" key={id.toString()}>
              <div
                className={
                  "col-12 col-lg-3 " + (id % 2 === 0 ? " order-lg-2" : "")
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                <img
                  src={talk.img}
                  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="350"
                  height="350"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: 350x350"
                  alt={talk.guest}
                />
              </div>
              <div
                className={
                  "col-12 col-lg-6 col-lg-9" +
                  (id % 2 === 0 ? " order-lg-1" : "")
                }
              >
                <div class="wrapper">
                  <h2 class="upper">{talk.designation}</h2>
                  <a href={talk.link} class="meetup">
                    {talk.guest}
                  </a>
                  <h5 class="group">
                    {talk.about.split(";").map(text => (
                      <React.Fragment>
                        {text}
                        <br />
                      </React.Fragment>
                    ))}
                  </h5>
                  <p class="details">
                    <span class="row">
                      <i class="fa fa-calendar fa-lg"></i>
                      <span class="row-item">
                        <time>{talk.time}</time>
                      </span>
                    </span>

                    <span class="row">
                      <i class="fa fa-map-marker fa-lg"></i>
                      <span class="row-item">
                        <strong>{talk.place}</strong>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}

export default GuestTalk;
