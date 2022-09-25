import React from 'react'

const GuardianCard = ({ guardian }) => {
  return (
    <div>
      <img style={{ width: '12rem' }} src={guardian.guardian_image} alt="" />
      <h2>
        {guardian.guardian_first_name} {guardian.guardian_last_name}
      </h2>
      <h2></h2>
    </div>
  )
}

export default GuardianCard
