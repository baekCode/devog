import React, {useRef, useEffect} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/palette';
import Responsive from '../common/Responsive';

const Container = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-top: 3rem;
`;
const TitleInput = styled.input`
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
`;
const QuillWrapper = styled.div`
  .ql-editor {
    min-height: 320px;
    padding: 0;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .ql-editor.ql-blank::before {
    left: 0;
  }
`;

function Editor({title, body, onChangeField}) {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  const onChangeTitle = e => onChangeField({key: 'title', value: e.target.value});
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme      : 'bubble',
      placeholder: '내용을 작성하세요...',
      modules    : {
        toolbar: [
          [{header: '1'}, {header: '2'}],
          ['bold', 'italic', 'underline', 'strike'],
          [{list: 'ordered'}, {list: 'bullet'}],
          ['blockquote', 'code-block', 'link', 'image']
        ]
      }
    });

    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({key: 'body', value: quill.root.innerHTML});
      }
    });
  }, [onChangeField]);

  return (
    <Container>
      <TitleInput placeholder="제목을 입력하세요." onChange={onChangeTitle} value={title}/>
      <QuillWrapper>
        <div ref={quillElement}/>
      </QuillWrapper>
    </Container>
  );
}

export default Editor;
