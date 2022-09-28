// import { isCompositeComponentWithType } from 'react-dom/test-utils'
import './App.css'
import Home from './Home'
// import GuardianView from './GuardianView'
import { Route, Routes } from 'react-router-dom'
import GuardianSearch from './GuardianSearch'
import GuardianProfile from './GuardianProfile'
import KidsSearch from './KidsSearch'

function App() {
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
  )
}

export default App
