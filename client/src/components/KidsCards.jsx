import React from 'react'
import KidCard from './KidCard'

const KidsCards = ({ kids }) => {
  return (
    <div>
      {kids.map(kid => (
        <KidCard key={kid.id} kid={kid} />
      ))}
    </div>
  )
}

export default KidsCards
