import React, { Component } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const CardBody = styled.div`
  background: rgba( 255, 255, 255, 0.11 ) !important;
box - shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop - filter: blur(4px);
-webkit - backdrop - filter: blur(4px);
border - radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.18);
`
const CardImageBody = styled.div`
  height: 200px;
`
const CardImage = styled.img`
  opacity: 0.7;
`
const CardTitle = styled.h2`
  color: cyan !important;
  letter-spacing: -1px;
  font-family: "Montessarat", sans-serif;
  font-size: 20px;
  text-align: center;
  height: 100px;
`

const CardDepartment = styled.p`
  color: #988d8d !important;
  letter-spacing: -1px;
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  font-weight: 300px;
  text-align: center;
`

class ClubEvent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        <Helmet>
          <title>Concetto club events</title>
          <meta
            name="description"
            content="Organized by the various clubs of IIT (ISM) Dhanbad, are the attraction of Concetto 2022. Having a special combination of management and technical prowess, club events provide a platform to budding entrepreneurs to showcase their skills and to prove their mettle among the very best in the field."
          />
          <meta
            name="keywords"
            content="club events concetto 2022, club event iit dhanbad, iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 22,Concetto 2022,Concetto 2k22,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto theme, Concetto techfest,Concetto tecnical fest, Concetto 2022-2020, Concetto tech fest 22,Concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <br />
        {events.map((event, id) => {
          return (
            <div className="cards">
              <CardBody className="card-item" key={event.name}>
                <Link
                  to={`club-events/${event.name.split(" ").join("-")}/about`}
                  style={{ textDecoration: "none" }}
                >
                  <CardImageBody className="card-image p-2">
                    <CardImage
                      src={`${event.img}`}
                      alt={event.name}
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded"
                      width="500"
                      height="500"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                  </CardImageBody>
                  <div className="card-info">
                    <CardTitle
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {event.name}
                    </CardTitle>
                    <p style={{ color: "green", marginBottom: "10px" }}>
                      {event.prizes}
                    </p>
                    <CardDepartment>{event.club}</CardDepartment>
                  </div>
                </Link>
              </CardBody>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ClubEvent;
