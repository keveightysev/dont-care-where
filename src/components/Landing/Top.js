import React from 'react';
import styled from 'styled-components';

import airportPic from '../../assets/adult-airport-arrival-1008155.jpg';
import { blue, white } from '../../styles/constants';

const Top = () => {
  return (
    <TopStyle>
      <div>
        <div />
        <img src={airportPic} alt='Woman in airport with luggage' />
        <div>
          <h2>Looking to get away but not sure where to go?</h2>
          <h2>We can help!</h2>
          <button>
            <span>Find your perfect location</span>
          </button>
        </div>
      </div>
    </TopStyle>
  );
};

export default Top;

const TopStyle = styled.div`
  position: relative;
  width: 100%;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  transform: skewY(-3deg);
  overflow: hidden;
  height: 250px;
  background: ${blue};
  z-index: 1;

  div:first-child {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        farthest-side at top left,
        rgb(250, 223, 99, 0.75),
        transparent
      ),
      radial-gradient(
        farthest-side at top right,
        rgb(230, 57, 70, 0.75),
        transparent
      );
  }

  div:last-child {
    width: 100%;
    height: 115%;
    position: absolute;
    z-index: 5;
    top: -18px;
    padding: 30px;
    transform: skewY(3deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      color: ${white};
      font-size: 2.5rem;
      width: 50%;
      text-align: center;
    }

    button {
      font-size: 1.8rem;
      color: ${white};
      padding: 10px 15px;
      border: 1px solid ${blue};
      background: ${blue};
      cursor: pointer;
      border-radius: 10px;
      transition: 0.5s ease;

      span {
        display: inline-block;
        transition: 0.5s ease;
      }

      &:hover {
        transform: skewY(-5deg);
        background: transparent;
        border-color: ${white};
        span {
          transform: skewY(5deg);
        }
      }
    }
  }

  img {
    position: absolute;
    top: -100px;
    transform: skewY(3deg);
    filter: grayscale(100%);
    mix-blend-mode: multiply;
    z-index: 4;
  }
`;
