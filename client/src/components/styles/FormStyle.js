import styled, { css } from 'styled-components/macro'

export const StyledForm = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap');
  width: 900px;
  height: 200px;
  /* background: #44cfcb; */
  padding: 2rem;
  margin-top: -11rem;
  color: #086375;
  border-radius: 10px;

  input {
    font-family: 'poppins';
    color: #56a3a6;
    font-size: 15px;
    margin-right: 40px;
    margin-bottom: 5px;
    box-sizing: border-box;
    padding: 0.3rem;
    border-radius: 0.25rem;
    border-width: 2px;
    border: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      cursor: pointer;
      box-shadow: 0 3px 3px #44cfcb;
    }
  }

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
    // padding: 10px;
    box-shadow: 0px 0px 20px grey;
    background-color: white;
  }
  .firstDiv {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 20px;
  }
  h3 {
    margin-left: 20px;
  }

  .deleteBtn {
    margin-left: 710px;
  }
`
