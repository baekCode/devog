import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import ButtonArea from '../components/write/ButtonArea';

function WritePage(props) {
  return (
    <Responsive>
      <Editor/>
      <TagBox/>
      <ButtonArea/>
    </Responsive>
  );
}

export default WritePage;
