/* eslint-disable react/prop-types */
import React from 'react';
import './Visual12hClock.css';

export default function Visual12hClock({ hh, mm, ss }) {
  const secondRotate = ss * 6;
  const minuteRotate = (mm + ss / 60) * 6;
  const hourRotate = (hh + mm / 60) * 30;

  const handStyle = (rotate) => ({
    transform: `rotate(${rotate}deg)`,
  });

  return (
    <div className="clock">
      <div className="wrap">
        <span className="hour" style={handStyle(hourRotate)} />
        <span className="minute" style={handStyle(minuteRotate)} />
        <span className="second" style={handStyle(secondRotate)} />
        <span className="dot" />
      </div>
    </div>
  );
}
