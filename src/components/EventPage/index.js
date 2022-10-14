import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../EventDetail/Styles.css";
import DepartmentEvent from "./DepartmentEvent";
import { Link } from "react-router-dom";
import ClubEvent from "./ClubEvent";
import Mobileview from "./Mobileview";
import HomeHeader from "../HomeHeader";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  verticalTab: {
    display: "flex",
    flexDirection: "column",
    width: "20vw !important",
    backgroundColor: "rgba(97, 97, 97, 0.1)",
    position: "fixed",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  eventsCard: {
    marginLeft: "40vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      display: "none"
    }
  }
});

function EventDetail(props) {
  const [events, setEvents] = useState(props.events)
  const [classes, setClasses] = useState(props.classes)
  const [active, setActive] = useState(props.active)
  const [departmentalEvents, setDepartmentalEvents] = useState([]);
  const [clubEvents, setClubEvents] = useState([]);


  useEffect(() => {
    console.log(events);
    setDepartmentalEvents(events.filter(event => event.event_type == "departmental"));
    setClubEvents(events.filter(event => event.event_type === "club"))
  }, [events]);

  return (
    <div className="gradientBg">
      <div className={classes.root}>
        <HomeHeader />
        <div className={classes.verticalTab}>
          <div>
            <NavLink to="home" exact strict>
              <img
                src="../images/concettoLogo.webp"
                className="img-fluid"
                alt={" "}
              />
            </NavLink>
          </div>
          <div className="btnFlex">
            <Link to="club-events">
              <button style={{ "fontFamily": "'Noto Sans',sans-serif" }}
                className={
                  "btn btn-event btn-2 " +
                  (active === 1 ? "active-bottom" : "")
                }
              >
                CLUB
              </button>
            </Link>
            <Link to="department-events">
              <button style={{ "fontFamily": "'Noto Sans',sans-serif" }}
                className={
                  "btn btn-event btn-2 " +
                  (active === 0 ? "active-bottom" : "")
                }
              >
                DEPARTMENT
              </button>
            </Link>
          </div>
        </div>
        <br />
        <div className={classes.eventsCard}>
          {active === 0 && <DepartmentEvent events={departmentalEvents} />}
          {active === 1 && <ClubEvent events={clubEvents} />}
        </div>
        {window.innerWidth < 760 ? (
          <Mobileview events={events} active={active} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(EventDetail);
