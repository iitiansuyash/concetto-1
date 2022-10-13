import React, { Component } from "react";
import { Helmet } from "react-helmet";
class Register extends Component {
  render() {
    const { event } = this.props;
    return (
      <div
        className=" container text-center"
        style={{ display: "block", width: "80vw" }}
      >
        <Helmet>
          <title>{event.name}</title>
          <meta
            name="description"
            content={`Organized by ${event.event_type == "club"
              ? event.presented_by + " club "
              : event.presented_by + " department "
              } of IIT (ISM) Dhanbad, during Concetto 2019. ${event.details} Register for it here.`}
          />
          <meta
            name="keywords"
            content={`${event.name}  register concetto , register for ${event.name
              } , register for ${event.name} 2019, ${event.presented_by} concetto , iit ism dhanbad techfest, iit dhanbad techfest, Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>
        {event.register_link ? (
          <a href={event.register_link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-primary btn-lg">
              REGISTER
            </button>
          </a>
        ) : (
          "No registration required for this event."
        )}
      </div>
    );
  }
}

export default Register;
