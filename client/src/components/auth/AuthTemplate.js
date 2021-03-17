import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/palette';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.gray[2]};
`;
const Contents = styled.div`
  width: 400px;
  padding: 2rem;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  border-radius: 2px;
`;
const Title = styled.div`
  display: block;
  padding-bottom: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;

function AuthTemplate({children}) {
  return (
    <Container>
      <Contents>
        <Title><Link to={'/'}>DEVOG LOGIN</Link></Title>
        {children}
      </Contents>
    </Container>
  );
}

export default AuthTemplate;