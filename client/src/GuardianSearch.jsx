import { React } from 'react'
import { SearchBar } from './components/SearchBar'
import NavBar from './components/NavBar'
import GuardianCards from './components/GuardianCards'

const GuardianSearch = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1>Guardians</h1>
        <button>Add Family</button>
        <SearchBar />
        <GuardianCards />
      </div>
    </>
  )
}

export default GuardianSearch
