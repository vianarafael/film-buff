import React, { useState, useEffect } from "react";
import "./App.css";
import "./grid.css";

import { connect } from "react-redux";
import { setFilms } from "./redux/films/films.action";

import { Link, Route } from "react-router-dom";

import movieDetails from "./components/movie-details/movie-details.component";
import allFilms from "./components/all-films/all-films.component";

const App = ({ films, setFilms, history }) => {
  const [query, setQuery] = useState("");
  // set the router for -> search-movie/:query
  // set the router for details/movie/:id
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e576111d75dee905a12167d6f1387f71"
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results));
  }, [setFilms]);

  const searchMovie = () => {
    // doesn't work well w/ spaces
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&query=${query}`
    )
      .then((res) => res.json())
      .then((res) => setFilms(res.results));
  };

  return (
    <div className="App">
      <header>
        <h1>Film buff</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => searchMovie()}>S</button>
        </div>
      </header>
      <Route exact path="/" render={history} component={allFilms} />
      <Route exact path="/details" component={movieDetails} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFilms: (filmsToDisplay) => dispatch(setFilms(filmsToDisplay)),
});

export default connect(null, mapDispatchToProps)(App);
