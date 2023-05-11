import { useState, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import TodoListItem from './TodoListItem';
import Pagination from './Pagination';
import { TodoItem } from '../types/typeTodoItem';

type Props = {
  todoList: TodoItem[];
  setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
};

const TodoList = ({ todoList, setTodoList }: Props) => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;

  return (
    <TodoListItems>
      {todoList.slice(offset, offset + limit).map(item => (
        <TodoListItem
          key={item.id}
          id={item.id}
          value={item.value}
          setTodoList={setTodoList}
        />
      ))}
      <Pagination
        todoListTotal={todoList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </TodoListItems>
  );
};

export default TodoList;

const TodoListItems = styled.ul`
  width: 100%;
  padding: 0;
`;
