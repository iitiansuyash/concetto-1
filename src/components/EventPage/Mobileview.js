import React, { Component, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../EventDetail/Styles.css";
import { Link } from "react-router-dom";
import DepartmentEvent from "./DepartmentEvent";
import ClubEvent from "./ClubEvent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Header from "../Header";

const styles = theme => ({
  mobileTab: {
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  tabRoot: {
    minWidth: "50%",
    textTransform: "initial",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 255, 255, 0.637)",
    borderRadius: "10px",
    color: "white",
    "&:hover": {
      color: "#000",
      opacity: 1
    },
    "&$tabSelected": {
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      
      fontWeight: "bold"
    }
  },
  tabsRoot: {
    minWidth: "50%",
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tab: {
    width: "100%"
  },
  tabSelected: {}
});

function EventDetail(props) {
  const [events, setEvents] = useState(props.events)
  const [classes, setClasses] = useState(props.classes)
  const [active, setActive] = useState(props.active)
  const [departmentalEvents, setDepartmentalEvents] = useState([]);
  const [clubEvents, setClubEvents] = useState([]);

  useEffect(() => {
    setDepartmentalEvents(events.filter(event => event.event_type == "departmental"));
    setClubEvents(events.filter(event => event.event_type === "club"))
  }, [events]);

  return (
    <div className={classes.mobileTab}>
      <AppBar
        style={{
          backgroundColor: "#1b2d50",
          overflow: "hidden",
          zIndex: 10
        }}
        position="fixed"
      >
        <Tab>
          <Header />
        </Tab>
        <Tabs
          value={active}
          indicatorColor="#666666"
          textColor="secondary"
          className={classes.tab}
        >
          <Tab
            label="Club"
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            component={Link}
            to="club-events"
          />
          <Tab
            label="Department"
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            component={Link}
            to="department-events"
          />
        </Tabs>
      </AppBar>
      <br />
      {active === 1 && <ClubEvent events={clubEvents} />}
      {active === 0 && <DepartmentEvent events={departmentalEvents} />}
      <br />
    </div>
  );
}

export default withStyles(styles)(EventDetail);
