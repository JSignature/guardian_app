import React from 'react'
import GuardianCard from './GuardianCard'

const GuardianCards = ({ guardians }) => {
  return (
    <div>
      <GuardianCard guardians={guardians} />
    </div>
  )
}

export default GuardianCards
