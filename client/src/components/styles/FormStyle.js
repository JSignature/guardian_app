import styled from 'styled-components/macro';

export const StyledForm = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap');
  width: 900px;
  height: 200px;
  padding: 5rem;
  margin-top: -11rem;
  color: #086375;
  border-radius: 10px;

  input {
    font-family: 'poppins';
    color: #56a3a6;
    font-size: 15px;
    box-sizing: border-box;

    border-radius: 0.25rem;
    border-width: 2px;
    border: none;
    outline: none;
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
    float: center;
  }

  label {
    display: inline-block;
    font-size: 10px;
    width: 12vw;
    text-align: left;
    padding: 15px;
  }
  .formDiv {
    display: flex;
    margin-top: -15px;
    justify-content: space-around;
  }
  .Btn {
    background-color: hotpink;
  }
  .updateBtn {
    float: right;
  }
  .deleteBtn {
    margin-top: -10px;
    float: center;
  }
  article {
    text-align: center;
    padding: 20px;
    margin-bottom: auto;
  }
`;
