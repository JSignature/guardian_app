import { React, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import AddGuardianModal from './components/modals/AddGuardianModal'
import GuardianProfileUpdate from './components/GuardianProfileUpdate'

const GuardianProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [guardian, setGuardian] = useState([])

  // useEffect(() => {
  //   fetch('/guardians')
  //     .then(resp => resp.json())
  //     .then(obj => setGuardian(obj))
  // }, [])

  return (
    <>
      <NavBar />
      <h1>Guardian Profile</h1>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/3/33/Elaine-benes-3707.jpg"
          alt=""
        />
        <GuardianProfileUpdate />
        <button>Delete</button>
      </div>
      <div>
        <h2>Additonal Guardians</h2>
        <AddGuardianModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <button onClick={() => setModalIsOpen(true)}>
          Add Additional Guardian
        </button>
      </div>
      <div>
        <h2>Kids</h2>
        <button>Add Kid</button>
      </div>
    </>
  )
}

export default GuardianProfile
