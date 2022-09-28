import { React, useState, useEffect } from 'react'
import KidsCards from './components/KidsCards'
import NavBar from './components/NavBar'
import { SearchBar } from './components/SearchBar'

const KidsSearch = () => {
  const [kids, setKids] = useState([])

  useEffect(() => {
    fetch('/kids')
      .then(resp => resp.json())
      .then(obj => setKids(obj))
  }, [])

  return (
    <>
      <NavBar />
      <h1>Kids</h1>
      <SearchBar />
      <KidsCards kids={kids} />
    </>
  )
}

export default KidsSearch
