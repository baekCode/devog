import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
const StyledButton = styled(Button)`
  height: 2rem;

  & + & {
    margin-left: 0.5rem
  }
`;


function ButtonArea({onCancel, onPublish, isEdit}) {
  return (
    <Container>
      <StyledButton cyan onClick={onPublish}>{isEdit ? '수정하기' : '등록하기'}</StyledButton>
      <StyledButton onClick={onCancel}>취소하기</StyledButton>
    </Container>
  );
}

export default ButtonArea;
