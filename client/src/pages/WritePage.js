import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import ButtonContainer from '../containers/write/ButtonContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import {Helmet} from 'react-helmet-async';

function WritePage(props) {
  return (
    <Responsive>
      <Helmet><title>글쓰기 - DEVOG</title></Helmet>
      <HeaderContainer/>
      <EditorContainer/>
      <TagBoxContainer/>
      <ButtonContainer/>
    </Responsive>
  );
}

export default WritePage;
