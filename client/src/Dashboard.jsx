import React from 'react'
import NavBar from './components/NavBar'
import { useGetActivitiesQuery } from '../src/features/api/apiSlice'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ActivityCard from './components/ActivityCard'

const Dashboard = () => {
  const params = useParams()
  const user_id = localStorage.getItem('user_id')

  const {
    data = [],
    isSuccess,
    refetch,
    error,
  } = useGetActivitiesQuery(user_id)

  return (
    <>
      <NavBar />
      <h2>Hello, User!!</h2>
      <h1>Activities</h1>

      {isSuccess ? (
        data.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))
      ) : (
        <div>loading</div>
      )}
    </>
  )
}

export default Dashboard
