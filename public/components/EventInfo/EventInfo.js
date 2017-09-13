import React from "react";

require("./EventInfo.css");

const EventInfo = ({ events }) => {
  let formattedEvents = events.map(event => {
    console.log(event)
    return (
      <li className="info-card" key={event.id}>
        <div className="info-date">
          <h5>{event.date}</h5>
        </div>
        <img className="info-img" src={event.photo} />
        <div className="info-desc">
          <h2>
            {event.title}
          </h2>
          <p>
            {event.desc}
          </p>
        </div>
      </li>
    );
  });
  return (
    <ul className="info-cont">
      {formattedEvents}
    </ul>
  );
};

export default EventInfo;
