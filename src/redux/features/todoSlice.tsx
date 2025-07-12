import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "asdfg",
      title: "Initial Pro",
      description: "Lorem ipsum doler sit",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
