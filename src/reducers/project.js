const projectReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return action.payload;

    case "ADD_PROJECT":
      return [...state.projects, action.payload.project];

    case "DELETE_PROJECT":
      return state.projects.filter((proj) => proj._id !== action.payload);

    case "UPDATE_PROJECT":
      return state.projects.map((proj) =>
        proj._id === action.payload.project._id ? action.payload.project : proj
      );
    default:
      return state;
  }
};

export default projectReducer;
