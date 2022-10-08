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

const StyledDashboard = styled.article`
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
    box-shadow: 0 3px 3px #fb8f67;
  }

  /* @media (max-width: 300px) {
    min-width: 600px;
  } */
`
export default Dashboard
