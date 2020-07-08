import React from "react";
import "./all-films.styles.scss";

import { connect } from "react-redux";
import { setSingleFilm } from "../../redux/single-film/single-film.action";

const allFilms = ({ films, history, setSingleFilm }) => {
  return (
    <div className="film-container row">
      {films.filmsToDisplay
        ? films.filmsToDisplay.map((film) => {
            return (
              <div
                id={film.id}
                className="film span-1-of-4"
                key={film.id}
                onClick={() => {
                  history.push("/details");
                  setSingleFilm(film.id);
                }}
              >
                <h3>{film.title}</h3>
                <img
                  src={`http://image.tmdb.org/t/p/w185//${film.poster_path}`}
                  alt={film.title}
                />
                419704
                <p>{film.overview}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.filmsToDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  setSingleFilm: (singleFilm) => dispatch(setSingleFilm(singleFilm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(allFilms);
