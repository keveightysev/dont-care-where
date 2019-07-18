import React from 'react';
import styled from 'styled-components';

// import { caveatBrush, black, white } from '../../styles/constants';

import womanUsingComputer from '../../assets/adult-business-computer-2422286.jpg';
import mapPicture from '../../assets/adventure-camera-coffee-1051075.jpg';
import airplane from '../../assets/aeroplane-aircraft-airplane-1004584.jpg';

const Middle = () => {
  return (
    <MiddleSection>
      <h2>How it Works</h2>
      <div>
        <WorksCard>
          <div>
            <img src={womanUsingComputer} alt='Woman using computer' />
          </div>
          <h3>Set your preferences</h3>
          <p>
            Let us know the kind of weather you're comfortable in and what
            you're looking for when you travel
          </p>
        </WorksCard>
        <WorksCard>
          <div>
            <img
              src={mapPicture}
              alt='Woman pointing to random location on map'
            />
          </div>
          <h3>We find the best spot</h3>
          <p>
            Our site takes the preferences you've entered and finds the ideal
            travel spot for you
          </p>
        </WorksCard>
        <WorksCard>
          <div>
            <img src={airplane} alt='Airplane taking flight' />
          </div>
          <h3>Book your travel</h3>
          <p>
            We'll show you the best deals from our travel partners so booking
            travel is convenient!
          </p>
        </WorksCard>
      </div>
    </MiddleSection>
  );
};

export default Middle;

const MiddleSection = styled.section`
  margin: 30px auto 30px;
  width: 95%;

  & > div {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    text-align: center;
  }
`;

const WorksCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 110px;
    transform: skewY(3deg);
    border-radius: 10px;

    img {
      position: absolute;
      top: -5px;
      transform: skewY(-3deg);
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
  }

  p {
    margin-top: 10px;
    text-align: center;
  }
`;
