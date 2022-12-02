import { Droppable, Draggable } from 'react-beautiful-dnd';
import { HTMLAttributes } from 'react';
import { Button } from '@/components/button';
import { TodoTaskCard } from './TodoTaskCard';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  TodoCardSubTitle,
  TodoCardTitle,
  TodoColumnContainer,
} from './Todo.styles';
import { addTask, eraseAllTaksByColumn } from '@/redux/slice/todoSlice';
import { TodoTaskAdd } from './TodoTaskAdd';

interface TodoColumnProps extends HTMLAttributes<HTMLDivElement> {
  column: {
    id: string;
    name: string;
    taskIds: string[];
  };
  isDragging: boolean;
}

export const TodoColumn = ({
  column,
  isDragging,
  ...other
}: TodoColumnProps) => {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.todo);
  const { id: columnId } = column;
  const isTodoColumn = columnId === 'todo-column';

  const handleEraseAll = () => {
    dispatch(eraseAllTaksByColumn({ columnId }));
  };

  const handleAddTask = (task: {
    id: string;
    name: string;
    completed: boolean;
  }) => {
    dispatch(addTask(task));
  };

  return (
    <TodoColumnContainer columnId={columnId} {...other}>
      <div className="text-center">
        {isTodoColumn ? (
          <>
            <TodoCardTitle>{column.name}</TodoCardTitle>
            <TodoCardSubTitle>
              Take a breath. <br />
              Start doing.
            </TodoCardSubTitle>
          </>
        ) : (
          <>
            <TodoCardTitle>{column.name}</TodoCardTitle>
            <TodoCardSubTitle>
              Congratulions!
              <p className="font-bold">
                You have done {column.taskIds.length} tasks
              </p>
            </TodoCardSubTitle>
          </>
        )}
      </div>
      <div className="mt-8" />

      <Droppable
        mode="standard"
        droppableId={columnId}
        direction="vertical"
        type="row"
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={
              snapshot.isDraggingOver ? { backgroundColor: 'lightcyan' } : {}
            }
          >
            {column.taskIds.map((taskId, index) => (
              <Draggable
                isDragDisabled={isDragging}
                key={taskId}
                draggableId={taskId}
                index={index}
              >
                {(draggableProvided) => (
                  <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <TodoTaskCard
                      task={board.tasks[taskId]}
                      columnId={columnId}
                      index={index}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {isTodoColumn ? <TodoTaskAdd onAddTask={handleAddTask} /> : null}

      <div className="w-[18.75rem] h-16 mx-auto mt-9">
        <Button isBlack onClick={handleEraseAll}>
          <span className="text-2xl">erase all</span>
        </Button>
      </div>
    </TodoColumnContainer>
  );
};
