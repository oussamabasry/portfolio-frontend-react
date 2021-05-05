const educationReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EDUCATIONS":
      return action.payload;

    case "ADD_EDUCATION":
      return [...state, action.payload];

    case "DELETE_EDUCATION":
      return state.filter((edu) => edu._id !== action.payload);

    case "UPDATE_EDUCATION":
      return state.map((edu) =>
        edu._id === action.payload.education._id
          ? action.payload.education
          : edu
      );
    default:
      return state;
  }
};

export default educationReducer;
