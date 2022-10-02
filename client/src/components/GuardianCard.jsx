import React from 'react'
import styled from 'styled-components'
import { Btn } from './styles/ButtonStyle'

const GuardianCard = ({ guardian }) => {
  return (
    <StyledGuardianCard>
      <img src={guardian.guardian_image} alt="" />

      <footer>
        <h2>
          {guardian.guardian_first_name} {guardian.guardian_last_name}
        </h2>
        <a href={`/guardians/${guardian.id}`}>
          <Btn>Edit Guardian</Btn>
        </a>
      </footer>
    </StyledGuardianCard>
  )
}

const StyledGuardianCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: white;
  border-radius: 0.25rem;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 10px;
    margin-left: 70px;
  }
`

export default GuardianCard
