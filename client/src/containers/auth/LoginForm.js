import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeFiled, initalizeForm} from '../../module/auth';
import AuthForm from '../../components/auth/AuthForm';

function LoginForm(props) {
  const dispatch = useDispatch();
  const {form} = useSelector(({auth}) => ({
    form: auth.login
  }));

  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeFiled({
        form: 'login',
        key : name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log({e});
  };

  useEffect(() => {
    dispatch(initalizeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm type='login' form={form} onChange={onChange} onSubmit={onSubmit}/>
  );
}

export default LoginForm;