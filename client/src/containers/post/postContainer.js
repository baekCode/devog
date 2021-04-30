import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PostViewer from '../../components/post/PostViewer';
import {readPost, unloadPost} from '../../module/post';

function PostContainer({match}) {
  const dispatch = useDispatch();
  const {post, error, loading} = useSelector(({post, loading}) => ({
    post   : post.post,
    error  : post.error,
    loading: loading['post/READ_POST']
  }));

  const {postId} = match.params;

  useEffect(() => {
    dispatch(readPost(postId));

    return () => {
      dispatch(unloadPost());
    };

  }, [dispatch, postId]);

  return (
    <PostViewer/>
  );
}

export default withRouter(PostContainer);
