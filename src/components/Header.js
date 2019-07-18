import React from 'react';
import styled from 'styled-components';

import { white, black, lato } from '../styles/constants';

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Don't Care Where</h1>
      <nav>
        <button>
          <span>Sign Up</span>
        </button>
        <button>
          <span>Sign In</span>
        </button>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
      background: ${white};
      border: 1px solid ${white};
      border-radius: 10px;
      padding: 10px 20px;
      cursor: pointer;
      transition: .5s ease

      span {
        display: inline-block;
        font-family: ${lato};
        color: ${black}
        font-weight: 600;
        font-size: 1.6rem;
        transition: .5s ease
      }

      &:hover {
        background: transparent;

        span {
            color: ${white}
        }

      &:first-child {
        transform: skew(-20deg, -5deg);

        span {
            transform: skew(20deg, 5deg);
        }
      }

      &:last-child {
        transform: skew(20deg, 5deg);

        span {
            transform: skew(-20deg, -5deg);
        }
      }

    }
    }
  }
`;
