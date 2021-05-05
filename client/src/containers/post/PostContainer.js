import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PostViewer from '../../components/post/PostViewer';
import {readPost, unloadPost} from '../../module/post';
import PostActionButton from '../../components/post/PostActionButton';
import {setOriginalPost} from '../../module/write';

function PostContainer({match, history}) {
  const dispatch = useDispatch();
  const {post, error, loading, user} = useSelector(({post, loading, user}) => ({
    post   : post.post,
    error  : post.error,
    loading: loading['post/READ_POST'],
    user   : user.user
  }));

  const {postId} = match.params;
  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  useEffect(() => {
    dispatch(readPost(postId));

    return () => {
      dispatch(unloadPost());
    };

  }, [dispatch, postId]);

  return (
    <PostViewer
      post={post}
      error={error}
      loading={loading}
      actionButton={<PostActionButton onEdit={onEdit}/>}
      ownPost={user && user.id === post && post.id}
    />
  );
}

export default withRouter(PostContainer);
