import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  text-align: center;
`;

class Details extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="container" style={{ display: "block", width: "80vw" }}>
        <Helmet>
          <title>{event.name}</title>
          <meta
            name="description"
            content={`Organized by ${event.event_type === "club"
              ? event.presented_by + " club "
              : event.presented_by + " department "
              } of IIT (ISM) Dhanbad, during Concetto 2019. ${event.details}`}
          />
          <meta
            name="keywords"
            content={`details of ${event.name} concetto , details of ${event.name
              } , ${event.name} 2019 details , ${event.presented_by} concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>
        <StyledText>
          {event.details}
        </StyledText>
        <StyledText>
          {event.brochure_link ? (
            <React.Fragment>
              <br />
              For detailed description, refer the{" "}
              <a href={event.brochure_link}>document</a>
            </React.Fragment>
          ) : (
            ""
          )}
        </StyledText>
        <br />
      </div>
    );
  }
}

export default Details;
