import React from 'react';
import GuardianCard from './GuardianCard';
import { useSelector } from 'react-redux';

const GuardianCards = ({}) => {
  const { guardians } = useSelector((store) => store.guardians);
  console.log(guardians);

  return (
    <div>
      {guardians.map((guardian) => (
        <GuardianCard key={guardian.id} {...guardian} />
      ))}
    </div>
  );
};

export default GuardianCards;
