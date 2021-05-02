import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import {Link} from 'react-router-dom';
import palette from '../../lib/palette';

const Container = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const Item = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 1px solid ${palette.gray[2]};

  &:first-child {
    padding-top: 0;
    border-top: 0;
  }

`;
const ItemTitle = styled.h2`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    color: ${palette.gray[6]}
  }
`;
const ItemInfo = styled.div`
  color: ${palette.gray[6]};

  span + span:before {
    padding-left: 0.25rem;
    pading-right: 0.25rem;
    color: ${palette.gray[4]};
    content: '\\B7 ';
  }
`;
const ItemTags = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    display: inline-block;
    color: ${palette.cyan[7]};
    margin-right: 0.25rem;

    &:hover {
      color: ${palette.cyan[5]}
    }
  }
`;
const ItemBody = styled.div``;


const PostItem = React.memo(({item}) => (
  <Item>
    <Link to={`/@${item.user.username}/${item._id}`}> <ItemTitle>{item.title}</ItemTitle></Link>
    <ItemInfo>
      <span><b>{item.user.username}</b></span>
      <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
    </ItemInfo>
    <ItemTags>
      {item.tags.map(tag => <span key={tag}>#{tag}</span>)}
    </ItemTags>
    <ItemBody dangerouslySetInnerHTML={{__html: item.body}}/>
  </Item>
));

function Posts({posts}) {
  return (
    <Container>
      {posts?.map(item => <PostItem key={item._id} item={item}/>)}
    </Container>
  );
}

export default Posts;
