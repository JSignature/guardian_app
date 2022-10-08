import React from 'react'

const ActivityCard = ({ activity }) => {
  return (
    <div>
      <p key={activity.id}>
        <img src={`${activity.kid.kid_image}`} alt="" />
        {activity.kid.kid_first_name}
        {activity.description}{' '}
        {new Date(activity.created_at).toLocaleDateString()} at:
        {new Date(activity.created_at).toLocaleTimeString()}
      </p>
    </div>
  )
}

export default ActivityCard
