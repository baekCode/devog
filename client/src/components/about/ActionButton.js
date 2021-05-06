import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';

const Container = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-top: -1rem;
  margin-bottom: 2rem;
`;
const Button = styled.button`
  padding: 0.25rem 0.5rem;
  border:none;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    color: ${palette.cyan[7]};
    background: ${palette.gray[1]}
  }
  & + & {
    margin-left: 0.25rem
  }
`;

function ActionButton({onEdit}) {
  return (
    <>
      <Container>
        <Button onClick={onEdit}>수정</Button>
      </Container>
    </>
  );
}

export default ActionButton;