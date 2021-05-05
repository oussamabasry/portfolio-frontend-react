const experienceReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EXPERIENCES":
      return action.payload;

    case "ADD_EXEPERIENCE":
      return [...state.experiences, action.payload.experience];

    case "DELETE_EXEPERIENCE":
      return state.experiences.filter((exp) => exp._id !== action.payload);

    case "UPDATE_EXEPERIENCE":
      return state.experiences.map((exp) =>
        exp._id === action.payload.experience._id
          ? action.payload.experience
          : exp
      );
    default:
      return state;
  }
};

export default experienceReducer;
