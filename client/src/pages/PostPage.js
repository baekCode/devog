import React from 'react';
import PostViewer from '../components/post/PostViewer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostContainer from '../containers/post/postContainer';

function PostPage(props) {
  return (
    <>
      <HeaderContainer/>
      <PostContainer/>
    </>
  );
}

export default PostPage;
