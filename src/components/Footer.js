import React from 'react';
import styled from 'styled-components';

import { white, black, lato } from '../styles/constants';

const Footer = () => {
  return <FooterStyle />;
};

export default Footer;

const FooterStyle = styled.footer`
    height: 100px;
    width: 100%
    background: ${black};
    flex-shrink: 0;
    color: ${white},
    font-family: ${lato}
`;
