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
            content={`Organized by ${event.is_club && event.club
                ? event.club + " club "
                : event.dept + " department "
              } of IIT (ISM) Dhanbad, during Concetto 2019. ${(!event.description ? event.about : "") + event.description
              }
            } `}
          />
          <meta
            name="keywords"
            content={`details of ${event.name} concetto , details of ${event.name
              } , ${event.name} 2019 details , ${event.is_club ? event.club : event.dept
              } concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>
        <StyledText>
          {event.description.split(";").map((sen) => (
            <React.Fragment>
              {sen}
              <br />
            </React.Fragment>
          ))}
        </StyledText>
        <StyledText>
          {event.fee ? (
            <React.Fragment>
              <br />
              Participation fees &nbsp; : &nbsp; &#8377; {event.fee} /- per{" "}
              {event.is_team ? " team " : " person "}
            </React.Fragment>
          ) : (
            ""
          )}
        </StyledText>
        <StyledText>
          {event.pdf ? (
            <React.Fragment>
              <br />
              For detailed description, refer the{" "}
              <a href={event.pdf}>document</a>
            </React.Fragment>
          ) : (
            ""
          )}
        </StyledText>
        <br />
        <StyledText>
          {event.admins ? (
            <React.Fragment>
              {" "}
              For any queries, feel free to contact :
              <br />
              <ul>
                {event.admins.map((admin, id) => (
                  <li key={id.toString()}>{admin}</li>
                ))}
              </ul>
            </React.Fragment>
          ) : (
            ""
          )}
        </StyledText>
      </div>
    );
  }
}

export default Details;
