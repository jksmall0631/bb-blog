import React from "react";
import { withRouter } from "react-router-dom";

require("./EventInfo.css");

const EventInfo = ({ events, removeEntry, location }) => {
  let formattedEvents = "Coming Soon";
  if(events.length > 0) {
    formattedEvents = events.map(event => {
      return (
        <li className="info-card" key={event.id}>
          <div className="info-date">
            <h5>
              {event.date}
            </h5>
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
          {location.pathname === "/protected"
          ? <button
            className="delete"
            onClick={e => {
              e.stopPropagation();
              removeEntry(event.id);
            }}
            >
              ｘ
            </button>
            : ""}
          </li>
        );
      });
  }
  
  return (
    <ul className="info-cont">
      {formattedEvents}
    </ul>
  );
};

export default withRouter(EventInfo);
