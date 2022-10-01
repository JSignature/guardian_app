import { React, useEffect, useState } from 'react';
import { useGetGuardiansQuery } from './features/api/apiSlice';
import { SearchBar } from './components/SearchBar';
import NavBar from './components/NavBar';
import GuardianCards from './components/GuardianCards';
import AddGuardianModal from './components/modals/AddGuardianModal';

const GuardianSearch = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { data = [], error } = useGetGuardiansQuery();

  useEffect(() => {
    if (error) {
      alert('Something Went Wrong');
    }
  }, [error]);

  return (
    <>
      <NavBar />
      <AddGuardianModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <div>
        <h1>Guardians</h1>
        <button onClick={() => setModalIsOpen(true)}>Add Family</button>
        <SearchBar />

        <GuardianCards data={data} />
      </div>
    </>
  );
};

export default GuardianSearch;
