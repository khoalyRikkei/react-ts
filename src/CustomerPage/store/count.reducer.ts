interface ActionType {
  type: string;
  name: string;
  payload?: { id: string; name: string };
}

export const countReducer = (state: number = 0, action: ActionType) => {
  console.log("Kiểm tra state", action, state);
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
  }
  return state;
};
