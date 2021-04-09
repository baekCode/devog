import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';

const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  border-top: 1px solid ${palette.gray[2]};
`;
const Title = styled.h4`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: ${palette.gray[9]}
`;
const Form = styled.form`
  overflow: hidden;
  display: flex;
  width: 250px;
  border: 1px solid ${palette.gray[9]}
  border-radius: 4px;
`;
const Button = styled.button`
  padding-right: 1rem;
  padding-left: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  border: none;
  background: ${palette.gray[8]};
  cursor: pointer;

  &:hover {
    background: ${palette.gray[6]};
  }
`;
const TagList = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[7]};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const TagItem = React.memo(({tag}) => <Tag>{tag}</Tag>);

const Tags = React.memo(({tags}) => (
  <TagList>
    {tags.map(tag => <TagItem key={tag} tag={tag}/>)}
  </TagList>
));


function TagBox(props) {
  return (
    <Container>
      <Title>태그</Title>
      <Form>
        <input type="text"/>
        <Button>추가</Button>
      </Form>
      <Tags tags={['TEST1', 'TEST2']}/>
    </Container>
  );
}

export default TagBox;
