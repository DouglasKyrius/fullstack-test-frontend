import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  deleteTask,
  changeCompletedTask,
  persistCard,
  updateTaskName,
} from '@/redux/slice/todoSlice';
import {
  IconChecked,
  IconUnchecked,
  TodoTaskCardContainer,
  TodoDeleteButton,
  TodoTaskName,
} from './Todo.styles';

type TodoTaskCardProps = {
  task: {
    id: string;
    name: string;
    completed: boolean;
  };
  columnId: string;
  index: number;
};

export const TodoTaskCard = ({ task, columnId, index }: TodoTaskCardProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(task.name);
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.todo);

  const handleCompletedChange = () => {
    const destination =
      columnId === 'todo-column' ? 'done-column' : 'todo-column';
    const columnSource = board.columns[columnId];
    const columnDestination = board.columns[destination];

    const sourceTaskIds = [...columnSource.taskIds];
    sourceTaskIds.splice(index, 1);
    const updatedSource = {
      ...columnSource,
      taskIds: sourceTaskIds,
    };

    const destinationTaskIds = [...columnDestination.taskIds];
    destinationTaskIds.push(task.id);
    const updatedDestination = {
      ...columnDestination,
      taskIds: destinationTaskIds,
    };

    dispatch(changeCompletedTask(task.id));
    dispatch(
      persistCard({
        ...board.columns,
        [updatedSource.id]: updatedSource,
        [updatedDestination.id]: updatedDestination,
      })
    );
  };

  const handleClickAwayEditTaskName = () => {
    setIsEditable(false);
    if (name.trim() !== '') {
      if (task.name === name) return;

      dispatch(updateTaskName({ name, taskId: task.id }));
    } else {
      setName(task.name);
    }
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ taskId: task.id, columnId }));
  };

  return (
    <TodoTaskCardContainer>
      <label className="flex cursor-pointer p-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCompletedChange}
          className="hidden"
        />
        {task.completed ? <IconChecked /> : <IconUnchecked />}
      </label>
      <div className="flex justify-between w-full">
        <ClickAwayListener onClickAway={handleClickAwayEditTaskName}>
          {isEditable ? (
            <textarea
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="text-left"
            />
          ) : (
            <TodoTaskName className="" onClick={() => setIsEditable(true)}>
              {name}
            </TodoTaskName>
          )}
        </ClickAwayListener>

        <TodoDeleteButton onClick={handleDeleteTask}>delete</TodoDeleteButton>
      </div>
    </TodoTaskCardContainer>
  );
};
