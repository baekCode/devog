import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import Responsive from '../common/Responsive';

const Container = styled(Responsive)`
  padding-top: 5rem;
  margin-top: 3rem;
`;
const Head = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;
const Title = styled.h1`
  font-size: 3rem;
  line-heightl: 1.5;
`;
const Description = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span:before {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    color: ${palette.gray[5]};
    content: '\\B7'
  }
`;
const Body = styled.div`
  font-size: 1.2rem;
  color: ${palette.gray[8]}
`;

function About({actionButton, userInfo, about, error, loading}) {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <Container>존재하지 않는 내용입니다. @@TODO :: 몇초뒤에 메인으로 이동됩니다 라는걸 만들면 좋을듯, 또는 홈으로가기, 리스트로 가기, 뒤로가기 </Container>;
    }
    return <Container>에러가 발생했습니다. @@TODO :: 몇초뒤에 메인으로 이동됩니다 라는걸 만들면 좋을듯, 또는 홈으로가기, 리스트로 가기, 뒤로가기 </Container>;
  }

  if (loading || !about) return null;

  const {title, body, user} = about;

  return (
    <Container>
      <Head>
        <Title children={title}/>
        <Description>
          <span>{user.username}</span>
        </Description>
      </Head>
      {userInfo?._id === about?.user._id && actionButton}
      <Body dangerouslySetInnerHTML={{__html: body}}/>
    </Container>
  );
}

export default About;