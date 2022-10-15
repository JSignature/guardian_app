import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
 to{
     transform:rotate(360deg);
 }

 `
const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  margin: auto;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: #44cfcb;
  animation: ${spinner} 0.7s linear infinite;
`

export default Loading
