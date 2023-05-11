import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { TodoItem } from '../types/typeTodoItem';

type Props = {
  id: string;
  value: string;
  setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
};

const TodoListItem = ({ id, value, setTodoList }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const deleteList = (id: string) => {
    setTodoList(prevTodoList => prevTodoList.filter(item => item.id !== id));
  };

  const handleInputValue = () => {
    setIsEdit(true);
  };

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const updateList = (id: string) => {
    setTodoList(prevTodoList =>
      prevTodoList.map(item =>
        item.id === id ? { ...item, value: editValue } : item
      )
    );
    setIsEdit(false);
  };

  const cancelEdit = () => {
    setTodoList(prevTodoList => prevTodoList.map(item => item));
    setIsEdit(false);
  };

  return (
    <TodoListItemWrap>
      <TodoText>
        <input type="checkbox" />
        {!isEdit ? (
          <span>{value}</span>
        ) : (
          <input value={editValue} onChange={changeInputValue} />
        )}
      </TodoText>
      {!isEdit ? (
        <HandleBtn>
          <button onClick={handleInputValue}>수정</button>
          <button onClick={() => deleteList(id)}>삭제</button>
        </HandleBtn>
      ) : (
        <HandleBtn>
          <button onClick={() => updateList(id)}>확인</button>
          <button onClick={cancelEdit}>취소</button>
        </HandleBtn>
      )}
    </TodoListItemWrap>
  );
};

export default TodoListItem;

const TodoListItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #aaaaaa;
  list-style: none;
`;

const TodoText = styled.div`
  input {
    margin-right: 12px;
    padding: 8px;
  }
`;

const HandleBtn = styled.div`
  button {
    margin: 4px;
    padding: 8px;
  }
`;
