import { useState, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';
import { TodoItem } from '../types/typeTodoItem';

type Props = {
  setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
};

const TodoInput = ({ setTodoList }: Props) => {
  const uuid = uuidv4();

  const [inputValue, setInputValue] = useState<string>('');

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const createList = (inputValue: string) => {
    setTodoList(prevTodoList => [
      { id: uuid, value: inputValue },
      ...prevTodoList,
    ]);
  };

  const addList = () => {
    createList(inputValue);
    setInputValue('');
  };

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addList();
    }
  };

  return (
    <AddTodoWrap>
      <AddTodoInput
        type="text"
        placeholder="투두리스트를 추가해주세요."
        value={inputValue}
        onChange={e => changeInputValue(e)}
        onKeyPress={e => pressEnter(e)}
      />
      <AddTodoBtn onClick={addList}>추가</AddTodoBtn>
    </AddTodoWrap>
  );
};

export default TodoInput;

const AddTodoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AddTodoInput = styled.input`
  width: 100%;
  height: 52px;
  margin-right: 6px;
  border: solid 1px #cccccc;
  background-color: none;
`;

const AddTodoBtn = styled.button`
  width: 80px;
  height: 52px;
  border: none;
  background-color: #ffd220;
  color: #111111;
`;
