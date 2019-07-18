import React from 'react';
import styled from 'styled-components';

import Landing from './Landing';

import { white, black, lato } from '../styles/constants';

const Main = () => {
  return (
    <MainStyle>
      <div>
        <Box>
          <div>
            <Landing />
          </div>
        </Box>
      </div>
    </MainStyle>
  );
};

export default Main;

const Box = styled.div`
  position: relative;
  max-width: 700px;
  margin: 75px auto 90px;
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
    position: relative;
    font-color: ${black};
    font-family: ${lato};
    font-size: 1.6rem;
    z-index: 5;
    width: 100%;
    height: auto;
    top: -45px;
  }
`;

const MainStyle = styled.main`
  width: 100%;
  flex: 1 0 auto;
`;
