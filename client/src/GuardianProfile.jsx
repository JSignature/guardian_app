import { React, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import AddGuardianModal from './components/modals/AddGuardianModal'
import GuardianProfileUpdate from './components/GuardianProfileUpdate'
import { useParams } from 'react-router-dom'

const GuardianProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [guardian, setGuardian] = useState([])

  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/guardians/${params.guardian_id}`)
        .then(resp => resp.json())
        .then(obj => setGuardian(obj))
    }
    fetchData()
  }, [])

  return (
    <>
      <NavBar />
      <h1>Guardian Profile</h1>
      <div>
        <img style={{ width: '12rem' }} src={guardian.guardian_image} alt="" />
        <GuardianProfileUpdate guardian={guardian} />
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
