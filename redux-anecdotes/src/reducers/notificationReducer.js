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

export const showNotification = (content) => {
  return {
    type: 'SHOW',
    content,
  };
};

export const hideNotification = (filter) => {
  return {
    type: 'HIDE',
  };
};

export default notificationReducer;
