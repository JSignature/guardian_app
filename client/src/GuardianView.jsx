import { React } from 'react'
import NavBar from './NavBar'

const GuardianView = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1>Guardians</h1>
        <button>Add Family</button>
        <input type="search" />
        <button>Search</button>
      </div>
    </>
  )
}

export default GuardianView
