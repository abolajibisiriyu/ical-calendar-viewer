import React from "react";
import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";

import "react-big-calendar-like-google/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Calendar = ({ events }) => (
  <div style={{ height: "500px" }}>
    <BigCalendar
      events={events}
      startAccessor="start"
      endAccessor="end"
      titleAccessor="summary"
    />
  </div>
);

export default Calendar;
