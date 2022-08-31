export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action", action);
  console.log("Prev_State", store.getState());
  const result = next(action);
  console.log("Next_State", store.getState());
  console.groupEnd();
  return result;
};
