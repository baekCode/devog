import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import About from '../../components/about/About';
import {useDispatch, useSelector} from 'react-redux';
import {readAbout, setOriginalAbout, unloadAbout} from '../../module/about';
import ActionButton from '../../components/about/ActionButton';

function AboutContainer({history}) {
  const dispatch = useDispatch();
  const {about, error, loading, user} = useSelector(({about, loading, user}) => ({
    about  : about.about,
    error  : about.error,
    loading: loading['about/READ_ABOUT'],
    user   : user.user
  }));

  const onEdit = () => {
    dispatch(setOriginalAbout(about));
    history.push('/about-write');
  };
  useEffect(() => {

    dispatch(readAbout());

    return () => {
      dispatch(unloadAbout());
    };

  }, [dispatch]);
  return (
    <About about={about} error={error} loading={loading} userInfo={user}
           actionButton={<ActionButton onEdit={onEdit}/>}/>
  );
}

export default withRouter(AboutContainer);
