import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import { setFilms } from "./redux/films/films.action";

function App({ films, setFilms }) {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results));
  }, []);
  console.log(films.filmsToDisplay);
  return (
    <div className="App">
      <input type="text" placeholder="Search.." />
      {films.filmsToDisplay
        ? films.filmsToDisplay.map((film) => {
            return (
              <div id={film.id}>
                <h3>{film.title}</h3>
                <img
                  src={`http://image.tmdb.org/t/p/w185//${film.poster_path}`}
                />
                <p>{film.overview}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
}

const mapStateToProps = (state) => ({
  films: state.filmsToDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  setFilms: (filmsToDisplay) => dispatch(setFilms(filmsToDisplay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
