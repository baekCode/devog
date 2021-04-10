import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import {Link} from 'react-router-dom';

const Container = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const PostItem = React.memo(({item}) => (<Link to={`/posts/${item._id}`}>{item.title}</Link>));

function Posts({posts}) {
  return (
    <Container>{posts?.map(item => <PostItem key={item._id} item={item}/>)}</Container>
  );
}

export default Posts;
