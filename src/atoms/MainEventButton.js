import styled from 'styled-components';

const MainEventButton = styled.button`
  cursor: pointer;
  background-color: #66bb42;
  outline: none;
  border: 0;
  color: #fff;
  padding: 20px 30px 20px 30px;
  font-size: 1em;
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transition: 0.2s ease-out 0s;
  ${props =>
    props.centered && {
      display: 'grid',
      margin: 'auto'
    }};
  &:hover {
    background-color: red;
    transition: 0.2s ease-out 0s;
  }
`;

export default MainEventButton;
