const messageReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      return action.payload;
    case "UPDATE_MESSAGE":
      return state.map((msg) =>
        msg._id === action.payload._id ? action.payload : msg
      );
    default:
      return state;
  }
};

export default messageReducer;
