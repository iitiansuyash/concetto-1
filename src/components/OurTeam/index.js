import React, { useState, useEffect } from "react";
import Header from "../Header";
import Card from "./Card";
import "./styles.css";
import { Helmet } from "react-helmet";
import Footer from "../Footer";

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

export default function OurTeam() {
  const [width, setWidth] = useState(window.innerWidth);
  // const [isCoreActive, setIsCoreActive] = useState(true);
  const [coreTeam, setCoreTeam] = useState([]);
  // const [developers, setDevelopers] = useState([
  //   {
  //     "id": 1,
  //     "name": "Bhimesh Agrawal",
  //     "image": "https://avatars.githubusercontent.com/u/65838772?v=4",
  //     "designation": "Frontend Developer",
  //     "linkedin": "https://www.linkedin.com/in/bhimesh-agrawal/",
  //     "contact": "9414614793"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Suyash Suryavanshi",
  //     "image": "",
  //     "designation": "Frontend Developer",
  //     "linkedin": "https://www.linkedin.com/in/suyash-suryavanshi-1b020a203/",
  //     "contact": "9001662144"
  //   },
  // ])

  useEffect(() => {
    fetch("https://admin.concetto.in/organisingteammembers/", { mode: 'cors' }).then(res => res.json()).then(data => setCoreTeam(data));
  }, []);


  return (
    <div className="team-page">
      <Helmet>
        <title>Concetto Team</title>
        <meta
          name="description"
          content="Concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Meet the core-team and developers of Concetto here."
        />
        <meta
          name="keywords"
          content="iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 22,Concetto 2022,Concetto 2k22,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto core-team, Concetto developers, Concetto techfest,Concetto tecnical fest, Concetto 2022-2023, Concetto tech fest 22,Concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
        />
      </Helmet>
      <Header />

      {/* <div className={classes.mobileTab}>
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
              label="Core Team"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              component={Link}
              to="core-team"
            />
            <Tab
              label="Developers"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              component={Link}
              to="developers"
            />
          </Tabs>
        </AppBar>
        <br />
        {active === true && <CardList members={coreTeam} />}
        {active === false && <CardList members={developers} />}
        <br />
      </div> */}

      <br />
      <br />
      {width > 486 ? (
        <h2 align="center" className="title highlighted">
          CORE TEAM
        </h2>
      ) : (
        <h2 align="center" className="highlighted">
          OUR TEAM
        </h2>
      )
      }
      <br />
      <div class="container team">
        <div class="row mt-2 mb-2 justify-content-center">
          {coreTeam.map(person => (
            <Card member={person}></Card>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div >
  );
}