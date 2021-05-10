const projectReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return action.payload;

    case "ADD_PROJECT":
      return [...state, action.payload];

    case "DELETE_PROJECT":
      return state.filter((proj) => proj._id !== action.payload);

    case "UPDATE_PROJECT":
      return state.map((proj) =>
        proj._id === action.payload._id ? action.payload : proj
      );
    default:
      return state;
  }
};

export default projectReducer;
