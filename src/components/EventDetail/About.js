import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  text-align: center;
`

class About extends Component {
  render() {
    const { event } = this.props;
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
            content={`Organized by ${event.is_club
              ? event.club + " club "
              : event.dept + " department "
              } of IIT (ISM) Dhanbad, during Concetto 2019. ${(!event.about
                ? event.description
                : "") + event.about}
            } `}
          />
          <meta
            name="keywords"
            content={`${event.name} concetto , ${event.name} , ${event.name
              } 2022   , ${event.is_club ? event.club : event.dept
              } concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>{" "}
        <StyledText>{`${(!event.about ? event.description : "") +
          "\n " +
          event.about} \n `}
        </StyledText>
        <br />
        <StyledText>{`${event.is_club && event.club
          ? " CLUB  :  " + event.club
          : event.dept
            ? "  DEPARTMENT  :  " + event.dept
            : ""
          }`}
        </StyledText>
        <br />
        <br />
        <StyledText><i class="fa fa-calendar"></i>&nbsp;{" "}
          {event.name === "Bizathon"
            ? " Day 1 : 10:00-18:00 and 21:00-12:00 Next Day and Day 2 : 11:00-15:00"
            : event.name === "CodeYaan 1.0"
              ? " Thursday : 22:00-12:30"
              : event.name === "PUBG"
                ? " PUBG-solo:- 17/10/2019 and PUBG-squad:- 18/10/2019"
                : `  ${day1 ? " Day " + day1 + " : " + timings[0] : " Coming Soon "
                } ${day2
                  ? `${day1 === day2 ? " and " : " and Day " + day2}` +
                  " : " +
                  timings[1]
                  : " "
                } ${event.finals ? ` | Finals : ${event.finals}` : ""}`}</StyledText>
        {event.name === "Capture the flag" ? (
          <p>
            <br />
            Enter into the contest &nbsp;
            <a
              href="https://www.hackerrank.com/clctf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default About;
