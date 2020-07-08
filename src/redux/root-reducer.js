import { combineReducers } from "redux";
import filmsReducer from "./films/films-reducer";
import singleFilmReducer from "./single-film/single-film.reducer";

export default combineReducers({
  filmsToDisplay: filmsReducer,
  singleFilm: singleFilmReducer,
});
