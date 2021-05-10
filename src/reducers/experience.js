const experienceReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EXPERIENCES":
      return action.payload;

    case "ADD_EXEPERIENCE":
      return [...state, action.payload];

    case "DELETE_EXEPERIENCE":
      return state.filter((exp) => exp._id !== action.payload);

    case "UPDATE_EXEPERIENCE":
      return state.map((exp) =>
        exp._id === action.payload._id ? action.payload : exp
      );
    default:
      return state;
  }
};

export default experienceReducer;
