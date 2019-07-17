import React, { useContext } from 'react';

import { Context } from '../../context';

const Start = ({ navigate }) => {
  const { state, dispatch } = useContext(Context);

  const { date } = state;

  const changeDate = e => {
    dispatch({ type: 'CHANGE_DATE', payload: e.target.value });
    navigate('weather/');
  };
  return (
    <>
      <h2>Time to get starteddddd</h2>
      <h3>First things first... What day are you looking to travel?</h3>
      <form>
        <input type='date' id='date' value={date} onChange={changeDate} />
        <button onClick={changeDate}>Set weather preferences</button>
      </form>
    </>
  );
};

export default Start;
