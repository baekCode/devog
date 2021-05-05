import React from 'react';
import qs from 'qs';
import styled from 'styled-components';
import Button from '../common/Button';

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  width: 300px;
  margin : 0 auto 2rem;
`;
const PageNumber = styled.div`
  
`;

const buildLink = ({username, tag, page}) => {
  const query = qs.stringify({tag, page});
  return username ? `/@${username}?${query}` : `/?${query}`;
};

function Pagination({page, lastPage, username, tag}) {
  return (
    <Container>
      <Button disabled={page === 1} to={page === 1 ? undefined : buildLink({username, tag, page: page - 1})}>이전</Button>
      <PageNumber>{page}</PageNumber>
      <Button disabled={page === lastPage}
              to={page === lastPage ? undefined : buildLink({username, tag, page: page + 1})}>다음</Button>
    </Container>
  );
}

export default Pagination;