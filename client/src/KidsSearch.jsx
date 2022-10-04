import { React, useEffect } from 'react'
import { useGetKidsQuery } from './features/api/apiSlice'
import KidsCards from './components/KidsCards'
import NavBar from './components/NavBar'
import { SearchBar } from './components/SearchBar'
import styled from 'styled-components'

const KidsSearch = () => {
  const { data = [], error } = useGetKidsQuery()

  useEffect(() => {
    if (error) {
      alert('Something Went Wrong')
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
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: auto;
  }
`

export default KidsSearch
