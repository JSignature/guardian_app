import React from 'react';
import { DarkerBtn } from './styles/ButtonStyle';

export const SearchBar = ({ setSearchText }) => {
  return (
    <div>
      <input type="search" onChange={(e) => setSearchText(e.target.value)} />
      <DarkerBtn>Search</DarkerBtn>
    </div>
  );
};
