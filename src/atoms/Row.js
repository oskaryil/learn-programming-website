import styled from 'styled-components';

export const Row = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;
