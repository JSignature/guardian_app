import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import { useGetActivitiesQuery } from '../src/features/api/apiSlice'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ActivityCard from './components/ActivityCard'
import { toast } from 'react-toastify'

const Dashboard = () => {
  const params = useParams()
  const user_id = localStorage.getItem('user_id')
  const user_first_name = localStorage.getItem('user_first_name')

  const {
    data = [],
    isError,
    isSuccess,
    error,
  } = useGetActivitiesQuery(user_id)

  useEffect(() => {
    if (isError) {
      toast.error('Trouble connecting to the server')
    }
  }, [isError, error])

  return (
    <StyledDashboard>
      <NavBar />
      <h2>{`Howdy, ${user_first_name} these are your completed activities!!`}</h2>
      <h1>Kid's Activities</h1>

      {isSuccess ? (
        data.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))
      ) : (
        <div>loading</div>
      )}
    </StyledDashboard>
  )
}

const StyledDashboard = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@400;500&family=Patrick+Hand+SC&family=Poppins:wght@300;400;500;600;700&display=swap');

  h2,
  h1 {
  }
  h2 {
    font-size: 16px;
    color: #44cfcb;
  }
`

export default Dashboard
