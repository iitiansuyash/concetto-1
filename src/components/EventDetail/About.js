import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  text-align: center;
`

export default function About() {
  const [event, setEvent] = useState(this.props);

  const timings = event.timing.split(";");
  let day1, day2;
  if (Math.floor(event.day / 10)) {
    day1 = Math.floor(event.day / 10);
    day2 = Math.floor(event.day % 10);
  } else {
    day1 = Math.floor(event.day % 10);
    day2 = 0;
  }
  return (
    <div className="container" style={{ display: "block", width: "80vw" }}>
      <Helmet>
        <title>{event.name}</title>
        <meta
          name="description"
          content={`Organized by ${event.event_type == "club"
            ? event.club + " club "
            : event.dept + " department "
            } of IIT (ISM) Dhanbad, during Concetto 2019. ${event.details} `}
        />
        <meta
          name="keywords"
          content={`${event.name} concetto , ${event.name} , ${event.name
            } 2022   , ${event.presented_by}
            concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
        />
      </Helmet>{" "}
      <StyledText>{event.details}
      </StyledText>
      <br />
      <StyledText>{`${event.event_type == "club"
        ? " CLUB  :  " + event.presented_by
        : "  DEPARTMENT  :  " + event.presented_by
        }`}
      </StyledText>
      <br />
      <br />
    </div>
  );
}