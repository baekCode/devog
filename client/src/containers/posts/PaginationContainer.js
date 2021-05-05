import * as qs from 'qs';
import React from 'react';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Pagination from '../../components/posts/Pagination';

function PaginationContainer({location}) {
  const {lastPage, posts, loading} = useSelector(({posts, loading}) => ({
    lastPage: posts.lastPage,
    posts   : posts.posts,
    loading : loading['posts/POSTS'],
  }));

  if (!posts || loading) return null;

  const {tag, username, page = 1} = qs.parse(location.search, {ignoreQueryPrefix: true});

  return (
    <Pagination tag={tag} username={username} lastPage={lastPage} page={parseInt(page, 10)}/>
  );
}

export default withRouter(PaginationContainer);