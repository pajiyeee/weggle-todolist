import { useState } from 'react';
import styled from '@emotion/styled';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { TodoItem } from './types/typeTodoItem';
import reset from '../style/Reset';
import { Global } from '@emotion/react';

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  return (
    <>
      <Global styles={reset} />
      <TodoWrap>
        <Title>투두리스트</Title>
        <TodoInput setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </TodoWrap>
    </>
  );
};

export default Todo;

const TodoWrap = styled.div`
  width: 90%;
  max-width: 1600px;
  min-width: 300px;
  margin: 120px 30px;
  padding: 60px;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 28px;
`;
