import { combineReducers } from "redux";
import { countReducer } from "./count.reducer";
import { todosReducer } from "./todo.reducer";

export const reducers = combineReducers({ countReducer, todosReducer });

//  {countReducer: countReducer, todosReducer: todosReducer}

// {id, name, } ==> {id:id, name:name}
