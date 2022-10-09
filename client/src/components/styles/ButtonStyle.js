import styled from 'styled-components'

export const Btn = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap');
  border-radius: 15px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 500;
  padding: 5px 20px;
  background-color: #d3d4d9;
  color: #44cfcb;
  width: 20vh;
  max-height: 5vh;

  text-align: center;

  &:hover {
    opacity: 0.9;
    transform: scale (0.98);
    color: #086375;
  }
`
export const DarkerBtn = styled(Btn)`
  background: #56a3a6;
  color: #d3d4d9;

  &:hover {
    opacity: 0.9;
    transform: scale (0.98);
    color: #44cfcb;
  }
`
export const BrighterBtn = styled(Btn)`
  background: #44cfcb;
  color: #d3d4d9;
`
export const XBtn = styled(Btn)`
  background: transparent;
  color: #fff;
  width: 2vw;
  box-shadow: 0px 0px 0px;
  font-size: 16px;
  border-color: none;
  position: absolute;
  margin-right: -1020px;
  margin-top: -550px;
`
