import React, {useCallback, useState} from 'react';
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

const TagItem = React.memo(({tag, onRemove}) => <Tag onClick={() => onRemove(tag)}>{tag}</Tag>);

const Tags = React.memo(({tags, onRemove}) => (
  <TagList>
    {tags.map(tag => <TagItem key={tag} tag={tag} onRemove={onRemove}/>)}
  </TagList>
));


function TagBox(props) {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(tag => {
    if (!tag) return;
    if (localTags.includes(tag)) return;
    setLocalTags([...localTags, tag]);
  }, [localTags]);

  const onRemove = useCallback(tag => {
    setLocalTags(localTags.filter(t => t !== tag));
  }, [localTags]);

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    insertTag(input.trim());
    setInput('');
  }, [input, insertTag]);

  return (
    <Container>
      <Title>태그</Title>
      <Form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} type="text"/>
        <Button>추가</Button>
      </Form>
      <Tags onRemove={onRemove} tags={localTags}/>
    </Container>
  );
}

export default TagBox;
