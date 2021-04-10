import React from 'react';
import Responsive from '../components/common/Responsive';
import TagBox from '../components/write/TagBox';
import ButtonArea from '../components/write/ButtonArea';
import EditorContainer from '../containers/write/EditorContainer';

function WritePage(props) {
  return (
    <Responsive>
      <EditorContainer/>
      <TagBox/>
      <ButtonArea/>
    </Responsive>
  );
}

export default WritePage;
