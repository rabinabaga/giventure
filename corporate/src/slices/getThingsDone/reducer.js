import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  title: "",
  steps: [{
    step_title:"",
    id:uuidv4(), 
  }],
};

const newTaskSlice = createSlice({
    name:"NewTask",
     initialState,
    reducers:{
        addStep:(state, action) => {
            state.steps = state.steps.push(action.payload)
        },
        addTitle:(state,action) => {
            state.title = action.payload
        }
    }
})

export const { addStep, addTitle } = newTaskSlice.actions;
export default newTaskSlice.reducer;
