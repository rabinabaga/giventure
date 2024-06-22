import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getTodoProjects as getTodoProjectsApi,//actual to dos 
  addNewTodo as addNewTodoApi,
  updateTodo as updateTodoApi,
  deleteTodo as deleteTodoApi,
  getTheProjects as getTheProjectsApi,
  addNewProject as addNewProjectApi,
} from "../../helpers/fakebackend_helper";

export const getTodoProjects = createAsyncThunk("todos/getTodoProjects", async () => {
  try {
    const response = getTodoProjectsApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async (todo) => {
  try {
    const response = addNewTodoApi(todo);
    const data = await response;
    toast.success("Todo Added Successfully", { autoClose: 3000 });
    return data;
  } catch (error) {
    toast.error("Todo Added Failed", { autoClose: 3000 });
    return error;
  }
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  try {
    const response = updateTodoApi(todo);
    const data = await response;
    toast.success("Todo Updated Successfully", { autoClose: 3000 });
    return data;
  } catch (error) {
    toast.error("Todo Updated Failed", { autoClose: 3000 });
    return error;
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (todo) => {
  try {
    const response = deleteTodoApi(todo);
    const data = await response;
    toast.success("Todo Delete Successfully", { autoClose: 3000 });
    return data;
  } catch (error) {
    toast.error("Todo Delete Failed", { autoClose: 3000 });
    return error;
  }
});

export const getTheProjects = createAsyncThunk("todos/getTheProjects", async () => {
  try {
    const responseData = getTheProjectsApi();
    return responseData;
  } catch (error) {
    return error;
  }
});

export const addNewProject = createAsyncThunk("todos/addNewProject", async (project) => {
  try {
    const response = addNewProjectApi(project);
    const data = await response;
    toast.success("Project Added Successfully", { autoClose: 3000 });
    return data;
  } catch (error) {
    toast.error("Project Added Failed", { autoClose: 3000 });
    return error;
  }
});