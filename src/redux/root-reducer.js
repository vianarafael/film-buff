import { combineReducers } from "redux";
import filmsReducer from "./films/films-reducer";

export default combineReducers({
  filmsToDisplay: filmsReducer,
});
