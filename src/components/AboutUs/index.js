import React, { Component } from "react";
import Header from "../Header";
import "./styles.css";
import { Helmet } from "react-helmet";
import CSREventDisplay from "./CSREventDisplay";
import { Card, CardImg, CardBody, CardHeader, Button } from "reactstrap";
class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="theme-page">
        <Helmet>
          <title>Concetto</title>
          <meta
            name="description"
            content="Concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Know about the theme of this year - To the moon and back."
          />
          <meta
            name="keywords"
            content="to the moon and back, iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto theme, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "60px",
            color: "white",
            fontSize: "52px",
            fontFamily: "'Montserrat', sans-serif"
          }}
          className="title"
        >
          About Us
        </h1>
        <div className="container">
          <div className="row container">
            <div className="col-12 col-md-6 opaque ">
              <br />
              The 3 day technical fiesta of IIT(ISM) - "CONCETTO" is one of the
              largest Techno-management fest in Eastern India with a massive
              participation of more than 2000 participants from 300 different
              colleges and institutes, who stalk the grounds of ISM to prove
              their technical expertise. Encompassing the various boundaries of
              science and technology, Concetto is there with 44 events in all
              providing a platform to shoot the "TECHNICAL ME" of everyone.
              Apart from the various Robotics and Coding events, Concetto calls
              all you budding entrepreneurs to showcase your innovative business
              skills. Several departmental events of petroleum engineering,
              mining engineering and mechanical engineering are all lined up as
              well. At the same time, hone your skills by joining our workshops
              taken by the eminent personalities in the various fields of
              science.
              <br />
              Packed with this plethora of technical events - competitions,
              workshops, guest lectures, paper meet and exhibition, Concetto is
              every bit what an engineering lad aspires of. Prizes worth one
              million, loads of goodies and lots of lots of fun are all that
              await one who becomes a witness to this legendary event.
            </div>
            <div
              className="col-12 col-md-6"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <Card
                body
                inverse
                style={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderColor: "#333"
                }}
              >
                <CardImg
                  top
                  width="100%"
                  src="/images/CAMPUS-MAP.jpg"
                  alt="IIT (ISM) Campus Map"
                />
                <br />
                <CardBody style={{ paddingLeft: "43%" }}>
                  <a href="/images/CAMPUS-MAP.jpg" target="_blank">
                    <Button
                      type="button"
                      className="themedButton"
                      style={{ margin: "auto" }}
                    >
                      <i className="fa fa-eye" /> View
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
          <br />
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "120px",
            color: "white",
            fontSize: "52px",
            fontFamily: "'Montserrat', sans-serif"
          }}
          className="title"
        >
          Our Theme
        </h1>
        <div className="container opaque">
          <br />
          Our minds hold a world of endless possibilities, a world in which we can do whatever we imagine – fight space monsters, explore the oceans, fly a plane, design a city, jump into the universe of our favourite movie franchise.AR and VR give us the chance to live out these dreams.Augmented reality is a technology that enhances your surroundings by adding digital elements to a live view – possible through the camera of your smartphone!Virtual reality holds the power to immerse you in a simulated world of your choice – a world you can explore and interact with.This theme of Concetto ’22 serves as a reminder that imagination is our only limit, and that technology holds the key to shaping our future.Concetto ’22 has informative workshops, and a roster of compelling events –there’s an event for an enthusiast of every technical field!Build robots, code your heart out, create new designs, trade virtual money, test your wits in quizzes, and a lot more!Concetto ’22 returns, bigger and bolder than ever before, and is waiting for you tech geeks out there! Boasting of a huge roaster of exhilarating and
          engaging events, along with promises to be grander, greater, more
          splendid and glorious than ever before IIT ISM presenting{" "}
          <b>CONCETTO: REALITY BEYOND VISION</b>.
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "120px",
            color: "white",
            fontSize: "52px",
            fontFamily: "'Montserrat', sans-serif"
          }}
          className="title"
        >
          Message from the Convener
        </h1>
        <div className="container opaque">
          <br />
          Greetings! The past two years have been tough for everyone. As the saying goes, "Tough times don't last long but tough people do this tough time also challenged everyone to fight and bring out their best. To keep alive the thrill of innovation and the spirit of technological challenges, I am pleased to announce that the Indian Institute of Technology (SM) Dhanbad is organizing its flagship techno-management fest, "CONCETTO 22", starting on 21st October 2022. The three-day fest organized by the institute's students aims to disseminate individual skills and mutual exchange of scientific knowledge through a series of technical and management events and seminars.
          <br />
          <br />
          To bridge the digital and physical worlds, this year's Concetto is themed on the concept of AR/VR with the tagline Reality Beyond Vision" AR uses a real-world setting, while VR is entirely virtual This year, we plan to make the event grander by introducing new technical challenges and adding a new dimension to Concetto
          <br />
          <br />
          The participation of the engineering and science departments of the institute and the students from other engineering institutes makes this fest an arena of innovation and creativity. This fest provides all young budding minds space to demonstrate their talent and grit
          <br />
          <br />
          Further, talks delivered by eminent personalities and scientists during the fest also inspire and encourage all students to strive for greater success in life. I acknowledge all the efforts made by students, faculty members, and officials toward its successful execution. I also take this opportunity to express my gratitude to all sponsors, advertisers, and media associated with this grand event
          <br />
          We aim to take the next step towards the goal of technological innovation through
          <br />
          <br />
          Concetto 2022
          <br />
          <br />
          I wish all the best to the Participants, Colleges, Event Organizers and Contributors
          <br />
          Best Regards
          <div className="col-12 p-5">
            <img
              style={{
                display: "block",
                position: "relative",
                margin: "auto"
              }}
              className="rounded-circle"
              src="https://people.iitism.ac.in/~download/images/employee/1004/1004.jpg"
              alt={"Prof. Ajit Kumar"}
              height="220"
              width="220"
            />
            <h5 align="center">
              Prof. Ajit Kumar
              <br />
              Convener, Concetto'22
              <br />
              Assistant Professor
              <br />
              Department of Mechanical Engineering
              <br />
            </h5>
          </div>
        </div>
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "120px",
            color: "white",
            fontSize: "52px",
            fontFamily: "'Montserrat', sans-serif"
          }}
          className="title"
        >
          CSR EVENTS
        </h1>
        <CSREventDisplay />
      </div>
    );
  }
}

export default AboutUs;
