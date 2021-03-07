/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Clock from './components/Clock/Clock';

function App() {
  const [clocks, setClocks] = useState([
    {
      id: nanoid(),
      city: 'Moscow',
      timezone: 3,
    },
    {
      id: nanoid(),
      city: 'London',
      timezone: 0,
    },
    {
      id: nanoid(),
      city: 'Novosibirsk',
      timezone: 7,
    },
  ]);

  const [form, setForm] = useState({
    city: '',
    timezone: 0,
  });

  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addClock = (newClock) => {
    setClocks((prevClocks) => {
      const newClocks = [...prevClocks];
      newClocks.push(newClock);
      return newClocks;
    });
  };

  const removeClock = (id) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== id));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.city) {
      return;
    }
    addClock({ ...form, id: nanoid() });
    setForm(() => ({
      city: '',
      timezone: 0,
    }));
  };

  return (
    <div className="App">
      <div className="form-bar">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="city">City</label>
            <input
              className="form-input"
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="timezone">Timezone</label>
            <input
              className="form-input"
              type="number"
              step="1"
              min="-12"
              max="12"
              id="timezone"
              name="timezone"
              value={form.timezone}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-field">
            <button className="form-button" type="submit">Add</button>
          </div>
        </form>

      </div>
      <ul className="clocks">
        {clocks.map((clock) => (
          <li className="clocks-clock-item" key={clock.id}>
            <Clock clock={clock} removeClock={() => removeClock(clock.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
