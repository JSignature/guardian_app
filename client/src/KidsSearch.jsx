import { React, useEffect } from 'react';
import { useGetKidsQuery } from './features/api/apiSlice';
import KidsCards from './components/KidsCards';
import NavBar from './components/NavBar';
import { SearchBar } from './components/SearchBar';

const KidsSearch = () => {
  const { data = [], error } = useGetKidsQuery();

  useEffect(() => {
    if (error) {
      alert('Something Went Wrong');
    }
  }, [error]);

  return (
    <>
      <NavBar />
      <h1>Kids</h1>
      <SearchBar />
      <KidsCards kids={data} />
    </>
  );
};

export default KidsSearch;
