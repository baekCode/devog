import React from 'react';
<<<<<<< HEAD
import Editor from '../components/write/Editor';
import HeaderContainer from '../containers/common/HeaderContainer';

function WritePage(props) {
  return (
    <>
      <HeaderContainer/>
      <Editor/>
    </>
=======
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
>>>>>>> b772f49ad575a4645e024ad7eed18436d08a9d4c
  );
}

export default WritePage;
