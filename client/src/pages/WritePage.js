import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';

function WritePage(props) {
  return (
    <Responsive>
      <Editor/>
      <TagBox/>
    </Responsive>
  );
}

export default WritePage;
