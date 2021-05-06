import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updateAbout, writeAbout} from '../../module/about';
import ButtonArea from '../../components/about/ButtonArea';

function ButtonContainer({history}) {
  const dispatch = useDispatch();
  const {title, body, about, error, originalAboutId} = useSelector(({about}) => ({
    title          : about.title,
    body           : about.body,
    about          : about.about,
    error          : about.error,
    originalAboutId: about.originalAboutId
  }));
  const onPublish = () => {
    if (originalAboutId) {
      dispatch(updateAbout({id: originalAboutId, title, body}));
      return;
    }
    dispatch(writeAbout({title, body}));
  };
  const onCancel = () => {
    history.goBack();
  };
  useEffect(() => {
    console.log('dd', originalAboutId);
    console.log('aa', about);
    // if (about) {
    //   history.push('/about');
    // }
    if (error) {
      console.log(error);
    }
  }, [history, about, error]);
  return (
    <ButtonArea onPublish={onPublish} onCancel={onCancel} isEdit={!!originalAboutId}/>
  );
}

export default withRouter(ButtonContainer);
