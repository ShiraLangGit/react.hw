import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMonthData } from "./calendarSlice";
import Day from "./Day";
import "./Calendar.css";

const Calendar = () => {
  const dispatch = useDispatch();
  const monthData = useSelector((state) => state.calendar.monthData);

  useEffect(() => {
    const now = new Date();

    dispatch(
      fetchMonthData({ month: now.getMonth() + 1, year: now.getFullYear() }),
    );
  }, [dispatch]);

  const daysArray = Object.entries(monthData);

  return (
    <div className="calendar-container">
      <div className="calendar-grid">
        {}
        {["א", "ב", "ג", "ד", "ה", "ו", "ש"].map((d) => (
          <div key={d} className="header-day">
            {d}
          </div>
        ))}

        {daysArray.map(([dateKey, data]) => (
          <Day key={dateKey} dateKey={dateKey} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
