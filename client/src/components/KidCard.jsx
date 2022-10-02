import React from 'react';

const KidCard = ({ kid }) => {
  console.log(kid);
  return (
    <div>
      <img style={{ width: '12rem' }} src={kid.kid_image} alt="" />
      <h2>
        {kid.kid_first_name} {kid.kid_last_name}
      </h2>
      <a href={`/kids/${kid.id}`}>
        <button>Edit Kids</button>
      </a>
    </div>
  );
};

export default KidCard;
