import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Header";
import "./styles.css";
class Sponsors extends Component {
  constructor(props) {
    super(props);
    const { sponsors } = props;
    this.state = {
      titles: sponsors.filter(sponsor => sponsor.is_title),
      major: sponsors.filter(sponsor => sponsor.cat === "Major Sponsors"),
      general: sponsors.filter(sponsor => sponsor.cat === "General Sponsors"),
      event: sponsors.filter(sponsor => sponsor.cat === "Event Sponsors"),
      travel: sponsors.filter(sponsor => sponsor.cat === "Travel Partner"),
      education: sponsors.filter(
        sponsor => sponsor.cat === "Education Partner"
      ),
      airlines: sponsors.filter(sponsor => sponsor.cat === "Airlines Partner"),
      media: sponsors.filter(sponsor => sponsor.cat === "Media Partner"),
      beverage: sponsors.filter(
        sponsors => sponsors.cat === "Beverage Partner"
      ),
      food: sponsors.filter(sponsors => sponsors.cat === "Food Partner"),
      entertainment: sponsors.filter(
        sponsors => sponsors.cat === "Entertainment Partner"
      ),
      coupon: sponsors.filter(sponsors => sponsors.cat === "Coupon Partner"),
      build: sponsors.filter(
        sponsors => sponsors.cat === "Build-a-bit Sponsors"
      )
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      titles,
      major,
      general,
      event,
      travel,
      education,
      airlines,
      media,
      beverage,
      food,
      entertainment,
      coupon,
      build
    } = this.state;
    // console.log(window.innerWidth);
    return (
      <div className="team-page">
        <Helmet>
          <title>Concetto Sponsors</title>
          <meta
            name="description"
            content="Concetto is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Meet the core-team and developers of Concetto here."
          />
          <meta
            name="keywords"
            content="iit ism dhanbad techfest, iit dhanbad techfest,Concetto,Concetto 19,Concetto 2019,Concetto 2k19,Concetto IIT,Concetto IIT (ISM) DHANBAD,Concetto IIT ISM, Concetto core-team, Concetto developers, Concetto techfest,Concetto tecnical fest, Concetto 2019-2020, Concetto tech fest 19,Concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <br />
        {/* <h2 align="center" style={{ color: "black" }}>
              OUR SPONSORS{" "}
          </h2> */}

        <br />

        <div>
          <h1
            style={{
              textAlign: "center",
              marginTop: "-20px"
            }}
            className="title-sponser"
          >
            TITLE SPONSOR
          </h1>
          <div className="container" style={{ paddingLeft: "auto" }}>
            {titles.map((title, id) => (
              <React.Fragment key={id.toString()}>
                <div
                  class={"col-12  offset-md-3 col-md-6 "}
                  // style={{
                  //   paddingLeft: 'auto',
                  //   display: "flex",
                  //   alignItems: "center",
                  //   flexWrap: "wrap"
                  // }}
                >
                  <a
                    href={title.link}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={title.img}
                      class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      aria-label="Placeholder: 500x500"
                      alt={"Loading..."}
                      // style={{
                      //   display: "block",
                      //   marginLeft: "auto",
                      //   marginRight: "auto",
                      //   width: "40%"
                      // }}
                    />
                  </a>
                </div>
              </React.Fragment>
            ))}
          </div>
          <br />
          {/* {window.innerWidth > 810 ? ( */}
          <React.Fragment>
            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {major[1].cat}
            </h1>

            <div className="container">
              {major.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-1 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {general[1].cat}
            </h1>

            <div className="container">
              {general.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {event[1].cat}
            </h1>

            <div className="container">
              {event.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-1 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {travel[0].cat}
            </h1>

            <div className="container">
              {travel.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-4 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {education[0].cat}
            </h1>

            <div className="container">
              {education.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-4 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {airlines[0].cat}
            </h1>

            <div className="container">
              {airlines.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-4 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {media[0].cat}
            </h1>

            <div className="container">
              {media.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-4 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {beverage[0].cat}
            </h1>

            <div className="container">
              {beverage.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-4 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {food[1].cat}
            </h1>

            <div className="container">
              {food.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {entertainment[0].cat}
            </h1>

            <div className="container">
              {entertainment.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 offset-lg-4 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {coupon[1].cat}
            </h1>

            <div className="container">
              {coupon.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={"col-12 col-md-6 col-lg-4 "}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <h1
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "black"
              }}
              className="title"
            >
              {build[1].cat}
            </h1>

            <div className="container">
              {build.map((title, id) => (
                <React.Fragment key={id.toString()}>
                  <div
                    class={
                      id === 6
                        ? "col-12  offset-md-3 col-md-6 "
                        : "col-12 col-md-6 col-lg-4 "
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href={title.link === "" ? "#/sponsors" : title.link}
                      target={title.link === "" ? "" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <img
                        src={title.img}
                        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="400"
                        height="400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                        alt={"Loading..."}
                      />
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
          {/* : ( */}
          {/* "" */}
          {/* )} */}
        </div>
      </div>
    );
  }
}
export default Sponsors;
