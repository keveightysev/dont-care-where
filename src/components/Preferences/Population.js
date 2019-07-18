import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../context';

const Population = () => {
  const { state, dispatch } = useContext(Context);
  const { pop } = state.preferences;

  const handleClick = e => {
    let { min, max } = e.target.dataset;
    min = Number(min);
    max = Number(max);
    const thisPop = { min, max };
    const search = pop.find(item => item.min === min && item.max === max);
    if (search) {
      dispatch({
        type: 'UPDATE_POP',
        payload: pop.filter(item => item.min !== min && item.max !== max),
      });
    } else {
      dispatch({ type: 'UPDATE_POP', payload: [...pop, thisPop] });
    }
  };

  return (
    <>
      <h2>How big do you like it?</h2>
      <PopulationButtons pop={pop}>
        <Button
          type='button'
          id='smallTown'
          data-min='10000'
          data-max='50000'
          onClick={handleClick}
          pop={pop}
        >
          Small Town
          <br />
          (pop. 1,000 - 50,000)
        </Button>
        <Button
          type='button'
          id='smallCity'
          data-min='50000'
          data-max='150000'
          onClick={handleClick}
          pop={pop}
        >
          Small City
          <br />
          (pop. 50,000 - 150,000)
        </Button>
        <Button
          type='button'
          id='mediumCity'
          data-min='150000'
          data-max='300000'
          onClick={handleClick}
          pop={pop}
        >
          Medium City
          <br />
          (pop. 150,000 - 300,000)
        </Button>
        <Button
          type='button'
          id='largeCity'
          data-min='300000'
          data-max='1000000'
          onClick={handleClick}
          pop={pop}
        >
          Large City
          <br />
          (pop. 300,000 - 1,000,000)
        </Button>
        <Button
          type='button'
          id='metropolis'
          data-min='1000000'
          data-max='20000000'
          onClick={handleClick}
          pop={pop}
        >
          Sprawling Metropolis
          <br />
          (pop. > 1,000,000)
        </Button>
      </PopulationButtons>
      <button onClick={() => console.log(pop)}>Continue</button>
    </>
  );
};

export default Population;

const PopulationButtons = styled.div`
  button {
    width: auto;
  }
`;

const Button = styled.button`
  background: ${props => {
    const min = Number(props['data-min']);
    const max = Number(props['data-max']);
    const { pop } = props;
    const search = pop.find(item => item.min === min && item.max === max);
    return search ? 'red' : 'white';
  }};
`;
