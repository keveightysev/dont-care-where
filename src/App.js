import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { Global } from './styles/Global';

function App() {
  return (
    <>
      <Global />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
