import { React, useEffect, useState } from 'react';
import { useGetGuardiansQuery } from './features/api/apiSlice';
import { SearchBar } from './components/SearchBar';
import NavBar from './components/NavBar';
import GuardianCards from './components/GuardianCards';
import AddGuardianModal from './components/modals/AddGuardianModal';
import { DarkerBtn } from './components/styles/ButtonStyle';
import { useNavigate } from 'react-router-dom';

const GuardianSearch = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { data = [], error } = useGetGuardiansQuery();

  useEffect(() => {
    if (error) {
      alert('You Must be logged in to access this feature');
      navigate('/');
    }
  }, [error]);

  return (
    <>
      <NavBar />
      <AddGuardianModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <div className="searchHeader">
        <DarkerBtn onClick={() => setModalIsOpen(true)}>+ Add Family</DarkerBtn>
        <h1>Guardians</h1>
        <SearchBar />
      </div>
      <GuardianCards data={data} />
    </>
  );
};

export default GuardianSearch;
