import { nanoid } from "@reduxjs/toolkit";

export const add = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload,
  };
  state.todos.push(todo);
};

export const remove = (state, action) => {
  state.todos = state.todos.filter((todo) => {
    return todo.id !== action.payload;
  });
};
