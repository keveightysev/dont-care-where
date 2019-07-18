import React from 'react';
import styled from 'styled-components';

import Preferences from './Preferences';

import { white, black, lato } from '../styles/constants';

const Main = () => {
  return (
    <MainStyle>
      <div>
        <Preferences />
      </div>
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.main`
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 75px auto;
  background: ${white};
  min-height: 400px;

  &::before {
    content: '';
    background: ${white};
    width: 100%;
    display: block;
    position: absolute;
    top: -45px;
    border-radius: 30px;
    height: 100px;
    transform: skewY(-3deg);
    overflow: hidden;
  }

  &::after {
    content: '';
    background: ${white};
    width: 100%;
    display: block;
    position: absolute;
    bottom: -45px;
    border-radius: 30px;
    height: 100px;
    transform: skewY(3deg);
    overflow: hidden;
  }

  > div {
    position: absolute;
    font-color: ${black};
    font-family: ${lato};
    z-index: 5;
    width: 100%;
    height: 100%;
  }
`;
