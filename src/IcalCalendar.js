import React from "react";
import ical from "ical";
import Calendar from "./Calendar";

class IcalCalendar extends React.Component {
  state = {
    events: [],
    fetching: false
  };
  componentDidMount() {
    this.getEventsFromIcal();
  }

  getEventsFromIcal() {
    this.setState({ fetching: true });
    const icalLink =
      "http://localhost:9001/?url=https://www.airbnb.com/calendar/ical/17698756.ics?s=8fdc78ad6b57126773956501b189d121";
    // const icalLink =
    //   "https://www.airbnb.com/calendar/ical/17698756.ics?s=8fdc78ad6b57126773956501b189d121";
    fetch(icalLink)
      .then(d => d.json())
      .then(data => {
        // console.log({ data });
        const icalData = ical.parseICS(data.data);
        const _events = Object.keys(icalData).reduce((prev, curr) => {
          if (icalData[curr].type === "VEVENT") {
            return prev.concat([{ ...icalData[curr], bgColor: "red" }]);
          }
          return prev;
        }, []);

        console.log({ _events });
        this.setState({ events: _events, fetching: false });
      })
      .catch(err => {
        this.setState({ fetching: false });
      });
  }
  render() {
    const { fetching, events } = this.state;
    return fetching ? (
      <div>Fecthing ..... </div>
    ) : (
      <div className="">
        <Calendar events={events} />
      </div>
    );
  }
}

export default IcalCalendar;
