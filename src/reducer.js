export function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      console.log(action);
      return state - 1;
    default:
      return state;
  }
}
