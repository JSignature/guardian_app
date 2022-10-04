import './App.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import GuardianSearch from './GuardianSearch'
import GuardianProfile from './GuardianProfile'
import KidsSearch from './KidsSearch'
import KidsProfile from './KidsProfile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './Dashboard'

function App() {
  return (
    <>
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/guardians'} element={<GuardianSearch />} />
        <Route path={'/guardians/:guardian_id'} element={<GuardianProfile />} />
        <Route path={'/kids'} element={<KidsSearch />} />
        <Route path={'/kids/:kid_id'} element={<KidsProfile />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
      </Routes>
    </>
    // {/* <Home /> */}
  )
}

export default App
