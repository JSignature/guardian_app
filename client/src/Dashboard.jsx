import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import { useGetActivitiesQuery } from '../src/features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const params = useParams();
  const user_id = localStorage.getItem('user_id');
  const user_first_name = localStorage.getItem('user_first_name');

  const {
    data = [],
    isError,
    isSuccess,
    error,
  } = useGetActivitiesQuery(user_id);

  useEffect(() => {
    if (isError) {
      toast.error('Trouble connecting to the server');
    }
  }, [isError, error]);

  return (
    <>
      <NavBar />
      <h2>{`Howdy, ${user_first_name} these are your completed activities!!`}</h2>
      <h1>Activities</h1>
      {isSuccess ? (
        data.map((activity) => (
          <div key={activity.id}>
            <p>
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
