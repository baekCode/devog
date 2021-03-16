import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

function AuthTemplate({children}) {
  return (
    <Container>{children}</Container>
  );
}

export default AuthTemplate;