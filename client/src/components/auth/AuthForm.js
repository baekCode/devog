import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/palette';
import Button from '../common/Button';

const Container = styled.div``;
const Title = styled.h3`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${palette.gray[8]}
`;
const Form = styled.form``;
const Input = styled.input`
  width: 100%;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  outline: none;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]}
  }

  & + & {
    margin-top: 1rem;
  }
`;
const FormButton = styled(Button)`
  margin-top: 1rem;
`;
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
`;
const Anchor = styled(Link)`
  color: ${palette.gray[6]};

  &:hover {
    color: ${palette.gray[9]}
  }
`;

const titleMap = {
  login : '로그인',
  register : '회원가입'
}

function AuthForm({type = 'login', form, onChange, onSubmit}) {
  const title = titleMap[type];
  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input autoComplete="username" name="username" placeholder="아이디" onChange={onChange} value={form.username}/>
        <Input autoComplete="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password}/>
        {type === 'register' && <Input autoComplete="new-password" name="passwordConfirm" placeholder="비밀번호 확인" type="password" onChange={onChange} value={form.passwordConfirm}/>}
        <FormButton cyan fullWidth children="로그인"/>
      </Form>
      <Footer>
        {type === 'login' ? <Anchor to="/register">회원가입</Anchor> : <Anchor to="/login">로그인</Anchor>}
      </Footer>
    </Container>
  );
}

export default AuthForm;