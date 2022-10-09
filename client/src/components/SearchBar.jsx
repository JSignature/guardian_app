import React from 'react';

export const SearchBar = ({ setSearchText }) => {
  return (
    <div>
      <input
        placeholder="Search by First Name"
        type="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};
