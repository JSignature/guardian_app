import { React, useEffect, useState } from 'react';
import { useGetGuardiansQuery } from './features/api/apiSlice';
import { SearchBar } from './components/SearchBar';
import NavBar from './components/NavBar';
import GuardianCards from './components/GuardianCards';
import AddGuardianModal from './components/modals/AddGuardianModal';

const GuardianSearch = () => {
  // const [guardians, setGuardians] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGuardiansQuery();

  useEffect(() => {
    if (error) {
      alert('Something Went Wrong');
    }
  }, [error]);

  // let guardiansObj;

  // if (isLoading) {
  //   return (guardiansObj = <p>Loading...</p>);
  // } else if (isSuccess) {
  //   guardiansObj = JSON.stringify(guardians);
  // } else if (isError) {
  //   return (guardiansObj = <p>{error}</p>);
  // }

  // useEffect(() => {
  //   fetch('/guardians')
  //     .then((resp) => resp.json())
  //     .then((obj) => setGuardians(obj));
  // }, []);

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
