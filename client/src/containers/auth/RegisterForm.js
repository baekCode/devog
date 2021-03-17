import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeFiled, initalizeForm} from '../../module/auth';
import AuthForm from '../../components/auth/AuthForm';

function RegisterForm(props) {
  const dispatch = useDispatch();
  const {form} = useSelector(({auth}) => ({
    form: auth.register
  }));

  const onChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeFiled({
        form: 'register',
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
    dispatch(initalizeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm type='register' form={form} onChange={onChange} onSubmit={onSubmit}/>
  );
}

export default RegisterForm;