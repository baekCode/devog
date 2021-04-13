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
const Tags = styled.div`
  margin-top: 0.5rem;

  span {
    marign-right: 0.5rem;
    color: ${palette.cyan[7]};

    :hover {
      color: ${palette.cyan[6]}
    }
  }
`;
const Body = styled.div`
  font-size: 1.2rem;
  color: ${palette.gray[8]}
`;

function PostViewer(props) {
  return (
    <Container>
      <Head>
        <Title children={'타이틀'}/>
        <Description>
          <span>유저네임</span>
          <span>{new Date().toLocaleDateString()}</span>
        </Description>
        <Tags>
          <span># 태그1</span>
          <span># 태그2</span>
        </Tags>
      </Head>
      <Body dangerouslySetInnerHTML={{__html: '<p>테스트 내용</p>'}}/>
    </Container>
  );
}

export default PostViewer;