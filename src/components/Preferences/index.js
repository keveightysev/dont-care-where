import React from 'react';
import { Router } from '@reach/router';

import Start from './Start';
import Weather from './Weather';
import Population from './Population';

const Preferences = () => {
  return (
    <Router>
      <Start path='/' />
      <Weather path='/weather' />
      <Population path='/population' />
    </Router>
  );
};

export default Preferences;
