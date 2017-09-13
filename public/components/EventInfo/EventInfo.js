import React from "react";

const EventInfo = ({ events }) => {
  let formattedEvents = events.map(event => {
    return (
      <li key={event.id}>
        <h4>{event.title}</h4>
      </li>
    )
  })
  return (
    <ul>
      {formattedEvents}
    </ul>
  )
}

export default EventInfo;
