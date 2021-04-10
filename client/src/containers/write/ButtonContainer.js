import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {writePost} from '../../module/write';
import ButtonArea from '../../components/write/ButtonArea';

function ButtonContainer({history}) {
  const dispatch = useDispatch();
  const {title, body, tags, post, error} = useSelector(({write}) => ({
    title: write.title,
    body : write.body,
    tags : write.tags,
    post : write.post,
    error: write.error,
  }));
  const onPublish = () => {
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
    <ButtonArea onPublish={onPublish} onCancel={onCancel}/>
  );
}

export default withRouter(ButtonContainer);
