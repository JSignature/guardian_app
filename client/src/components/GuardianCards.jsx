import React from 'react'
import GuardianCard from './GuardianCard'

const GuardianCards = ({ guardians }) => {
  return (
    <div>
      {guardians.map(guardian => (
        <GuardianCard key={guardian.id} guardian={guardian} />
      ))}
    </div>
  )
}

export default GuardianCards
