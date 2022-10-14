import React, { useState, useEffect } from "react";
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
  letter-spacing: 1px;
  font-family: "Montserrat";
  font-size: 1.3rem;
  text-align: center;
  margin: 0.6em 0.2em;
  text-transform: uppercase;
  margin-top: 10px;
`

const CardDepartment = styled.p`
  color: #988d8d !important;
  letter-spacing: -1px;
  font-family: "Noto Sans", sans-serif;
  font-size: 0.65em;
  font-weight: 300px;
  margin: 10px;
  text-align: center;
`
const CardSummary = styled.p`
  font-size: 0.6em;
  margin: 0 10px;
  
`

function DepartmentEvent(props) {
  const [events, setEvents] = useState(props.events);

  useEffect(() => {
    setEvents(props.events);
  }, props.event);

  return (
    <div className="">
      <div className="container">
        <Helmet>
          <title>Concetto departmental events</title>
          <meta
            name="description"
            content="Organized by the Departments of IIT (ISM) Dhanbad, these events prove to be a different kind of challenge for the participants. Along with sound technical knowledge, they also check your proficiency in various fields of engineering. They make you think out of the box in problems associated with the respective fields."
          />
          <meta
            name="keywords"
            content="departmental events concetto 2019, department events, branch events iit ism, iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto theme, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <br />
        {events.map((event, id) => {
          return (
            <div className="cards">
              <CardBody className="card-item" key={event.name}>
                <Link
                  to={`department-events/${event.name
                    .split(" ")
                    .join("-")
                    }/about`}
                  style={{ textDecoration: "none" }}
                >
                  <CardImageBody className="card-image p-2">
                    <CardImage
                      src={event.image}
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
                    >
                      {event.name}
                    </CardTitle>
                    <CardSummary>
                      {event.summary}
                    </CardSummary>
                    <CardDepartment>{event.presented_by}</CardDepartment>
                  </div>
                </Link >
              </CardBody >
            </div >
          );
        })}
      </div >
    </div>
  );
}

export default DepartmentEvent;
