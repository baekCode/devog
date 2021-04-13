import React from 'react';
import PostViewer from '../components/post/PostViewer';
import HeaderContainer from '../containers/common/HeaderContainer';

function PostPage(props) {
  return (
    <>
      <HeaderContainer/>
      <PostViewer/>
    </>
  );
}

export default PostPage;