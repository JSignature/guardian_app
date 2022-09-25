import { React, useEffect, useState } from 'react'

import { SearchBar } from './components/SearchBar'
import NavBar from './components/NavBar'
import GuardianCards from './components/GuardianCards'
import AddGuardianModal from './components/modals/AddGuardianModal'

const GuardianSearch = () => {
  const [guardians, setGuardians] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    fetch('/guardians')
      .then(resp => resp.json())
      .then(obj => setGuardians(obj))
  }, [])

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
        <GuardianCards guardians={guardians} />
      </div>
    </>
  )
}

export default GuardianSearch
