// a function that returns a function that returns a function
export default ({ dispatch }) => (next) => (action) => {
  if (!action.payload || !action.payload.then) {
    return next(action); // go to the next middleware or reducer
  }

  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction); // dispatch again
  });
};
