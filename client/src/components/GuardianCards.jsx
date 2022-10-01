import React from 'react';
import GuardianCard from './GuardianCard';

const GuardianCards = ({ data }) => {
  return (
    <div>
      {data.map((guardian) => (
        <GuardianCard key={guardian.id} guardian={guardian} />
      ))}
    </div>
  );
};

export default GuardianCards;
