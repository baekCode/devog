import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/about/EditorContainer';
import ButtonContainer from '../containers/about/ButtonContainer';
import Responsive from '../components/common/Responsive';
import {Helmet} from 'react-helmet-async';

function AboutWritePage(props) {
  return (
    <Responsive>
      <Helmet><title>ABOUT 글쓰기 - DEVOG</title></Helmet>
      <HeaderContainer/>
      <EditorContainer/>
      <ButtonContainer/>
    </Responsive>
  );
}

export default AboutWritePage;
