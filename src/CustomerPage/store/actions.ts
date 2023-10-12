import { _CREATE_TODO, _DELETE_TODO } from "./common";

export const act_delete = (i: number) => {
  return { type: _DELETE_TODO, payload: "", index: i };
};

export const act_create = (value: string) => {
  return { type: _CREATE_TODO, payload: value };
};
