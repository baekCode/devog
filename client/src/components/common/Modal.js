import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  position : fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.25);
  z-index: 10;
`;
const ModalContainer = styled.div`
  width: 300px;
  padding: 1.5rem;
  border-radius: 4px;
  background: white;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.125);
  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
  margin-left: 0.5rem;
  }
`;

function Modal({visible, title, description, cancelText = '취소', confirmText = '확인', onConfirm, onCancel}) {
  if (!visible) return null;
  return (
    <Container>
      <ModalContainer>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton cyan onClick={onConfirm}>{confirmText}</StyledButton>
        </div>
      </ModalContainer>
    </Container>
  );
}

export default Modal;