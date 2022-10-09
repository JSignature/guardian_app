import React from 'react';
import styled from 'styled-components';

import { Btn } from './styles/ButtonStyle';

const KidCard = ({ kid }) => {
  return (
    <StyledKidCard>
      <img src={kid.kid_image} alt="" />
      <div>
        <h2>
          {kid.kid_first_name} {kid.kid_last_name}
        </h2>
        <h2>{kid.kid_group}</h2>
      </div>
      <div>
        <a href={`/kids/${kid.id}`}>
          <Btn>Edit Kids</Btn>
        </a>
      </div>
    </StyledKidCard>
  );
};

const StyledKidCard = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  background-color: white;
  box-shadow: 5px 5px 10px grey;
  width: 70vw;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;

    box-shadow: 0px 0px 20px grey;
  }
  h2,
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: #44cfcb;
    text-align: center;
    font-size: 20px;
  }
  h4 {
    margin-top: 10px;
  }

  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 3px #44cfcb;
  }
  /* @media (min-width: 768px) {
    max-width: 600px;
  } */
`;

export default KidCard;
