import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updatePost, writePost} from '../../module/write';
import ButtonArea from '../../components/write/ButtonArea';

function ButtonContainer({history}) {
  const dispatch = useDispatch();
  const {title, body, tags, post, error, originalPostId} = useSelector(({write}) => ({
    title         : write.title,
    body          : write.body,
    tags          : write.tags,
    post          : write.post,
    error         : write.error,
    originalPostId: write.originalPostId
  }));
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({id: originalPostId, title, body, tags}));
      return;
    }
    dispatch(writePost({title, body, tags}));
  };
  const onCancel = () => {
    history.goBack();
  };
  useEffect(() => {
    if (post) {
      const {_id, user} = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (error) {
      console.log(error);
    }
  }, [history, post, error]);
  return (
    <ButtonArea onPublish={onPublish} onCancel={onCancel} isEdit={!!originalPostId}/>
  );
}

export default withRouter(ButtonContainer);
