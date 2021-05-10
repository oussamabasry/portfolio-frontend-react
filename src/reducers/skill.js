const skillReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_SKILLS":
      return action.payload;

    case "ADD_SKILL":
      return [...state, action.payload];

    case "DELETE_SKILL":
      return state.filter((ski) => ski._id !== action.payload);

    case "UPDATE_SKILL":
      return state.map((ski) =>
        ski._id === action.payload._id ? action.payload : ski
      );
    default:
      return state;
  }
};

export default skillReducer;
