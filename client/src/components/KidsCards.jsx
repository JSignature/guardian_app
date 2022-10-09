import React from 'react';
import KidCard from './KidCard';

const KidsCards = ({ kid }) => {
  console.log(kid);
  return (
    <div>
      {kid.map((kid) => (
        <KidCard key={kid.id} kid={kid} />
      ))}
    </div>
  );
};

export default KidsCards;
