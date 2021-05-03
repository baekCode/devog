import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostsContainer from '../containers/posts/PostsContainer';

function PostListPage(props) {
  return (
    <>
      <HeaderContainer/>
      <PostsContainer/>
    </>
  );
}

export default PostListPage;
