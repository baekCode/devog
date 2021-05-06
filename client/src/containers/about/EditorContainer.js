import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {changeField, readAbout} from '../../module/about';
import Editor from '../../components/write/Editor';

function EditorContainer({match, history}) {
  const dispatch = useDispatch();
  const {title, body, about} = useSelector(({about}) => ({
    title: about.title,
    body : about.body,
    about: about.about
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(initialize());
  //   };
  // }, [dispatch]);
  useEffect(() => {
    dispatch(readAbout());
  }, [dispatch, body]);

  return (
    <>
      <Editor onChangeField={onChangeField} title={title} body={body}/>
    </>
  );
}

export default withRouter(EditorContainer);
