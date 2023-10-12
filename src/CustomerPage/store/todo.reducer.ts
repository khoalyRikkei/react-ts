// array chứa nhiệm vụ

import { _CREATE_TODO, _DELETE_TODO } from "./common";

interface TodoAction {
    type: string;
    payload: string;
    index: number;
  }


export const todosReducer = (state: string[] = [], action: TodoAction) => {
    console.log(2222, action.type);
  
    switch (action.type) {
      case _CREATE_TODO:
        return [...state, action.payload];
      case "UPDATE":
        const newState = state.map((item, i) => {
          if (i === action.index) {
            return action.payload;
          }
          return item;
        });
        return newState;
      case _DELETE_TODO:
        const stateDelete = state.filter((item, i) => i !== action.index);
        return stateDelete;
    }
    return state;
  };