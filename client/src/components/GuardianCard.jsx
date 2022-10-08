import React from 'react'
import styled from 'styled-components'
import { Btn } from './styles/ButtonStyle'

const GuardianCard = ({ guardian }) => {
  return (
    <StyledGuardianCard>
      <img src={guardian.guardian_image} alt="" />

      <div>
        <h2>
          {guardian.guardian_first_name} {guardian.guardian_last_name}
        </h2>
        <h4>{guardian.guardian_phone}</h4>
      </div>
      <div>
        <a href={`/guardians/${guardian.id}`}>
          <Btn>Edit Guardian</Btn>
        </a>
      </div>
    </StyledGuardianCard>
  )
}

const StyledGuardianCard = styled.article`
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

  /* @media (max-width: 300px) {
    min-width: 600px;
  } */
`

export default GuardianCard
