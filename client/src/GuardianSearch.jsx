import { React, useEffect, useState } from 'react';
import { useGetGuardiansQuery } from './features/api/apiSlice';
import { SearchBar } from './components/SearchBar';
import NavBar from './components/NavBar';
import GuardianCards from './components/GuardianCards';
import AddGuardianModal from './components/modals/AddGuardianModal';
import { DarkerBtn } from './components/styles/ButtonStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const GuardianSearch = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchText, setSearchText] = useState(' ');
  const navigate = useNavigate();

  const { guardian, isSuccess, error } = useGetGuardiansQuery(undefined, {
    selectFromResult: ({ data, isSuccess, error }) => ({
      guardian: data?.filter((item) => {
        return searchText.toLowerCase() === ' '
          ? item
          : item.guardian_first_name
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
    <StyledGuardianSearch>
      <NavBar />
      <AddGuardianModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <div className="searchHeader">
        <DarkerBtn onClick={() => setModalIsOpen(true)}>
          + Add Guardian
        </DarkerBtn>
        <h1>Guardians</h1>
        <SearchBar setSearchText={setSearchText} />
      </div>
      {isSuccess ? <GuardianCards data={guardian} /> : <div>Loading</div>}
    </StyledGuardianSearch>
  );
};

const StyledGuardianSearch = styled.article`
  .searchHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: auto;
  }
`;

export default GuardianSearch;
