import styled from 'styled-components';

export const Image = styled.img`
  src: url(${props => props.src});
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  height: auto;
  ${props =>
    props.centered && {
      display: 'grid',
      margin: 'auto'
    }};
`;
