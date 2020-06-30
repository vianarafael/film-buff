import React, { useState, useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import { setFilms } from "./redux/films/films.action";

function App({ films, setFilms }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results));
  }, [setFilms]);

  const searchMovie = () => {
    // doesn't work well w/ spaces
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results));
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => searchMovie()}>S</button>
      </div>
      {films.filmsToDisplay
        ? films.filmsToDisplay.map((film) => {
            return (
              <div key={film.id}>
                <h3>{film.title}</h3>
                <img
                  src={`http://image.tmdb.org/t/p/w185//${film.poster_path}`}
                  alt={film.title}
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
