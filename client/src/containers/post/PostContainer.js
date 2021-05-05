import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PostViewer from '../../components/post/PostViewer';
import {readPost, unloadPost} from '../../module/post';
import PostActionButton from '../../components/post/PostActionButton';
import {setOriginalPost} from '../../module/write';
import {removePost} from '../../lib/api/posts';

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
  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
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
      actionButton={<PostActionButton onEdit={onEdit} onRemove={onRemove}/>}
      ownPost={user && user.id === post && post.id}
    />
  );
}

export default withRouter(PostContainer);
