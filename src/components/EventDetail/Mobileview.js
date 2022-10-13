import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import rule_book from "./RuleBook";

class Mobileview extends Component {
  render() {
    const { event } = this.props;
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
              {` About : ${event.details}`}
              <br />
              <br />
              {`${event.presented_by == "club"
                ? " CLUB  :  " + event.presented_by
                : " DEPARTMENT  :  " + event.presented_by
                }`}
              <br />
              <br />
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
              {event.description.split(";").map(sen => (
                <React.Fragment>
                  {sen}
                  <br />
                </React.Fragment>
              ))}
              {event.fee ? (
                <React.Fragment>
                  <br />
                  <br />
                  Participation fees &nbsp; : &nbsp; &#8377; {event.fee} /- per{" "}
                  {event.is_team ? " team " : " person "}
                </React.Fragment>
              ) : (
                ""
              )}
              <br />
              {event.pdf ? (
                <React.Fragment>
                  <br />
                  For detailed description, refer the{" "}
                  <a href={event.pdf}>document</a>
                </React.Fragment>
              ) : (
                ""
              )}{" "}
              {event.admins ? (
                <React.Fragment>
                  {" "}
                  <br />
                  <br />
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
              RULES
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <ul>
                {event.rules
                  ? event.rules.split(";").map(str => <li>{"  " + str}</li>)
                  : rule_book({ link: event.pdf })}{" "}
              </ul>
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
            {event.link ? (
              <a href={event.link} target="_blank" rel="noopener noreferrer">
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
}

export default Mobileview;
