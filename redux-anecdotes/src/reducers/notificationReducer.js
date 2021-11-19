const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SHOW':
      return `you voted '${action.content}'`;
    case 'HIDE':
      return '';
    default:
      return state;
  }
};

let timeoutChecker;

export const showNotification = (content, t) => {
  return async (dispatch) => {
    dispatch({
      type: 'SHOW',
      content,
    });

    if (timeoutChecker) {
      clearTimeout(timeoutChecker);
    }

    timeoutChecker = setTimeout(
      () =>
        dispatch({
          type: 'HIDE',
        }),
      t * 1000
    );
  };
};

export default notificationReducer;
