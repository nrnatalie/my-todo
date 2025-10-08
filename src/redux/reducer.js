import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actions";

let nextId = 1;

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: nextId++, text: action.text, completed: false }];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
