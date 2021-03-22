import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Responsive({children, ...rest}) {
  return (
    <Container {...rest}>{children}</Container>
  );
}

export default Responsive;