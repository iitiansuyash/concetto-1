import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  text-align: center;
`

export default function About(props) {

  const [event, setEvent] = useState(props.event);

  const convertTimestamp = (timestamp) => {
    let myDate = new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    console.log(myDate);
    return myDate;
  }

  return (
    <div className="container" style={{ display: "block", width: "80vw" }}>
      <Helmet>
        <title>{event.name}</title>
        <meta
          name="description"
          content={`Organized by ${event.event_type == "club"
            ? event.presented_by + " club "
            : event.presented_by + " department "
            } of IIT (ISM) Dhanbad, during Concetto 2019. ${event.details} `}
        />
        <meta
          name="keywords"
          content={`${event.name} concetto , ${event.name} , ${event.name
            } 2022   , ${event.presented_by}
            concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 22,Concetto 2022,Concetto 2k22,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 22,Concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
        />
      </Helmet>{" "}
      <StyledText>
        {event.summary}
      </StyledText>
      <StyledText>
        {`${event.event_type === "club"
          ? " CLUB  :  " + event.presented_by
          : "  DEPARTMENT  :  " + event.presented_by
          }`}
      </StyledText>
      <br />
      <StyledText>
        {`Registration ends : ${convertTimestamp(event.register_timestamp)}`}
      </StyledText>
      <StyledText>
        {`Event duration : ${convertTimestamp(event.start_timestamp)} - ${convertTimestamp(event.end_timestamp)}`}
      </StyledText>
      <StyledText>
        {`Venue : ${event.venue}`}
      </StyledText>
    </div>
  );
}