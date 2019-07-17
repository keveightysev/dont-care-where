import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './reducer';

const Context = createContext(initialState);

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
