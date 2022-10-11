import React from "react";
import { CSREvents } from "../../data/CSREvents";

function CSREventDisplay(props) {
  return (
    <div className="container">
      {CSREvents.map((event, id) => (
        <div className="row" key={id.toString()}>
          <div
            className={"col-12 col-lg-3 " + (id % 2 === 0 ? " order-lg-2" : "")}
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <img
              src={event.img}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded shadow-lg"
              width="350"
              height="350"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              aria-label="Placeholder: 350x350"
              alt={event.name}
            />
          </div>
          <div
            className={
              "col-12 col-lg-6 col-lg-9" + (id % 2 === 0 ? " order-lg-1" : "")
            }
          >
            <div class="wrapper">
              <a
                href={event.link}
                class="meetup"
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.name}
              </a>
              <h5 class="group">
                {event.description.split(";").map(text => (
                  <React.Fragment>
                    <br />
                    {text}
                    <br />
                  </React.Fragment>
                ))}
              </h5>
              <h5 class="group">
                <React.Fragment>
                  <br />
                  {event.duration}
                  <br />
                  {event.venue}
                </React.Fragment>
              </h5>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default CSREventDisplay;
