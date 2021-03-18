import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register} from '../../module/auth';
import AuthForm from '../../components/auth/AuthForm';

function RegisterForm(props) {
  const dispatch = useDispatch();
  const {form, auth, authError} = useSelector(({auth}) => ({
    form     : auth.register,
    auth     : auth.auth,
    authError: auth.authError
  }));

  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form: 'register',
        key : name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const {username, password, passwordConfirm} = form;
    if (password !== passwordConfirm) {
      console.log('입력한 비밀번호와 다릅니다.');
      return;
    }
    dispatch(register({username, password}));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    console.log(auth)
    if (authError) {
      console.log('오류!');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm type='register' form={form} onChange={onChange} onSubmit={onSubmit}/>
  );
}

export default RegisterForm;