import { createSlice, nanoid } from "@reduxjs/toolkit";
import { add, remove } from "./todoController";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: add,

    removeTodo: remove,
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
