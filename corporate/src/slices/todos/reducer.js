import { createSlice } from "@reduxjs/toolkit";
import {
  getTodos,
  getTodoProjects,addNewTodo,
  updateTodo,
  deleteTodo,
  getTheProjects,
  addNewProject,
} from "./thunk";
export const initialState = {
  todos: [],
  projects: [],
  error: {},
};

const TodosSlice = createSlice({
  name: 'TodosSlice',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoProjects.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.todos = action.payload;
    });
    builder.addCase(getTodoProjects.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.todos.unshift(action.payload);
    });
    builder.addCase(addNewTodo.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id.toString() === action.payload.id.toString()
          ? { ...todo, ...action.payload }
          : todo
      );
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(
        todo => (todo.id + "") !== (action.payload + "")
      );
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(getTheProjects.pending, (state) => {
      console.log(" pendingprojects");
    });
    builder.addCase(getTheProjects.fulfilled, (state, action) => {
      console.log(action.payload, " fulfilled projects");
      state.projects = action.payload;
    });
    builder.addCase(getTheProjects.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(addNewProject.fulfilled, (state, action) => {
      console.log("action.payload", action.payload);
      state.projects.unshift(action.payload);
    });
    builder.addCase(addNewProject.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
  }
});

export default TodosSlice.reducer;