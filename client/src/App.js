import { isCompositeComponentWithType } from 'react-dom/test-utils'
import './App.css'
import Home from './Home'
// import GuardianView from './GuardianView'
import { Route, Routes } from 'react-router-dom'
import GuardianView from './GuardianView'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/guardians'} element={<GuardianView />} />
      </Routes>
    </>
    // {/* <Home /> */}
  )
}

export default App
