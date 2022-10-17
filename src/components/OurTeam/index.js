import React, { useState, useEffect } from "react";
import Header from "../Header";
import Card from "./Card";
import "./styles.css";
import { Helmet } from "react-helmet";

export default function OurTeam() {
  const [width, setWidth] = useState(window.innerWidth)
  const [coreTeam, setCoreTeam] = useState([]);

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
    </div >
  );
}