import React from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "./calendarSlice";

const Day = ({ dateKey, data }) => {
  const dispatch = useDispatch();

  const dayOfMonth = new Date(dateKey).getDate();

  const handleShowEvents = () => {
    if (data.events.length > 0) {
      alert(data.events.join("\n"));
    } else {
      alert("אין אירועים ביום זה");
    }
  };

  const handleAddEvent = () => {
    const text = prompt("הכנס תיאור לאירוע:");
    if (text) {
      dispatch(addEvent({ date: dateKey, eventText: text }));
    }
  };

  return (
    <div className="day-box">
      <div className="gregorian-date">{dayOfMonth}</div>
      <div className="hebrew-date">{data.hebrew}</div>
      <div
        className="event-count"
        onClick={handleShowEvents}
        style={{ cursor: "pointer" }}
      >
        אירועים: {data.events.length}
      </div>
      <button onClick={handleAddEvent}>הוסף אירוע</button>
    </div>
  );
};

export default Day;
