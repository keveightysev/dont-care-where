import React from 'react';

import Header from './components/Header';
import Main from './components/Main';

import { Global } from './styles/Global';

function App() {
  return (
    <>
      <Global />
      <Header />
      <Main />
    </>
  );
}

export default App;
