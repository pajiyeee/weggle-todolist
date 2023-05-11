import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

type Props = {
  todoListTotal: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const Pagination = ({ todoListTotal, limit, page, setPage }: Props) => {
  const numPages = Math.ceil(todoListTotal / limit);
  const setNumPages = new Array(numPages).fill(0);

  const clickPage = (index: number) => {
    setPage(index + 1);
  };

  return (
    <PaginationWrap>
      {todoListTotal > 0 && (
        <PageBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
          {` <`}
        </PageBtn>
      )}

      {setNumPages.map((key, index) => (
        <PageBtn key={key} onClick={() => clickPage(index)}>
          {index + 1}
        </PageBtn>
      ))}

      {todoListTotal > 0 && (
        <PageBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>
          {`>`}
        </PageBtn>
      )}
    </PaginationWrap>
  );
};

export default Pagination;

const PaginationWrap = styled.div`
  margin: 20px auto;
  align-items: center;
`;

const PageBtn = styled.button`
  text-align: center;
  margin: 20px 12px 0 12px;
  padding: 0 12px;
  border: none;
  background-color: transparent;
  font-size: 22px;
`;
