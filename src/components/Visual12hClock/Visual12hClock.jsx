/* eslint-disable react/prop-types */
import React from 'react';
import './Visual12hClock.css';

export default function Visual12hClock({ hh, mm, ss }) {
  const secondRotate = ss * 6;
  const minuteRotate = (mm + ss / 60) * 6;
  const hourRotate = (hh + mm / 60) * 30;

  const getClockHandRotation = (rotate) => ({
    transform: `rotate(${rotate}deg)`,
  });

  return (
    <div className="clock">
      <div className="wrap">
        <span className="hour" style={getClockHandRotation(hourRotate)} />
        <span className="minute" style={getClockHandRotation(minuteRotate)} />
        <span className="second" style={getClockHandRotation(secondRotate)} />
        <span className="dot" />
      </div>
    </div>
  );
}
