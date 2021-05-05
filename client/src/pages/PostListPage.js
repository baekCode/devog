import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostsContainer from '../containers/posts/PostsContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

function PostListPage(props) {
  return (
    <>
      <HeaderContainer/>
      <PostsContainer/>
      <PaginationContainer/>
    </>
  );
}

export default PostListPage;
