import React, { useState, useEffect } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

function Mobileview(props) {
  console.log(props)
  const [event, setEvent] = useState(props.event);

  const convertTimestamp = (timestamp) => {
    let myDate = new Date(timestamp).toLocaleString("en-us", { timeZone: "Asia/Kolkata" })
    return myDate;
  }

  return (
    <div>
      <ExpansionPanel square expandIcon={<ExpandMoreIcon />}>
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{ backgroundColor: "#666666" }}
        >
          <div
            className="btn btn-event btn-2 active-bottom"
            style={{ marginLeft: "32%" }}
          >
            ABOUT
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {" "}
            {` About : ${event.summary}`}
            <br />
            <br />
            {`${event.presented_by == "club"
              ? " CLUB  :  " + event.presented_by
              : " DEPARTMENT  :  " + event.presented_by
              }`}
            <br />
            <br />
            {`Registration ends : ${convertTimestamp(event.register_timestamp)}`}
            <br />
            <br />
            {`Event Duration : ${convertTimestamp(event.start_timestamp)} - ${convertTimestamp(event.end_timestamp)}`}
            <br />
            <br />
            {`Venue : ${event.venue}`}

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square>
        <ExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          style={{ backgroundColor: "#666666" }}
        >
          <div
            className="btn btn-event btn-2 active-bottom"
            style={{ marginLeft: "32%" }}
          >
            DETAILS
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {event.details}
            <br />
            <br />
            {event.brochure_link ? (
              <React.Fragment>
                <br />
                For detailed description, refer the{" "}
                <a href={event.brochure_link}>document</a>
              </React.Fragment>
            ) : (
              ""
            )}{" "}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square>
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          style={{ backgroundColor: "#666666" }}
        >
          <div
            className="btn btn-event btn-2 active-bottom"
            style={{ marginLeft: "32%" }}
          >
            REGISTER
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ paddingLeft: "35%" }}>
          {event.register_link ? (
            <a href={event.register_link} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-primary btn-lg">
                REGISTER
              </button>
            </a>
          ) : (
            "No registration required for this event."
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Mobileview;
