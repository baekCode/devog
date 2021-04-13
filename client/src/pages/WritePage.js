import React from 'react';
import Editor from '../components/write/Editor';
import HeaderContainer from '../containers/common/HeaderContainer';

function WritePage(props) {
  return (
    <>
      <HeaderContainer/>
      <Editor/>
    </>
  );
}

export default WritePage;