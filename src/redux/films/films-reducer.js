const INITIAL_STATE = {
  filmsToDisplay: null,
};

const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_FILMS":
      return {
        ...state,
        filmsToDisplay: action.payload,
      };
    default:
      return state;
  }
};

export default filmsReducer;
