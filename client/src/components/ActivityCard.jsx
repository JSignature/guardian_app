import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Btn } from './styles/ButtonStyle';
import { useDeleteActivityMutation } from '../features/api/apiSlice';
import { toast } from 'react-toastify';

const ActivityCard = ({
  activity,
  kidImage,
  createdAt,
  kidName,
  kidId,
  activityId,
}) => {
  const navigate = useNavigate();
  const handleClick = (KidId) => {
    navigate(`/kids/${KidId}`);
  };

  const [deleteActivity] = useDeleteActivityMutation();
  const handleActivityDelete = (id) => {
    deleteActivity(id);
    console.log(id);
    toast.success('Activity Deleted');
  };
  return (
    <StyledActivityCard>
      <div className="picName" onClick={() => handleClick(kidId)}>
        {kidName}
        <img src={`${kidImage}`} alt="" />
      </div>
      <div className="activty" onClick={() => handleClick(kidId)}>
        <div className="dateTime">
          {new Date(createdAt).toLocaleDateString()} at:
          {new Date(createdAt).toLocaleTimeString()}
        </div>
        <p>{activity} </p>
        <Btn onClick={() => handleActivityDelete(activityId)}>Delete</Btn>
      </div>
    </StyledActivityCard>
  );
};

const StyledActivityCard = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@400;500&family=Patrick+Hand+SC&family=Poppins:wght@300;400;500;600;700&display=swap');
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  background-color: white;
  box-shadow: 5px 5px 10px grey;
  width: 45vw;
  margin: 20px auto;
  padding: 10px;
  border-radius: 20px;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;

    box-shadow: 0px 5px 10px #fb8f67;
  }

  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 3px #fb8f67;
  }

  /* @media (max-width: 300px) {
    min-width: 600px;
  } */
  .dateTime {
    font-family: 'Poppins', sans-serif;
    font-size: 9px;
  }
  p {
    color: #56a3a6;
    font-size: 20px;
    display: flex;

    .activity {
      display: flex;
    }
  }
  .picName {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Gochi Hand', cursive;
    color: #fb8f67;
    font-size: larger;
    font-weight: 600;
  }
`;

export default ActivityCard;
