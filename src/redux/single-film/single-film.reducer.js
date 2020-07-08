const INITIAL_STATE = {
  singleFilm: null,
};

const singleFilmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SINGLE_FILM":
      return {
        ...state,
        singleFilm: action.payload,
      };
    default:
      return state;
  }
};

export default singleFilmReducer;
