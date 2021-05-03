import * as qs from 'qs';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getPosts} from '../../module/posts';
import Posts from '../../components/posts/Posts';

function PostListContainer({location}) {
  const dispatch = useDispatch();
  const {posts, error, loading, user} = useSelector(({posts, loading, user}) => ({
    posts  : posts.posts,
    error  : posts.error,
    loading: loading['posts/POSTS'],
    user   : user.user
  }));

  useEffect(() => {
    const {tag, username, page} = qs.parse(location.search, {ignoreQueryPrefix: true});
    dispatch(getPosts({tag, username, page}));
  }, [dispatch, location.search]);
  return (
    <Posts loading={loading} error={error} posts={posts} showWriteButton={user}/>
  );
}

export default withRouter(PostListContainer);