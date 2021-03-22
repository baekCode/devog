import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;
const Contents = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 1.125rem;
  letter-spacing: 2px;
`;
const Utils = styled.div`
  display: flex;
  align-items: center;
`;
const UserInfo = styled.div`
  font-weight: bold;
  margin-right: 1rem;
`

function Header({user}) {
  return (
    <Container>
      <Contents>
        <Logo children="DEVOG"/>
        <Utils>
          {user ? (
            <>
              <UserInfo children={user.username} />
              <Button children="로그아웃"/>
            </>
          ) : (
            <>
              <Button to="/login" children="로그인"/>
            </>
          )}
        </Utils>
      </Contents>
    </Container>
  );
}

export default Header;