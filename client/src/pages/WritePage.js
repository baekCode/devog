import React from 'react';
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import ButtonArea from '../components/write/ButtonArea';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

function WritePage(props) {
  return (
    <Responsive>
      <EditorContainer/>
      <TagBoxContainer/>
      <ButtonArea/>
    </Responsive>
  );
}

export default WritePage;
