import { React, useEffect, useState } from 'react';
import { useGetKidsQuery } from './features/api/apiSlice';
import KidsCards from './components/KidsCards';
import NavBar from './components/NavBar';
import { SearchBar } from './components/SearchBar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const KidsSearch = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(' ');

  const { kid, isSuccess, error } = useGetKidsQuery(undefined, {
    selectFromResult: ({ data, isSuccess, error }) => ({
      kid: data?.filter((item) => {
        return searchText.toLowerCase() === ' '
          ? item
          : item.kid_first_name
              .toLowerCase()
              .includes(searchText.toLowerCase());
      }),
      isSuccess,
      error,
    }),
  });

  useEffect(() => {
    if (error) {
      toast.error('You Must be logged in to access this feature');
      navigate('/');
    }
  }, [error, navigate]);

  return (
    <StyledKidSearch>
      <NavBar />
      <div className="searchHeader">
        <h1>Kids</h1>
        <SearchBar setSearchText={setSearchText} />
      </div>
      {isSuccess ? <KidsCards kid={kid} /> : <div>Loading</div>}
    </StyledKidSearch>
  );
};

const StyledKidSearch = styled.article`
  .searchHeader {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    margin-left: 200px;
  }
`;

export default KidsSearch;
