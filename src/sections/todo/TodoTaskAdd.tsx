import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import uuidv4 from '@/utils/uuidv4';
import {
  IconChecked,
  IconUnchecked,
  TodoTaskCardContainer,
} from './Todo.styles';

type TodoTaskAddProps = {
  onAddTask: (task: { id: string; name: string; completed: boolean }) => void;
};

export const TodoTaskAdd = ({ onAddTask }: TodoTaskAddProps) => {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);

  const clearAllStates = () => {
    setName('');
    setCompleted(false);
  };

  const handleKeyUpAddTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (name.trim() !== '') {
        onAddTask({ id: uuidv4(), name, completed });
      }
      clearAllStates();
    }
  };

  const handleClickAwayAddTask = () => {
    if (name.trim() !== '') {
      onAddTask({ id: uuidv4(), name, completed });
    }
    clearAllStates();
  };

  const handleChangeCompleted = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompleted(event.target.checked);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAwayAddTask}>
      <TodoTaskCardContainer>
        <label className="flex cursor-pointer p-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleChangeCompleted}
            className="hidden"
          />
          {completed ? <IconChecked /> : <IconUnchecked />}
        </label>
        <input
          value={name}
          placeholder="Editing an item"
          onKeyUp={handleKeyUpAddTask}
          onChange={(event) => setName(event.target.value)}
          className="placeholder:text-orange-400 outline-none"
        />
      </TodoTaskCardContainer>
    </ClickAwayListener>
  );
};
