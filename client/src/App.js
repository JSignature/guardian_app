import { useEffect } from 'react';
import './App.css';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import GuardianSearch from './GuardianSearch';
import GuardianProfile from './GuardianProfile';
import KidsSearch from './KidsSearch';
import { getGuardians } from './features/guardians/guardiansSlice';

function App() {
  const { guardians, isLoading } = useSelector((store) => store.guardians);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Test');
    dispatch(getGuardians());
  }, []);

  console.log(guardians, isLoading);

  if (isLoading) {
    return (
      <div>
        <h1>Is Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/guardians'} element={<GuardianSearch />} />
        <Route
          path={'/guardians/profile/:guardian_id'}
          element={<GuardianProfile />}
        />
        <Route path={'/kids'} element={<KidsSearch />} />
      </Routes>
    </>
    // {/* <Home /> */}
  );
}

export default App;
