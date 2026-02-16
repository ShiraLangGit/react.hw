import React from "react";
import { useSelector } from "react-redux";
import Calendar from "../calendar/Calendar";
import "./App.css";

const App = () => {
  const monthData = useSelector((state) => state.calendar.monthData);

  const getDisplayDate = () => {
    const keys = Object.keys(monthData);
    if (keys.length === 0) return "טוען נתונים...";
    const firstDate = new Date(keys[0]);
    return firstDate.toLocaleDateString("he-IL", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="app-container">
      {" "}
      {}
      <h1>לוח שנה עברי</h1>
      <h2>{getDisplayDate()}</h2>
      <hr />
      <Calendar />
    </div>
  );
};

export default App;
