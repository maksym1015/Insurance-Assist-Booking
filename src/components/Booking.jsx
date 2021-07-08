import React, { useState } from "react";
import { Calendar } from "react-rainbow-components";
import TimePicker from "./TimePicker";
import TimeZone from "./TimeZone";
import { formatDate } from "../utils";

const Booking = ({ confirmClick, initialDate, timeSlots }) => {
  const [date, setDate] = useState(initialDate);
  const onChange = (date) => {
    setDate(date);
  };
  const spotDate = formatDate(date);
  const selectedDate = Object.keys(timeSlots).filter(
    (item) => item === spotDate
  );
  return (
    <div className='_1Bm6brdqaB _1qz0a4uwN4'>
      <div
        data-component='spotpicker'
        className='_30uoV3njfD b1P7SFgot4 _1n7iwH3DQJ'
      >
        <h2 className='azagJQlOpZ _1TIblCimGQ'>Select a Date &amp; Time</h2>
        <div className='_2jmGh1HtJv _1XO44EYYk1 _--8H0pY0pn'>
          <div
            data-component='spotpicker-dates'
            className='_2WKdni3y14 _2wzWP0QicO _1nJXzV3agT'
          >
            <div className='calendar k1wAD0GFi1'>
              <Calendar id='calendar-1' value={date} onChange={onChange} />
            </div>
            <TimeZone />
          </div>
          <div
            data-component='spotpicker-times'
            className='_1WAB_u6tgy _1K3AETiM0_ _19GgkHzXLz'
          >
            <div
              data-component='spotpicker-times-subtitle'
              className='_3vUmo3_KW8'
            >
              Schedule Policy Review
            </div>
            <div
              data-component='spotpicker-times-list'
              className='_31OiCICiBy _2BAWsZzdsR _2zxA_-5OZU'
            >
              <div data-component='spot-list' className='_2YFzZKJ3S2'>
                {timeSlots[selectedDate] === undefined ||
                Object.keys(timeSlots[selectedDate]).length === 0 ? (
                  <strong>No Time Slots</strong>
                ) : (
                  <TimePicker
                    confirmClick={confirmClick}
                    slots={timeSlots[selectedDate]}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
