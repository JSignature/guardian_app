import styled, { css } from 'styled-components/macro'

export const StyledForm = styled.form`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap');
  width: 800px;
  height: 200px;
  /* background: #44cfcb; */
  padding: 2rem;
  margin-top: 1 rem;
  color: #086375;
  border-radius: 10px;

  input {
    font-family: 'poppins';
    color: #56a3a6;
    font-size: 15px;
    margin-right: 35px;
    margin-bottom: 3px;
    box-sizing: border-box;
    padding: 0.3rem;
    border-radius: 0.25rem;
    background-color: f7ebe8;
    border-width: 2px;
    border: none;

    transition: all 0.5s ease-in-out;
    &:hover {
      cursor: pointer;
      box-shadow: 0 3px 3px #44cfcb;
    }
  }
`
