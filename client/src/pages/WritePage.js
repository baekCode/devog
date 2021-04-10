import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import ButtonContainer from '../containers/write/ButtonContainer';

function WritePage(props) {
  return (
    <Responsive>
      <EditorContainer/>
      <TagBoxContainer/>
      <ButtonContainer/>
    </Responsive>
  );
}

export default WritePage;
