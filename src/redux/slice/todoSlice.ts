import { createSlice } from '@reduxjs/toolkit';
import { mockedBoard } from '@/_mock/board';
import { AppThunk } from '../store';

interface TodoState {
  board: {
    tasks: {
      [key: string]: {
        id: string;
        name: string;
        completed: boolean;
      };
    };
    columns: {
      [key: string]: {
        id: string;
        name: string;
        taskIds: string[];
      };
    };
    columnOrder: string[];
  };
}

const initialState: TodoState = {
  board: {
    tasks: {},
    columns: {},
    columnOrder: [],
  },
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getBoardSuccess(state, action) {
      const { tasks, columns, columnOrder } = action.payload;
      state.board = {
        tasks,
        columns,
        columnOrder,
      };
    },

    persistCard(state, action) {
      const columns = action.payload;
      state.board.columns = columns;
    },

    changeCompletedTask(state, action) {
      const taskId = action.payload;
      state.board.tasks[taskId].completed =
        !state.board.tasks[taskId].completed;
    },

    addTask(state, action) {
      const task = action.payload;

      state.board.tasks[task.id] = task;
      if (task.completed) {
        state.board.columns['done-column'].taskIds.push(task.id);
      } else {
        state.board.columns['todo-column'].taskIds.push(task.id);
      }
    },

    deleteTask(state, action) {
      const { taskId, columnId } = action.payload;

      state.board.columns[columnId].taskIds = state.board.columns[
        columnId
      ].taskIds.filter((id) => id !== taskId);
      delete state.board.tasks[taskId];
    },

    updateTaskName(state, action) {
      const { name, taskId } = action.payload;

      state.board.tasks[taskId].name = name;
    },

    eraseAllTaksByColumn(state, action) {
      const { columnId } = action.payload;

      state.board.columns[columnId].taskIds.forEach((taskId) => {
        delete state.board.tasks[taskId];
      });
      state.board.columns[columnId].taskIds = [];
    },
  },
});
// Acions
export const {
  getBoardSuccess,
  persistCard,
  changeCompletedTask,
  addTask,
  deleteTask,
  updateTaskName,
  eraseAllTaksByColumn,
} = todoSlice.actions;

export const getBoard = (): AppThunk => (dispatch) => {
  const { tasks, columns, columnOrder } = mockedBoard;
  dispatch(getBoardSuccess({ tasks, columns, columnOrder }));
};

export default todoSlice.reducer;
