/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Visual12hClock from '../Visual12hClock/Visual12hClock';
import './Clock.css';

export default class Clock extends React.Component {
  constructor(props) {
    super();
    this.timezone = props.clock.timezone;
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
    const { clock } = this.props;
    const { city, timezone } = clock;
    const { removeClock } = this.props;
    return (
      <>
        <div className="clock-city-plate">
          { city }
          <button className="clock-delete-button" type="button" onClick={removeClock}>&times;</button>
        </div>
        <div>
          <Visual12hClock
            hh={time.getUTCHours() + parseInt(timezone, 10)}
            mm={time.getUTCMinutes()}
            ss={time.getUTCSeconds()}
          />
        </div>
      </>
    );
  }
}
