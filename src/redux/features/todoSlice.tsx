import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "asdfg",
      title: "Initial Pro",
      description: "Lorem ipsum doler sit",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default todoSlice.reducer;
