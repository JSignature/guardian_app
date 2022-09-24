import { isCompositeComponentWithType } from 'react-dom/test-utils'
import './App.css'
import Home from './Home'
// import GuardianView from './GuardianView'
import { Route, Routes } from 'react-router-dom'
import GuardianSearch from './GuardianSearch'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/guardians'} element={<GuardianSearch />} />
      </Routes>
    </>
    // {/* <Home /> */}
  )
}

export default App
