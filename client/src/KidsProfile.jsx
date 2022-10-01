import { React, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import { useParams } from 'react-router-dom'
import KidsProfileUpdate from './KidsProfileUpdate'
import AddActivityModal from './components/modals/AddActivityModal'

import { Btn } from './components/styles/ButtonStyle'
// import AddKidModal from './components/modals/AddKidModal'

const KidsProfile = () => {
  const [kid, setKid] = useState([])
  const params = useParams()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/kids/${params.kid_id}`)
        .then(resp => resp.json())
        .then(obj => setKid(obj))
    }
    fetchData()
  }, [])
  console.log(kid)
  return (
    <>
      <NavBar />
      <h1>Kids Profile</h1>
      <div>
        <h3>
          {kid.kid_first_name} {kid.kid_last_name}
        </h3>
        <img style={{ width: '12rem' }} src={kid.kid_image} alt="" />
        <KidsProfileUpdate kid={kid} />
        <Btn>Delete</Btn>
      </div>

      <h2>Guardians</h2>

      <div>
        <h2>Activities</h2>
        <AddActivityModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <Btn onClick={() => setModalIsOpen(true)}>Add Activity</Btn>
      </div>
    </>
  )
}

export default KidsProfile

{
  /* 
      ---- needs to go on guardian page */
}
{
  /* <AddKidModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      // <button onClick={() => setModalIsOpen(true)}>Add Additional Kid</button> */
}
