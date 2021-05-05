import React, {useState} from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import RemoveModal from './RemoveModal';

const Container = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-top: -1rem;
  margin-bottom: 2rem;
`;
const ActionButton = styled.button`
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


function PostActionButton({onEdit, onRemove}) {
  const [modal, setModal] = useState(false);
  const onClickRemove = () => setModal(true);
  const onCancel = () => setModal(false);
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <Container>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={onClickRemove}>삭제</ActionButton>
      </Container>
      <RemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}

export default PostActionButton;