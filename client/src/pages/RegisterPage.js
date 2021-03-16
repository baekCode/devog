import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

function RegisterPage(props) {
  return (
    <AuthTemplate>
      <AuthForm/>
    </AuthTemplate>
  );
}

export default RegisterPage;