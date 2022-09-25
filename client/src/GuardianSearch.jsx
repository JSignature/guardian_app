import { React, useEffect, useState } from 'react'
import { SearchBar } from './components/SearchBar'
import NavBar from './components/NavBar'
import GuardianCards from './components/GuardianCards'

const GuardianSearch = () => {
  const [guardians, setGuardians] = useState([])

  return (
    <>
      <NavBar />
      <div>
        <h1>Guardians</h1>
        <button>Add Family</button>
        <SearchBar />
        <GuardianCards guardians={guardians} />
      </div>
    </>
  )
}

export default GuardianSearch
