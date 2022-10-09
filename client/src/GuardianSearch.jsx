import { React, useEffect, useState } from 'react';
import { useGetGuardiansQuery } from './features/api/apiSlice';
import { SearchBar } from './components/SearchBar';
import NavBar from './components/NavBar';
import GuardianCards from './components/GuardianCards';
import AddGuardianModal from './components/modals/AddGuardianModal';
import { DarkerBtn } from './components/styles/ButtonStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GuardianSearch = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchText, setSearchText] = useState(' ');
  const navigate = useNavigate();
  // const { data: guardian, error } = useGetGuardiansQuery();

  const { guardian, isSuccess } = useGetGuardiansQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      guardian: data?.filter((item) => {
        console.log(item.guardian_first_name.toLowerCase());
        return searchText.toLowerCase() === ' '
          ? item
          : item.guardian_first_name
              .toLowerCase()
              .includes(searchText.toLowerCase());
      }),
      isSuccess,
    }),
  });

  console.log(searchText);
  // console.log(guardian);
  console.log(isSuccess);

  // useEffect(() => {
  //   if (error) {
  //     alert('You Must be logged in to access this feature');
  //     navigate('/');
  //   }
  // }, [error]);

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
    width: 90vw;

    margin-left: 120px;
  }
`;

export default GuardianSearch;
