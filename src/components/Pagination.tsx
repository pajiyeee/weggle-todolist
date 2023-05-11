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
          prev
        </PageBtn>
      )}

      {setNumPages.map((key, index) => (
        <PageBtn key={key} onClick={() => clickPage(index)}>
          {index + 1}
        </PageBtn>
      ))}

      {todoListTotal > 0 && (
        <PageBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>
          next
        </PageBtn>
      )}
    </PaginationWrap>
  );
};

export default Pagination;

const PaginationWrap = styled.div`
  margin: 20px auto;
`;

const PageBtn = styled.button`
  margin: 10px;
  padding: 8px;
`;
