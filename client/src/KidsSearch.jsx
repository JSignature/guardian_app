import { React, useEffect } from 'react'
import { useGetKidsQuery } from './features/api/apiSlice'
import KidsCards from './components/KidsCards'
import NavBar from './components/NavBar'
import { SearchBar } from './components/SearchBar'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const KidsSearch = () => {
  const navigate = useNavigate()
  const { data = [], error } = useGetKidsQuery()

  useEffect(() => {
    if (error) {
      alert('You Must be logged in to access this feature')
      navigate('/')
    }
  }, [error])

  return (
    <StyledKidSearch>
      <NavBar />
      <div className="searchHeader">
        <h5></h5>
        <h1>Kids</h1>
        <SearchBar />
      </div>
      <KidsCards kids={data} />
    </StyledKidSearch>
  )
}

const StyledKidSearch = styled.article`
  .searchHeader {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    margin-left: 200px;
  }
`

export default KidsSearch
