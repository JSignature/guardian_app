import { React, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import { useParams } from 'react-router-dom'
import KidsProfileUpdate from './KidsProfileUpdate'

const KidsProfile = () => {
  const [kid, setKid] = useState([])
  const params = useParams()

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
        <button>Delete</button>
      </div>

      <h2>Guardians</h2>
      <h2>Activities</h2>
    </>
  )
}

export default KidsProfile
