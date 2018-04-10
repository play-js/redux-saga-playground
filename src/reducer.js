export function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "FETCH_SUCCEDED":
      return state + 5;
    default:
      return state;
  }
}
