import React from 'react';
import NavBar from './components/NavBar';
import { useGetActivitiesQuery } from '../src/features/api/apiSlice';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const params = useParams();
  const user_id = localStorage.getItem('user_id');
  console.log(user_id);
  const {
    data = [],
    isSuccess,
    refetch,
    error,
  } = useGetActivitiesQuery(user_id);
  console.log(data);
  return (
    <>
      <NavBar />
      <h2>Hello, User!!</h2>
      <h1>Activities</h1>
      {isSuccess ? (
        data.map((activity) => (
          <div>
            <p key={activity.id}>
              {activity.description}{' '}
              {new Date(activity.created_at).toLocaleDateString()} at:
              {new Date(activity.created_at).toLocaleTimeString()}
              {activity.id}
            </p>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Dashboard;
