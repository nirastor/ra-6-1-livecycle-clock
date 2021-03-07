/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Visual12hClock from '../Visual12hClock/Visual12hClock';
import './Clock.css';

export default class Clock extends React.Component {
  constructor(props) {
    super();
    this.id = props.clock.id;
    this.city = props.clock.city;
    this.timezone = props.clock.timezone;
    this.removeClock = props.removeClock;
    this.timer = null;
    this.state = {
      time: (new Date()),
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({ time: (new Date()) }),
      200,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    return (
      <>
        <div className="clock-city-plate">
          {this.city}
          <button className="clock-delete-button" type="button" onClick={this.removeClock}>&times;</button>
        </div>
        <div>
          <Visual12hClock
            hh={time.getUTCHours() + parseInt(this.timezone, 10)}
            mm={time.getUTCMinutes()}
            ss={time.getUTCSeconds()}
          />
        </div>
      </>
    );
  }
}
