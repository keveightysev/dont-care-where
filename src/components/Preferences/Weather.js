import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { Context } from '../../context';

const Weather = ({ navigate }) => {
  const { state, dispatch } = useContext(Context);

  const { preferences } = state;

  useEffect(() => {}, []);

  const changePreferences = e => {
    let value = Number(e.target.value);
    if (e.target.id === 'maxTemp') {
      value = value >= preferences.minTemp ? value : preferences.minTemp;
    } else if (e.target.id === 'minTemp') {
      value = value <= preferences.maxTemp ? value : preferences.maxTemp;
    }
    dispatch({
      type: 'CHANGE_PREFERENCES',
      payload: { [e.target.id]: value },
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    navigate('/population');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='maxTemp'>Max Temp</label>
        <input
          type='range'
          id='maxTemp'
          value={preferences.maxTemp}
          min='0'
          max='100'
          onChange={changePreferences}
        />
        <input type='text' value={preferences.maxTemp} disabled />
        <label htmlFor='minTemp'>Min Temp</label>
        <input
          type='range'
          id='minTemp'
          value={preferences.minTemp}
          min='0'
          max='100'
          onChange={changePreferences}
        />
        <input type='text' value={preferences.minTemp} disabled />
        <label htmlFor='humidity'>Humidity</label>
        <input
          type='range'
          id='humidity'
          value={preferences.humidity}
          min='0'
          max='100'
          onChange={changePreferences}
        />
        <input type='text' value={preferences.humidity} disabled />
        <button type='submit'>Continue</button>
      </Form>
    </>
  );
};

export default Weather;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
