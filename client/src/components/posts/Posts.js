import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const Container = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

function Posts({posts}) {
  return (
    <Container>{posts?.map(item => <p key={item._id}>{item.title}</p>)}</Container>
  );
}

export default Posts;
