import { React, useEffect } from 'react';
import { useGetKidsQuery } from './features/api/apiSlice';
import KidsCards from './components/KidsCards';
import NavBar from './components/NavBar';
import { SearchBar } from './components/SearchBar';
import { useNavigate } from 'react-router-dom';

const KidsSearch = () => {
  const navigate = useNavigate();
  const { data = [], error } = useGetKidsQuery();

  useEffect(() => {
    if (error) {
      alert('You Must be logged in to access this feature');
      navigate('/');
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
