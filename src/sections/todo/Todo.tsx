import { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TodoBG } from '@/components/background-svg';
import { TodoColumn } from './TodoColumn';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  changeCompletedTask,
  getBoard,
  persistCard,
} from '@/redux/slice/todoSlice';
import { Paragraph, Title } from './Todo.styles';

export const Todo = () => {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => state.todo);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  const handleOnDragEnd = (result: DropResult) => {
    setIsDragging(false);
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const columnSource = board.columns[source.droppableId];
    const columnDestination = board.columns[destination.droppableId];

    if (columnSource.id === columnDestination.id) {
      const updatedTaskIds = [...columnSource.taskIds];
      updatedTaskIds.splice(source.index, 1);
      updatedTaskIds.splice(destination.index, 0, draggableId);

      const updatedColumn = {
        ...columnSource,
        taskIds: updatedTaskIds,
      };

      dispatch(
        persistCard({
          ...board.columns,
          [updatedColumn.id]: updatedColumn,
        })
      );
      return;
    }

    const sourceTaskIds = [...columnSource.taskIds];
    sourceTaskIds.splice(source.index, 1);
    const updatedSource = {
      ...columnSource,
      taskIds: sourceTaskIds,
    };

    const destinationTaskIds = [...columnDestination.taskIds];
    destinationTaskIds.splice(destination.index, 0, draggableId);
    const updatedDestination = {
      ...columnDestination,
      taskIds: destinationTaskIds,
    };

    dispatch(changeCompletedTask(draggableId));
    dispatch(
      persistCard({
        ...board.columns,
        [updatedSource.id]: updatedSource,
        [updatedDestination.id]: updatedDestination,
      })
    );
  };

  return (
    <>
      <div className="text-center relative">
        <div className="pt-20">
          <div className="grid justify-center">
            <Title>To-do List</Title>
          </div>
          <div className="mt-10" />
          <Paragraph>
            Drag and drop to set your main priorities, check <br />
            when done and create what&apos;s new.
          </Paragraph>
        </div>
        <div className="absolute left-0 -top-12 -z-50 w-full">
          <TodoBG />
        </div>
      </div>
      <div className="mt-44" />

      <DragDropContext
        onDragEnd={handleOnDragEnd}
        onDragStart={() => setIsDragging(true)}
      >
        <div className="flex flex-col gap-y-10 justify-center items-center lg:block lg:text-center">
          {!board.columnOrder.length ? (
            <h1>loading...</h1>
          ) : (
            board.columnOrder.map((columnId) => (
              <TodoColumn
                isDragging={isDragging}
                key={columnId}
                column={board.columns[columnId]}
              />
            ))
          )}
        </div>
      </DragDropContext>
      <div className="mt-44" />
    </>
  );
};
