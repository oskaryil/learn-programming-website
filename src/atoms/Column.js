import styled from 'styled-components';

export const Column = styled.div`
  float: left;
  width: 100%;

  @media only screen and (min-width: 760px) {
    width: ${props => (props.span ? (props.span / 12) * 100 : '8.33')}%;
  }
`;
