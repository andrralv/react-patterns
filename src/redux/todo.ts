import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number,
  text: string,
  completed: boolean
}

const initialState: Array<Todo> = [{
  id: 1,
  text: 'First Todo!',
  completed: false
}];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.length + 1,
        text: action.payload,
        completed: false
      };
      state.push(newTodo); // mutable because of immer
    },
    toggle: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        const index = state.findIndex(todo => todo.id === action.payload);
        if (index !== -1) {
          state[index] = updatedTodo;
        }
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { add, toggle, remove } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;