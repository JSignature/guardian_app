import React from 'react'

const KidCard = ({ kid }) => {
  return (
    <div>
      <img style={{ width: '12rem' }} src={kid.kid_image} alt="" />
      <h2>
        {kid.kid_first_name} {kid.kid_last_name}
      </h2>
    </div>
  )
}

export default KidCard
