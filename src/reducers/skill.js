const skillReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_SKILLS":
      return action.payload;

    case "ADD_SKILL":
      return [...state.skills, action.payload.skill];

    case "DELETE_SKILL":
      return state.skills.filter((ski) => ski._id !== action.payload);

    case "UPDATE_SKILL":
      return state.skills.map((ski) =>
        ski._id === action.payload.skill._id ? action.payload.skill : ski
      );
    default:
      return state;
  }
};

export default skillReducer;
