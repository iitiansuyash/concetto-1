import React, { Component } from "react";
import Home from "./Home";
import EventPage from "./EventPage";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import EventDetail from "./EventDetail";
import OurTeam from "./OurTeam";
import ComingSoon from "./ComingSoon";
import InformalEvents from "./InformalEvents";
import Workshops from "./Workshops";
import AboutUs from "./AboutUs";
import GuestTalk from "./GuestTalks";
import Exhibition from "./Exhibition";
import Sponsers from "./Sponsors";
import { Informals } from "../data/InformalEvents";
import { SponsorsList } from "../data/Sponsors";
import axios from 'axios';
import { object } from "prop-types";



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: false,
      events: [],
    };
    this.makeShowLogo = this.makeShowLogo.bind(this);
    this.hideLogo = this.hideLogo.bind(this);
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://admin.concetto.in/events/", {
        mode: 'no-cors',
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      })
      console.log(response)
      this.setState({
        events: response.data
      })
    } catch (error) {
      console.error(error);
    }
  }

  makeShowLogo() {
    const { header } = this.state;
    if (!header) this.setState({ header: true });
  }

  hideLogo() {
    const { header } = this.state;
    if (header) this.setState({ header: false });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.fetchData();
  }
  //   fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "GET",
  //     mode: "no-cors",
  //   }).then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       this.setState({
  //         events: json,
  //       });
  //     });
  // }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { events } = this.state;
    const EventWithNameAbout = ({ match }) => {
      let selectedEvent = events.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"about"} />;
    };
    const InformalWithNameAbout = ({ match }) => {
      let selectedEvent = Informals.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"about"} />;
    };
    const EventWithNameRules = ({ match }) => {
      let selectedEvent = events.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"rules"} />;
    };
    const InformalWithNameRules = ({ match }) => {
      let selectedEvent = Informals.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"rules"} />;
    };
    const EventWithNameDetails = ({ match }) => {
      let selectedEvent = events.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"details"} />;
    };
    const InformalWithNameDetails = ({ match }) => {
      let selectedEvent = Informals.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"details"} />;
    };
    const EventWithNameRegister = ({ match }) => {
      let selectedEvent = events.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"register"} />;
    };
    const InformalWithNameRegister = ({ match }) => {
      let selectedEvent = Informals.filter(
        event => event.name.split(" ").join("-") === match.params.eventName
      )[0];
      if (selectedEvent === undefined) {
        return <ComingSoon />;
      }
      return <EventDetail event={selectedEvent} active={"register"} />;
    };

    return (
      <div className="App">
        <Switch location={this.props.location}>
          zz{" "}
          <Route
            exact
            path="/home"
            component={() => (
              <Home makeShowLogo={this.makeShowLogo} hideLogo={this.hideLogo} />
            )}
          />
          <Route exact path="/our-team" component={() => <OurTeam />} />
          <Route exact path="/coming-soon" component={() => <ComingSoon />} />
          <Route exact path="/workshops" component={() => <Workshops />} />
          <Route exact path="/exhibitions" component={() => <Exhibition />} />
          <Route exact path="/about-us" component={() => <AboutUs />} />
          <Route exact path="/guest-talks" component={() => <GuestTalk />} />
          <Route exact path="/department-events" component={() => <EventPage events={events} active={0} />} />
          <Route exact path="/club-events" component={() => <EventPage events={events} active={1} />} />
          <Route
            exact
            path="/informal-events"
            component={() => <InformalEvents Informals={Informals} />}
          />
          <Route
            path="/department-events/:eventName/about"
            component={EventWithNameAbout}
          />
          <Route
            path="/department-events/:eventName/rules"
            component={EventWithNameRules}
          />
          <Route
            path="/department-events/:eventName/details"
            component={EventWithNameDetails}
          />
          <Route
            path="/department-events/:eventName/register"
            component={EventWithNameRegister}
          />
          <Route
            exact
            path="/department-events/:eventName"
            component={({ match }) => (
              <Redirect
                to={{
                  pathname: `/department-events/${match.params.eventName}/about`
                }}
              />
            )}
          />
          <Route
            path="/club-events/:eventName/about"
            component={EventWithNameAbout}
          />
          <Route
            path="/club-events/:eventName/rules"
            component={EventWithNameRules}
          />
          <Route
            path="/club-events/:eventName/details"
            component={EventWithNameDetails}
          />
          <Route
            path="/club-events/:eventName/register"
            component={EventWithNameRegister}
          />
          <Route
            exact
            path="/club-events/:eventName"
            component={({ match }) => (
              <Redirect
                to={{
                  pathname: `/club-events/${match.params.eventName}/about`
                }}
              />
            )}
          />
          <Route
            path="/informal-events/:eventName/about"
            component={InformalWithNameAbout}
          />
          <Route
            path="/informal-events/:eventName/rules"
            component={InformalWithNameRules}
          />
          <Route
            path="/informal-events/:eventName/details"
            component={InformalWithNameDetails}
          />
          <Route
            path="/informal-events/:eventName/register"
            component={InformalWithNameRegister}
          />
          <Route
            exact
            path="/informal-events/:eventName"
            component={({ match }) => (
              <Redirect
                to={{
                  pathname: `/informal-events/${match.params.eventName}/about`
                }}
              />
            )}
          />
          <Route
            path="/sponsors"
            component={() => <Sponsers sponsors={SponsorsList} />}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
